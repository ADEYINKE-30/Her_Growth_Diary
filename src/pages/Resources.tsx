import { useState } from 'react'
import { resources } from '../data/content'

export default function Resources() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main style={{ backgroundColor: '#FBF8F5', minHeight: '100vh' }}>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(160deg, #F4F1F8 0%, #FBF8F5 60%, #FDF0F3 100%)',
          padding: '5rem 2rem 3rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#EDE7F6',
              borderRadius: '9999px',
              padding: '0.35rem 1rem',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#A891C0', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Resources
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#3D2A3F',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Tools for your journey.
          </h1>
          <p style={{ fontSize: '1rem', color: '#7A6A7C', lineHeight: 1.75 }}>
            A gentle collection of prompts, guides, and books to support you wherever you are in
            your growth journey.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div
        style={{
          borderBottom: '1.5px solid #EDE0E8',
          backgroundColor: '#FEFCFA',
          position: 'sticky',
          top: '68px',
          zIndex: 40,
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {resources.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === i ? '2px solid #E8A4B0' : '2px solid transparent',
                padding: '1.1rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: activeTab === i ? 600 : 400,
                color: activeTab === i ? '#3D2A3F' : '#7A6A7C',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s, border-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Resource grid */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {resources[activeTab].items.map((item, i) => (
              <ResourceCard key={i} {...item} emoji={resources[activeTab].emoji} />
            ))}
          </div>
        </div>
      </section>

      {/* All resources overview */}
      <section style={{ padding: '0 2rem 5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2
            className="font-serif"
            style={{ fontSize: '1.5rem', fontWeight: 600, color: '#3D2A3F', marginBottom: '2rem' }}
          >
            All categories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {resources.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                style={{
                  backgroundColor: activeTab === i ? '#3D2A3F' : '#FEFCFA',
                  border: '1.5px solid #EDE0E8',
                  borderRadius: '1.25rem',
                  padding: '1.5rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== i) {
                    e.currentTarget.style.borderColor = '#E8A4B0'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== i) {
                    e.currentTarget.style.borderColor = '#EDE0E8'
                    e.currentTarget.style.transform = 'none'
                  }
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.625rem' }}>{cat.emoji}</div>
                <p
                  className="font-serif"
                  style={{
                    fontSize: '0.975rem',
                    fontWeight: 600,
                    color: activeTab === i ? '#FEFCFA' : '#3D2A3F',
                    margin: '0 0 0.25rem',
                  }}
                >
                  {cat.category}
                </p>
                <p style={{ fontSize: '0.78rem', color: activeTab === i ? '#D6CADB' : '#9B8A9E', margin: 0 }}>
                  {cat.items.length} resources
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        style={{
          background: 'linear-gradient(135deg, #3D2A3F 0%, #5C4A5E 100%)',
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <p className="font-serif" style={{ fontSize: '2rem', fontStyle: 'italic', color: '#FEFCFA', marginBottom: '0.75rem' }}>
            New resources, always.
          </p>
          <p style={{ fontSize: '0.925rem', color: '#B89DB5', lineHeight: 1.7, marginBottom: '2rem' }}>
            Join the diary to receive new prompts and guides directly to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', maxWidth: '360px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1.5px solid rgba(237, 224, 232, 0.25)',
                color: '#FEFCFA',
                flex: 1,
              }}
              aria-label="Email for newsletter"
            />
            <button
              style={{
                backgroundColor: '#E8A4B0',
                color: '#FEFCFA',
                border: 'none',
                borderRadius: '0.75rem',
                padding: '0.75rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#C05C74' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#E8A4B0' }}
            >
              Join
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

function ResourceCard({ title, description, emoji }: { title: string; description: string; emoji: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: '#FEFCFA',
        border: `1.5px solid ${hov ? '#E8A4B0' : '#EDE0E8'}`,
        borderRadius: '1.25rem',
        padding: '2rem',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? '0 12px 32px rgba(61, 42, 63, 0.08)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '0.875rem',
          backgroundColor: '#FDF0F3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          marginBottom: '1.25rem',
        }}
      >
        {emoji}
      </div>
      <h3 className="font-serif" style={{ fontSize: '1.05rem', fontWeight: 600, color: '#3D2A3F', marginBottom: '0.625rem', lineHeight: 1.35 }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#5C4A5E', lineHeight: 1.65, margin: '0 0 1.25rem' }}>
        {description}
      </p>
      <button
        style={{
          background: 'none',
          border: 'none',
          color: '#E8A4B0',
          fontSize: '0.825rem',
          fontWeight: 600,
          cursor: 'pointer',
          padding: 0,
          letterSpacing: '0.02em',
        }}
      >
        Explore →
      </button>
    </div>
  )
}
