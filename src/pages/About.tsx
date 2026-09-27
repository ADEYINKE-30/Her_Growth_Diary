import type { NavProps } from '../types'

export default function About({ navigate }: Pick<NavProps, 'navigate'>) {
  const beliefs = [
    { icon: '🌿', title: 'You are not behind.', body: 'Life is not a race with a fixed finish line. Your journey is unfolding at exactly the pace it needs to.' },
    { icon: '💗', title: 'Small progress still counts.', body: 'Every tiny step you take — every difficult moment you walk through — is still movement. Still growth.' },
    { icon: '✨', title: 'You are allowed to change.', body: 'Outgrowing who you were is not betrayal. It is the most honest thing you can do.' },
    { icon: '🌸', title: 'Your story matters.', body: 'The quiet, unpolished, in-between version of you is just as worthy as the version you are becoming.' },
  ]

  const sections = [
    {
      title: 'Why Her Growth Diary Exists',
      body: 'Growing up can feel confusing, lonely, and overwhelming — even when it doesn\'t look that way from the outside. You can be surrounded by people and still feel deeply unseen. You can look perfectly fine and still be silently wondering if you\'re doing this right.\n\nHer Growth Diary was created to be the gentle voice that says: you are not alone in this, and you are not falling behind. It is a place where the in-between season of becoming is not something to be ashamed of — it is something to be witnessed, understood, and gently encouraged.',
    },
    {
      title: 'Our Story',
      body: 'This space was born out of the kind of conversations that don\'t always happen out loud — the ones you have with yourself in the quiet of the night, in the pages of a journal, in the space between who you were and who you are trying to become.\n\nHer Growth Diary exists to hold that space. To say the things you needed to hear. To reflect back to you the truth that your growth is valid, your pace is enough, and your story is worth telling.',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(160deg, #FBF8F5 0%, #F4F1F8 60%, #FDF0F3 100%)',
          padding: '6rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#EDE7F6',
              borderRadius: '9999px',
              padding: '0.35rem 1rem',
              marginBottom: '2rem',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#A891C0', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              About this space
            </span>
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 600,
              color: '#3D2A3F',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            You don't have to become someone else{' '}
            <span style={{ color: '#E8A4B0', fontStyle: 'italic' }}>to become better.</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#5C4A5E', lineHeight: 1.8 }}>
            Her Growth Diary is a gentle digital space created for every girl who is figuring it
            out, healing through it, growing past it, and becoming more of who she truly is — one
            honest day at a time.
          </p>
        </div>
      </section>

      {/* Image + intro */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FBF8F5' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            <div
              style={{
                borderRadius: '2rem',
                overflow: 'hidden',
                height: '480px',
                backgroundColor: '#F8DDE4',
                boxShadow: '0 16px 48px rgba(61, 42, 63, 0.1)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1538045698727-ac45d4365100?w=700&h=900&fit=crop&auto=format"
                alt="Open journal with pen resting beside it"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
              {sections.map((sec) => (
                <div key={sec.title} style={{ marginBottom: '2.5rem' }}>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#3D2A3F',
                      marginBottom: '1rem',
                    }}
                  >
                    {sec.title}
                  </h2>
                  {sec.body.split('\n\n').map((para, i) => (
                    <p key={i} style={{ fontSize: '0.95rem', color: '#5C4A5E', lineHeight: 1.8, marginBottom: '0.875rem' }}>
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FDF0F3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              className="font-serif"
              style={{ fontSize: '2rem', fontWeight: 600, color: '#3D2A3F', marginBottom: '0.75rem' }}
            >
              What We Believe
            </h2>
            <p style={{ fontSize: '0.975rem', color: '#7A6A7C' }}>The values at the heart of everything here.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {beliefs.map((b) => (
              <BeliefCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FEFCFA' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'start',
            }}
            className="about-grid"
          >
            <div>
              <h2
                className="font-serif"
                style={{ fontSize: '1.75rem', fontWeight: 600, color: '#3D2A3F', marginBottom: '1.25rem' }}
              >
                Who This Space Is For
              </h2>
              {[
                'The girl who feels like everyone else has a plan.',
                'The one who is growing through something hard and doing it quietly.',
                'The young woman who is finally learning to trust herself.',
                'The one who has outgrown who she was and is still figuring out who she is becoming.',
                'Anyone who needs to be reminded that they are not behind.',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ color: '#E8A4B0', marginTop: '0.25rem', flexShrink: 0 }}>✦</span>
                  <p style={{ fontSize: '0.925rem', color: '#5C4A5E', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2
                className="font-serif"
                style={{ fontSize: '1.75rem', fontWeight: 600, color: '#3D2A3F', marginBottom: '1.25rem' }}
              >
                What You'll Find Here
              </h2>
              {[
                { emoji: '📖', label: 'Diary entries', desc: 'Personal, letter-style reflections on growth, confidence, and life.' },
                { emoji: '✍️', label: 'Journal prompts', desc: 'Questions to help you slow down, reflect, and understand yourself better.' },
                { emoji: '🌱', label: 'Growth guides', desc: 'Gentle, practical guidance for real-life moments and seasons.' },
                { emoji: '💌', label: 'Letters to you', desc: 'The words you might have needed to hear, written just for you.' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                    padding: '1rem',
                    backgroundColor: '#FDF0F3',
                    borderRadius: '1rem',
                    border: '1.5px solid #F0BEC9',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <p style={{ fontWeight: 600, color: '#3D2A3F', margin: '0 0 0.25rem', fontSize: '0.9rem' }}>{item.label}</p>
                    <p style={{ fontSize: '0.85rem', color: '#7A6A7C', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', backgroundColor: '#FBF8F5' }}>
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 600,
            color: '#3D2A3F',
            marginBottom: '0.75rem',
            fontStyle: 'italic',
          }}
        >
          Ready to start reading?
        </h2>
        <p style={{ fontSize: '0.975rem', color: '#7A6A7C', marginBottom: '2rem' }}>
          The diary is open. Come as you are.
        </p>
        <button
          onClick={() => navigate('diary')}
          style={{
            backgroundColor: '#E8A4B0',
            color: '#FEFCFA',
            border: 'none',
            borderRadius: '9999px',
            padding: '0.875rem 2.25rem',
            fontSize: '0.95rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s, transform 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#C05C74'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#E8A4B0'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Open the Diary
        </button>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </main>
  )
}

function BeliefCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div
      style={{
        backgroundColor: '#FEFCFA',
        border: '1.5px solid #EDE0E8',
        borderRadius: '1.25rem',
        padding: '2rem',
      }}
    >
      <div style={{ fontSize: '1.75rem', marginBottom: '0.875rem' }}>{icon}</div>
      <h3
        className="font-serif"
        style={{ fontSize: '1.05rem', fontWeight: 600, color: '#3D2A3F', marginBottom: '0.5rem' }}
      >
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#5C4A5E', lineHeight: 1.7, margin: 0 }}>{body}</p>
    </div>
  )
}
