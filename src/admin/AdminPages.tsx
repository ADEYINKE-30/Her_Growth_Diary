import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'
import {
  createDiary, createPrompt, createResource, createTopic, deleteDiary, deletePrompt,
  deleteResource, deleteTopic, DiaryAdminPost, listDiary, listPrompts, listResources,
  listSubscribers, listTopics, Prompt, Resource, Topic, updateDiary, updatePrompt,
  updateResource, updateTopic, login,
} from '../services/admin'

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(1) })
const diarySchema = z.object({
  slug: z.string().min(1), title: z.string().min(1), excerpt: z.string().min(1),
  content: z.string().min(1), coverImageUrl: z.string().optional(), coverImageAlt: z.string().optional(),
  publishedAt: z.string().optional(), status: z.enum(['DRAFT', 'PUBLISHED']), topicIds: z.string().optional(),
})
const topicSchema = z.object({ slug: z.string().min(1), name: z.string().min(1), description: z.string().min(1), sortOrder: z.coerce.number().int() })
const resourceSchema = z.object({
  categoryId: z.string().uuid(), title: z.string().min(1), description: z.string().min(1),
  url: z.string().optional(), author: z.string().optional(), sortOrder: z.coerce.number().int(), isPublished: z.boolean(),
})
const promptSchema = z.object({ prompt: z.string().min(1), sortOrder: z.coerce.number().int(), isPublished: z.boolean() })

function ErrorMessage({ error }: { error: unknown }) {
  return error ? <p className="admin-error">{error instanceof Error ? error.message : 'Something went wrong.'}</p> : null
}

export function AdminLogin() {
  const navigate = useNavigate()
  const location = useLocation()
  const queryClient = useQueryClient()
  const form = useForm({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '' } })
  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof loginSchema>) => login(values.email, values.password),
    onSuccess: (result) => { queryClient.setQueryData(['admin'], result); navigate((location.state as { from?: string })?.from ?? '/admin', { replace: true }) },
  })
  return (
    <div className="admin-login">
      <form className="admin-card admin-login-card admin-form" onSubmit={form.handleSubmit((values) => mutation.mutate(values))}>
        <div><p className="admin-eyebrow">Her Growth Diary</p><h2>Welcome back</h2><p className="admin-muted">Sign in to manage your content.</p></div>
        <label>Email<input type="email" {...form.register('email')} />{form.formState.errors.email && <span className="admin-error">Enter a valid email.</span>}</label>
        <label>Password<input type="password" {...form.register('password')} />{form.formState.errors.password && <span className="admin-error">Password is required.</span>}</label>
        <ErrorMessage error={mutation.error} />
        <button className="admin-button" disabled={mutation.isPending}>{mutation.isPending ? 'Signing in…' : 'Sign in'}</button>
      </form>
    </div>
  )
}

export function AdminDashboard() {
  const diary = useQuery({ queryKey: ['admin-diary'], queryFn: listDiary })
  const topics = useQuery({ queryKey: ['admin-topics'], queryFn: listTopics })
  const resources = useQuery({ queryKey: ['admin-resources'], queryFn: listResources })
  const prompts = useQuery({ queryKey: ['admin-prompts'], queryFn: listPrompts })
  return <><header className="admin-page-header"><div><p className="admin-eyebrow">Overview</p><h2>Good to see you.</h2></div></header>
    <div className="admin-grid">
      {[['Diary posts', diary.data?.length], ['Topics', topics.data?.length], ['Resources', resources.data?.length], ['Prompts', prompts.data?.length]].map(([label, value]) => <div className="admin-card admin-stat" key={label as string}><span className="admin-muted">{label}</span><strong>{value ?? '—'}</strong></div>)}
    </div>
  </>
}

