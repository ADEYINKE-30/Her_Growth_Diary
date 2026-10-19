import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPublicDiary } from '../services/public'
import CategoryBadge from '../components/common/CategoryBadge'
import Card from '../components/common/Card'

export default function Article() {
  const navigate = useNavigate()
  const { articleId } = useParams()
  const diaryQuery = useQuery({ queryKey: ['public-diary'], queryFn: getPublicDiary })
  const entries = diaryQuery.data ?? []
  const entry = entries.find((e) => e.id === articleId)

  if (diaryQuery.isLoading) {
    return <main style={{ padding: '6rem 2rem', textAlign: 'center', color: '#7A6A7C' }}>Loading entry…</main>
  }

  if (diaryQuery.isError) {
    return <main style={{ padding: '6rem 2rem', textAlign: 'center', color: '#7A6A7C' }}>We couldn’t load this entry right now.</main>
  }

  if (!entry) {
    return (
      <main style={{ padding: '6rem 2rem', textAlign: 'center', color: '#7A6A7C' }}>
        <h1 className="font-serif" style={{ color: '#3D2A3F' }}>Entry not found</h1>
        <button type="button" onClick={() => navigate('/diary')} style={{ color: '#C05C74', background: 'none', border: 'none', cursor: 'pointer' }}>
          Return to the diary
        </button>
      </main>
    )
  }

  const currentIndex = entries.findIndex((e) => e.id === entry.id)
  const prev = currentIndex > 0 ? entries[currentIndex - 1] : null
  const next = currentIndex < entries.length - 1 ? entries[currentIndex + 1] : null
  const related = entries.filter((e) => e.id !== entry.id).slice(0, 2)

  const paragraphs = entry.content.trim().split('\n\n').filter(Boolean)

  return (
    <main style={{ backgroundColor: '#FBF8F5' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid #EDE0E8', backgroundColor: '#FEFCFA' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.8rem', color: '#9B8A9E' }}>
          <button className="hover-pink-text" onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9B8A9E', padding: 0, transition: 'color 0.2s' }}
          >Home</button>
          <span>›</span>
          <button className="hover-pink-text" onClick={() => navigate('/diary')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9B8A9E', padding: 0, transition: 'color 0.2s' }}
          >Diary</button>
          <span>›</span>
          <span style={{ color: '#5C4A5E' }}>{entry.category}</span>
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(160deg, #FBF8F5 0%, #FDF0F3 100%)',
          padding: '4rem 2rem 3rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <CategoryBadge label={entry.category} tone="article" />
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 700,
              color: '#3D2A3F',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            {entry.title}
          </h1>
          <p style={{ fontSize: '1rem', color: '#5C4A5E', lineHeight: 1.75, marginBottom: '1.75rem' }}>
            {entry.excerpt}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.8rem', color: '#9B8A9E' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🌸</span>
              <span style={{ fontWeight: 500, color: '#5C4A5E' }}>Her Growth Diary</span>
            </span>
            <span>·</span>
            <span>{entry.date}</span>
            <span>·</span>
            <span>{entry.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            borderRadius: '1.5rem',
            overflow: 'hidden',
            height: '420px',
            backgroundColor: '#F8DDE4',
            boxShadow: '0 16px 48px rgba(61, 42, 63, 0.10)',
          }}
        >
          <img
            src={entry.image.replace('w=600&h=400', 'w=1200&h=700')}
            alt={entry.imageAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      {/* Article body */}
      <article style={{ maxWidth: '680px', margin: '0 auto', padding: '3.5rem 2rem' }}>
        {paragraphs.map((para, i) => {
          const isDearGirl = para.startsWith('Dear girl')
          const isClosing = para.includes('With love') || para === 'Keep going.' || para === 'Take your time. Choose yourself. Keep becoming.'
          const isPullQuote = i === 2 || i === 4

          if (isPullQuote) {
            return (
              <blockquote
                key={i}
                style={{
                  borderLeft: '3px solid #E8A4B0',
                  margin: '2.5rem 0',
                  paddingLeft: '1.75rem',
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    color: '#3D2A3F',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              </blockquote>
            )
          }

          return (
            <p
              key={i}
              className={isDearGirl || isClosing ? 'font-serif' : ''}
              style={{
                fontSize: isDearGirl ? '1.25rem' : '1rem',
                fontStyle: isDearGirl ? 'italic' : 'normal',
                fontWeight: isDearGirl ? 600 : 400,
                color: isDearGirl ? '#3D2A3F' : '#5C4A5E',
                lineHeight: 1.85,
                marginBottom: '1.5rem',
              }}
            >
              {para}
            </p>
          )
        })}

        {/* Author card */}
        <div
          style={{
            backgroundColor: '#FDF0F3',
            border: '1.5px solid #F0BEC9',
            borderRadius: '1.25rem',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '3rem',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#E8A4B0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              flexShrink: 0,
            }}
          >
            🌸
          </div>
          <div>
            <p style={{ fontWeight: 600, color: '#3D2A3F', margin: '0 0 0.2rem', fontSize: '0.875rem' }}>
              Her Growth Diary
            </p>
            <p style={{ fontSize: '0.8rem', color: '#7A6A7C', margin: 0, lineHeight: 1.5 }}>
              A gentle space for growth, self-discovery, and becoming.
            </p>
          </div>
        </div>
      </article>

      {/* Prev / Next */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem',
            borderTop: '1.5px solid #EDE0E8',
            paddingTop: '2rem',
          }}
        >
          {prev ? (
            <button
              className="hover-pink-border"
              onClick={() => navigate(`/diary/${prev.id}`)}
              style={{
                backgroundColor: '#FEFCFA',
                border: '1.5px solid #EDE0E8',
                borderRadius: '1rem',
                padding: '1.25rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
            >
              <p style={{ fontSize: '0.7rem', color: '#9B8A9E', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600, margin: '0 0 0.5rem' }}>← Previous</p>
              <p className="font-serif" style={{ fontSize: '0.9rem', color: '#3D2A3F', margin: 0, lineHeight: 1.4 }}>{prev.title}</p>
            </button>
          ) : <div />}
          {next ? (
            <button
              className="hover-pink-border"
              onClick={() => navigate(`/diary/${next.id}`)}
              style={{
                backgroundColor: '#FEFCFA',
                border: '1.5px solid #EDE0E8',
                borderRadius: '1rem',
                padding: '1.25rem',
                textAlign: 'right',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
            >
              <p style={{ fontSize: '0.7rem', color: '#9B8A9E', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600, margin: '0 0 0.5rem' }}>Next →</p>
              <p className="font-serif" style={{ fontSize: '0.9rem', color: '#3D2A3F', margin: 0, lineHeight: 1.4 }}>{next.title}</p>
            </button>
          ) : <div />}
        </div>
      </div>

      {/* Related */}
      <section style={{ backgroundColor: '#FDF0F3', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2
            className="font-serif"
            style={{ fontSize: '1.5rem', fontWeight: 600, color: '#3D2A3F', marginBottom: '2rem' }}
          >
            You might also like…
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {related.map((r) => (
              <Card key={r.id} entry={r} variant="related" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
