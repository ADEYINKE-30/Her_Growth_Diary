import type { CSSProperties } from 'react'

type CategoryBadgeTone = 'default' | 'diary' | 'article'

interface CategoryBadgeProps {
  label: string
  tone?: CategoryBadgeTone
}

const toneStyles: Record<CategoryBadgeTone, CSSProperties> = {
  default: {
    backgroundColor: '#EDE7F6',
    color: '#7A6A7C',
    fontWeight: 600,
    padding: '0.3rem 0.75rem',
  },
  diary: {
    backgroundColor: '#EDE7F6',
    color: '#7A6A7C',
    fontWeight: 700,
    padding: '0.28rem 0.7rem',
    alignSelf: 'flex-start',
  },
  article: {
    backgroundColor: '#FDF0F3',
    color: '#C05C74',
    fontWeight: 700,
    padding: '0.3rem 0.85rem',
  },
}

export default function CategoryBadge({ label, tone = 'default' }: CategoryBadgeProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        ...toneStyles[tone],
        fontSize: '0.7rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        borderRadius: '9999px',
      }}
    >
      {label}
    </span>
  )
}