export function AdminDiary() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const query = useQuery({ queryKey: ['admin-diary'], queryFn: listDiary })
  const remove = useMutation({ mutationFn: deleteDiary, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-diary'] }) })
  return <><header className="admin-page-header"><div><p className="admin-eyebrow">Content</p><h2>Diary posts</h2></div><button className="admin-button" onClick={() => navigate('/admin/diary/new')}>New post</button></header>
    <div className="admin-card"><ErrorMessage error={query.error ?? remove.error} /><table className="admin-table"><thead><tr><th>Title</th><th>Status</th><th>Updated</th><th /></tr></thead><tbody>{query.data?.map((post) => <tr key={post.id}><td><strong>{post.title}</strong><br /><span className="admin-muted">{post.slug}</span></td><td>{post.status}</td><td>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Unpublished'}</td><td className="admin-actions"><button className="admin-link-button" onClick={() => navigate(`/admin/diary/${post.id}/edit`)}>Edit</button><button className="admin-link-button admin-danger" onClick={() => window.confirm('Delete this post?') && remove.mutate(post.id)}>Delete</button></td></tr>)}</tbody></table>{!query.isLoading && !query.data?.length && <p className="admin-muted">No diary posts yet.</p>}</div>
  </>
}

type DiaryFormValues = z.infer<typeof diarySchema>
export function AdminDiaryForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const posts = useQuery({ queryKey: ['admin-diary'], queryFn: listDiary })
  const topics = useQuery({ queryKey: ['admin-topics'], queryFn: listTopics })
  const existing = posts.data?.find((post) => post.id === id)
  const form = useForm<DiaryFormValues>({ resolver: zodResolver(diarySchema), values: existing ? {
    slug: existing.slug, title: existing.title, excerpt: existing.excerpt, content: existing.content,
    coverImageUrl: existing.coverImageUrl ?? '', coverImageAlt: existing.coverImageAlt ?? '',
    publishedAt: existing.publishedAt?.slice(0, 16) ?? '', status: existing.status, topicIds: existing.topics.map((topic) => topic.id).join(','),
  } : { slug: '', title: '', excerpt: '', content: '', coverImageUrl: '', coverImageAlt: '', publishedAt: '', status: 'DRAFT', topicIds: '' } })
  const mutation = useMutation({
    mutationFn: (values: DiaryFormValues) => {
      const { topicIds, publishedAt, coverImageUrl, coverImageAlt, ...rest } = values
      const input = { ...rest, topicIds: topicIds ? topicIds.split(',').map((value) => value.trim()).filter(Boolean) : [], publishedAt: publishedAt ? new Date(publishedAt).toISOString() : null, coverImageUrl: coverImageUrl || null, coverImageAlt: coverImageAlt || null }
      return id ? updateDiary(id, input) : createDiary(input)
    },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['admin-diary'] }); navigate('/admin/diary') },
  })
  return <><header className="admin-page-header"><div><p className="admin-eyebrow">Diary</p><h2>{id ? 'Edit post' : 'New post'}</h2></div></header>
    <form className="admin-card admin-form" onSubmit={form.handleSubmit((values) => mutation.mutate(values))}>
      {(['slug', 'title', 'excerpt'] as const).map((field) => <label key={field}>{field[0].toUpperCase() + field.slice(1)}<input {...form.register(field)} />{form.formState.errors[field] && <span className="admin-error">This field is required.</span>}</label>)}
      <label>Content<textarea {...form.register('content')} /></label>
      <label>Cover image URL<input {...form.register('coverImageUrl')} /></label>
      <label>Cover image alt text<input {...form.register('coverImageAlt')} /></label>
      <label>Status<select {...form.register('status')}><option value="DRAFT">Draft</option><option value="PUBLISHED">Published</option></select></label>
      <label>Published at<input type="datetime-local" {...form.register('publishedAt')} /></label>
      <label>Topic IDs (comma separated)<input placeholder={topics.data?.map((topic) => topic.id).join(', ')} {...form.register('topicIds')} /></label>
      <ErrorMessage error={mutation.error} /><button className="admin-button" disabled={mutation.isPending}>{mutation.isPending ? 'Saving…' : 'Save post'}</button>
    </form>
  </>
}

function EntityTable<T extends { id: string }>({ rows, columns, onEdit, onDelete }: { rows: T[]; columns: (keyof T)[]; onEdit: (row: T) => void; onDelete: (row: T) => void }) {
  return <table className="admin-table"><thead><tr>{columns.map((column) => <th key={String(column)}>{String(column)}</th>)}<th /></tr></thead><tbody>{rows.map((row) => <tr key={row.id}>{columns.map((column) => <td key={String(column)}>{String(row[column] ?? '—')}</td>)}<td className="admin-actions"><button className="admin-link-button" onClick={() => onEdit(row)}>Edit</button><button className="admin-link-button admin-danger" onClick={() => onDelete(row)}>Delete</button></td></tr>)}</tbody></table>
}

export function AdminTopics() {
  const queryClient = useQueryClient(); const query = useQuery({ queryKey: ['admin-topics'], queryFn: listTopics }); const [editing, setEditing] = useState<Topic | null>(null)
  return <EntityManager title="Topics" query={query} rows={query.data ?? []} editing={editing} setEditing={setEditing} fields={['slug', 'name', 'description', 'sortOrder']} schema={topicSchema} create={createTopic} update={updateTopic} remove={deleteTopic} columns={['name', 'slug', 'sortOrder']} invalidate={() => queryClient.invalidateQueries({ queryKey: ['admin-topics'] })} />
}

