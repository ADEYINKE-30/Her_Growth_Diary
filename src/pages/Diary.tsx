import { useState } from 'react'
import type { Navigate } from '../types'
import { diaryEntries } from '../data/content'

const categories = ['All', 'Growth', 'Mindset', 'Confidence', 'Self-Love', 'Life & Growth', 'Personal Growth']

export default function Diary({ navigate }: { navigate: Navigate }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = diaryEntries.filter((e) => {
    const matchCat = activeCategory === 'All' || e.category === activeCategory
    const matchSearch =
      search.trim() === '' ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = diaryEntries[0]

  return (
    <main style={{ backgroundColor: '#FBF8F5', minHeight: '100vh' }}>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(160deg, #FBF8F5 0%, #FDF0F3 100%)',
          padding: '5rem 2rem 3rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.75rem',
              color: '#E8A4B0',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            The Diary
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#3D2A3F',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
            }}
          >
            Words for every season.
          </h1>
          <p style={{ fontSize: '1rem', color: '#7A6A7C', maxWidth: '480px', lineHeight: 1.7 }}>
            Personal reflections, honest letters, and gentle reminders — written for the girl you
            are right now.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '3rem 2rem', backgroundColor: '#FEFCFA', borderBottom: '1.5px solid #EDE0E8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: '#9B8A9E', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem' }}>
            Featured Entry
          </p>
          <div
            onClick={() => navigate('article', featured.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('article', featured.id)}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
              backgroundColor: '#FEFCFA',
              borderRadius: '1.5rem',
              border: '1.5px solid #EDE0E8',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(61, 42, 63, 0.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
            className="featured-card"
          >
            <div style={{ padding: '3rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#FDF0F3',
                  color: '#C05C74',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  marginBottom: '1.25rem',
                }}
              >
                {featured.category}
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 600,
                  color: '#3D2A3F',
                  lineHeight: 1.3,
                  marginBottom: '1rem',
                }}
              >
                {featured.title}
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#5C4A5E', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', color: '#9B8A9E' }}>{featured.date}</span>
                <span style={{ fontSize: '0.8rem', color: '#9B8A9E' }}>·</span>
                <span style={{ fontSize: '0.8rem', color: '#9B8A9E' }}>{featured.readTime}</span>
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.875rem',
                    color: '#E8A4B0',
                    fontWeight: 500,
                  }}
                >
                  Read entry →
                </span>
              </div>
            </div>
            <div style={{ height: '360px', backgroundColor: '#F8DDE4', overflow: 'hidden' }}>
              <img
                src={featured.image}
                alt={featured.imageAlt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Search */}
      <section style={{ padding: '2.5rem 2rem', backgroundColor: '#FBF8F5', borderBottom: '1.5px solid #EDE0E8', position: 'sticky', top: '68px', zIndex: 40 }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Categories */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', flex: 1 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? '#3D2A3F' : '#FEFCFA',
                  color: activeCategory === cat ? '#FEFCFA' : '#5C4A5E',
                  border: `1.5px solid ${activeCategory === cat ? '#3D2A3F' : '#EDE0E8'}`,
                  borderRadius: '9999px',
                  padding: '0.4rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', minWidth: '220px' }}>
            <input
              type="search"
              placeholder="Search entries…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search diary entries"
              style={{ paddingLeft: '2.5rem' }}
            />
            <svg
              style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: '#9B8A9E' }}
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </section>

      {/* Entry grid */}
      <section style={{ padding: '3rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#9B8A9E' }}>
              <p className="font-serif" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>No entries found. Try a different search.</p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.75rem',
              }}
            >
              {filtered.map((entry) => (
                <EntryCard key={entry.id} entry={entry} navigate={navigate} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .featured-card > div:last-child { height: 220px !important; }
        }
      `}</style>
    </main>
  )
}

function EntryCard({ entry, navigate }: { entry: (typeof diaryEntries)[0]; navigate: Navigate }) {
  const [hov, setHov] = useState(false)
  return (
    <article
      onClick={() => navigate('article', entry.id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          navigate('article', entry.id)
        }
      }}
      style={{
        backgroundColor: '#FEFCFA',
        border: '1.5px solid #EDE0E8',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? '0 12px 32px rgba(61, 42, 63, 0.09)' : 'none',
        transition: 'transform 0.25s, box-shadow 0.25s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#F8DDE4' }}>
        <img
          src={entry.image}
          alt={entry.imageAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s', transform: hov ? 'scale(1.04)' : 'scale(1)' }}
        />
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#EDE7F6',
            color: '#7A6A7C',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.28rem 0.7rem',
            borderRadius: '9999px',
            alignSelf: 'flex-start',
          }}
        >
          {entry.category}
        </span>
        <h3 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#3D2A3F', lineHeight: 1.35, margin: 0 }}>
          {entry.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#7A6A7C', lineHeight: 1.65, margin: 0, flex: 1 }}>
          {entry.excerpt.slice(0, 100)}…
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid #EDE0E8' }}>
          <span style={{ fontSize: '0.73rem', color: '#9B8A9E' }}>{entry.readTime}</span>
          <span style={{ fontSize: '0.8rem', color: '#E8A4B0', fontWeight: 500 }}>Read →</span>
        </div>
      </div>
    </article>
  )
}
