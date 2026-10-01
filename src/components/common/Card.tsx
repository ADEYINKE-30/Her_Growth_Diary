import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { DiaryEntry } from '../../types/content'
import CategoryBadge from './CategoryBadge'

type CardVariant = 'home' | 'diary' | 'related'

interface CardProps {
  entry: DiaryEntry
  variant: CardVariant
}

export default function Card({ entry, variant }: CardProps) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const isRelated = variant === 'related'
  const isDiary = variant === 'diary'

  return (
    <article
      onClick={() => navigate(`/diary/${entry.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          navigate(`/diary/${entry.id}`)
        }
      }}
      style={
        isRelated
          ? {
              backgroundColor: 'var(--color-cream-50)',
              border: '1.5px solid var(--color-plum-100)',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.25s, box-shadow 0.25s',
              display: 'flex',
              gap: '1rem',
              padding: '1.25rem',
              alignItems: 'center',
              transform: hovered ? 'translateY(-3px)' : 'none',
              boxShadow: hovered ? '0 8px 24px rgba(61, 42, 63, 0.08)' : 'none',
            }
          : {
              backgroundColor: 'var(--color-cream-50)',
              border: '1.5px solid var(--color-plum-100)',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              cursor: 'pointer',
              transform: hovered ? (isDiary ? 'translateY(-4px)' : 'translateY(-5px)') : isDiary ? 'none' : 'translateY(0)',
              boxShadow: hovered
                ? isDiary
                  ? '0 12px 32px rgba(61, 42, 63, 0.09)'
                  : '0 16px 40px rgba(61, 42, 63, 0.10)'
                : isDiary
                  ? 'none'
                  : '0 2px 12px rgba(61, 42, 63, 0.04)',
              transition: isDiary ? 'transform 0.25s, box-shadow 0.25s' : 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
            }
      }
    >
      <div
        style={
          isRelated
            ? { width: '80px', height: '80px', borderRadius: '0.75rem', overflow: 'hidden', flexShrink: 0, backgroundColor: 'var(--color-blush-100)' }
            : { overflow: 'hidden', height: isDiary ? '200px' : '220px', flexShrink: 0, backgroundColor: 'var(--color-blush-100)' }
        }
      >
        <img
          src={entry.image}
          alt={entry.imageAlt}
          style={
            isRelated
              ? { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }
              : {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: isDiary ? 'transform 0.4s' : 'transform 0.5s ease',
                  transform: hovered ? (isDiary ? 'scale(1.04)' : 'scale(1.05)') : 'scale(1)',
                  display: 'block',
                }
          }
        />
      </div>
      <div
        style={
          isRelated
            ? undefined
            : { padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: isDiary ? '0.625rem' : '0.75rem', flex: 1 }
        }
      >
        <CategoryBadge label={entry.category} tone={isRelated ? 'article' : isDiary ? 'diary' : 'default'} />
        <h3
          className="font-serif"
          style={
            isRelated
              ? { fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-plum-800)', margin: '0.25rem 0 0', lineHeight: 1.35 }
              : { fontSize: isDiary ? '1.1rem' : '1.2rem', fontWeight: 600, color: 'var(--color-plum-800)', lineHeight: 1.35, margin: 0 }
          }
        >
          {entry.title}
        </h3>
        {!isRelated && (
          <p style={{ fontSize: isDiary ? '0.85rem' : '0.875rem', color: 'var(--color-plum-600)', lineHeight: 1.65, margin: 0, flex: 1 }}>
            {isDiary ? `${entry.excerpt.slice(0, 100)}…` : entry.excerpt}
          </p>
        )}
        {!isRelated && (
          <div
            style={
              isDiary
                ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--color-plum-100)' }
                : { display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--color-plum-100)' }
            }
          >
            <span style={{ fontSize: isDiary ? '0.73rem' : '0.75rem', color: '#9B8A9E' }}>
              {isDiary ? entry.readTime : `${entry.date} · ${entry.readTime}`}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-blush-300)', fontWeight: 500, display: isDiary ? undefined : 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {isDiary ? 'Read →' : 'Read more →'}
            </span>
          </div>
        )}
      </div>
    </article>
  )
}