export function AdminResources() {
  const queryClient = useQueryClient(); const query = useQuery({ queryKey: ['admin-resources'], queryFn: listResources }); const [editing, setEditing] = useState<Resource | null>(null)
  return <EntityManager title="Resources" query={query} rows={query.data ?? []} editing={editing} setEditing={setEditing} fields={['categoryId', 'title', 'description', 'url', 'author', 'sortOrder', 'isPublished']} schema={resourceSchema} create={createResource} update={updateResource} remove={deleteResource} columns={['title', 'categoryId', 'isPublished']} invalidate={() => queryClient.invalidateQueries({ queryKey: ['admin-resources'] })} />
}

export function AdminPrompts() {
  const queryClient = useQueryClient(); const query = useQuery({ queryKey: ['admin-prompts'], queryFn: listPrompts }); const [editing, setEditing] = useState<Prompt | null>(null)
  return <EntityManager title="Journal prompts" query={query} rows={query.data ?? []} editing={editing} setEditing={setEditing} fields={['prompt', 'sortOrder', 'isPublished']} schema={promptSchema} create={createPrompt} update={updatePrompt} remove={deletePrompt} columns={['prompt', 'sortOrder', 'isPublished']} invalidate={() => queryClient.invalidateQueries({ queryKey: ['admin-prompts'] })} />
}

function EntityManager<T extends { id: string }>({ title, query, rows, editing, setEditing, fields, schema, create, update, remove, columns, invalidate }: { title: string; query: { error: unknown }; rows: T[]; editing: T | null; setEditing: (value: T | null) => void; fields: string[]; schema: z.ZodType; create: (input: Record<string, unknown>) => Promise<unknown>; update: (id: string, input: Record<string, unknown>) => Promise<unknown>; remove: (id: string) => Promise<void>; columns: (keyof T)[]; invalidate: () => void }) {
  const form = useForm<Record<string, unknown>>({ values: editing ? editing as unknown as Record<string, unknown> : {} })
  const [formError, setFormError] = useState<unknown>()
  async function submit(values: Record<string, unknown>) {
    const parsed = schema.safeParse(values)
    if (!parsed.success) {
      setFormError(new Error(parsed.error.issues[0]?.message ?? 'Please check the form.'))
      return
    }
    try { editing ? await update(editing.id, parsed.data as Record<string, unknown>) : await create(parsed.data as Record<string, unknown>); setEditing(null); form.reset({}); invalidate() } catch (error) { setFormError(error) }
  }
  return <><header className="admin-page-header"><div><p className="admin-eyebrow">Manage</p><h2>{title}</h2></div><button className="admin-button" onClick={() => setEditing({} as T)}>New</button></header>
    <div className="admin-card admin-form" style={{ marginBottom: '1rem' }}>{editing && <><h3>{editing.id ? 'Edit' : 'New'} {title.slice(0, -1).toLowerCase()}</h3>{fields.map((field) => <label key={field}>{field}{field === 'isPublished' ? <input type="checkbox" defaultChecked={Boolean((editing as Record<string, unknown>)[field])} {...form.register(field)} /> : <input type={field === 'sortOrder' ? 'number' : 'text'} defaultValue={String((editing as Record<string, unknown>)[field] ?? '')} {...form.register(field)} />}</label>)}<div className="admin-actions"><button className="admin-button" onClick={form.handleSubmit(submit)}>Save</button><button className="admin-link-button" onClick={() => setEditing(null)}>Cancel</button></div><ErrorMessage error={formError} /> </>}</div>
    <div className="admin-card"><ErrorMessage error={query.error} /><EntityTable rows={rows} columns={columns} onEdit={setEditing} onDelete={async (row) => { if (window.confirm('Delete this item?')) { await remove(row.id); invalidate() } }} /></div>
  </>
}

export function AdminSubscribers() {
  const query = useQuery({ queryKey: ['admin-subscribers'], queryFn: listSubscribers })
  return <><header className="admin-page-header"><div><p className="admin-eyebrow">Audience</p><h2>Subscribers</h2></div></header><div className="admin-card"><ErrorMessage error={query.error} /><EntityTable rows={query.data ?? []} columns={['email', 'subscribedAt']} onEdit={() => undefined} onDelete={() => undefined} /></div></>
}
