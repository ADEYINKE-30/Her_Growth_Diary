import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { diaryEntries, growthStepAccents, growthStepColors, growthSteps, journalPrompts, topics } from '../services/content'
import Card from '../components/common/Card'
import SectionContainer from '../components/common/SectionContainer'

export default function Home() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [activePrompt, setActivePrompt] = useState(0)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <main>
      {/* ── HERO ── */}
      <section
        style={{
          background: 'linear-gradient(160deg, #FBF8F5 0%, #FDF0F3 40%, #F4F1F8 100%)',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232, 164, 176, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-60px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196, 181, 212, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <SectionContainer style={{ width: '100%' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* Text */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#FDF0F3',
                  border: '1.5px solid #F0BEC9',
                  borderRadius: '9999px',
                  padding: '0.35rem 1rem',
                  marginBottom: '2rem',
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>🌸</span>
                <span style={{ fontSize: '0.75rem', color: '#C05C74', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  A space for becoming
                </span>
              </div>

              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                  fontWeight: 700,
                  color: '#3D2A3F',
                  lineHeight: 1.15,
                  margin: '0 0 1.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                For the girl who is still{' '}
                <span style={{ color: '#E8A4B0', fontStyle: 'italic' }}>becoming.</span>
              </h1>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#5C4A5E',
                  lineHeight: 1.75,
                  margin: '0 0 2.5rem',
                  maxWidth: '480px',
                }}
              >
                A gentle space for growth, self-discovery, confidence, and all the little
                moments that shape who you are becoming.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigate('/diary')}
                  style={{
                    backgroundColor: '#E8A4B0',
                    color: '#FEFCFA',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.85rem 2rem',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s, transform 0.15s',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.backgroundColor = '#C05C74'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.backgroundColor = '#E8A4B0'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  Read the Diary
                </button>
                <button
                  onClick={() => {
                    document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#5C4A5E',
                    border: '1.5px solid #EDE0E8',
                    borderRadius: '9999px',
                    padding: '0.85rem 2rem',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#E8A4B0'
                    e.currentTarget.style.color = '#E8A4B0'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#EDE0E8'
                    e.currentTarget.style.color = '#5C4A5E'
                  }}
                >
                  Explore Topics
                </button>
              </div>
            </div>

            {/* Hero image */}
            <div
              style={{ position: 'relative' }}
              className="hero-image-container"
            >
              <div
                style={{
                  borderRadius: '2rem 2rem 8rem 2rem',
                  overflow: 'hidden',
                  height: '520px',
                  backgroundColor: '#F8DDE4',
                  boxShadow: '0 24px 64px rgba(61, 42, 63, 0.12)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?w=800&h=900&fit=crop&auto=format"
                  alt="Woman writing in a journal by the window"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Floating card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  left: '-2rem',
                  backgroundColor: '#FEFCFA',
                  border: '1.5px solid #EDE0E8',
                  borderRadius: '1rem',
                  padding: '1rem 1.25rem',
                  boxShadow: '0 8px 24px rgba(61, 42, 63, 0.08)',
                  maxWidth: '220px',
                }}
              >
                <p
                  className="font-serif"
                  style={{ fontSize: '0.85rem', color: '#3D2A3F', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}
                >
                  "You are allowed to grow at your own pace."
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ── LITTLE REMINDER ── */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FBF8F5' }}>
        <SectionContainer style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>🌿</div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 600,
              color: '#3D2A3F',
              marginBottom: '2rem',
              letterSpacing: '-0.01em',
            }}
          >
            A little reminder for you…
          </h2>
          <div
            style={{
              maxWidth: '640px',
              margin: '0 auto',
              backgroundColor: '#FEFCFA',
              border: '1.5px solid #EDE0E8',
              borderRadius: '1.5rem',
              padding: '2.5rem 3rem',
              position: 'relative',
            }}
            className="paper-texture"
          >
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1.5rem',
                fontSize: '0.7rem',
                color: '#D4B5C8',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Dear girl,
            </div>
            <p
              className="font-serif"
              style={{
                fontSize: '1.15rem',
                color: '#5C4A5E',
                lineHeight: 1.85,
                margin: '1rem 0 0',
                fontStyle: 'italic',
              }}
            >
              You don't have to have everything figured out.{' '}
              <span style={{ color: '#E8A4B0' }}>You are allowed to take your time.</span>{' '}
              You are allowed to start again.{' '}
              <span style={{ color: '#C4B5D4' }}>You are allowed to become someone new.</span>
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* ── FROM HER DIARY ── */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FDF0F3' }}>
        <SectionContainer>
          <div style={{ marginBottom: '3rem' }}>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 600,
                color: '#3D2A3F',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}
            >
              From Her Diary
            </h2>
            <p style={{ fontSize: '1rem', color: '#7A6A7C', margin: 0 }}>
              Words for the seasons you're walking through.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {diaryEntries.map((entry) => (
              <Card key={entry.id} entry={entry} variant="home" />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => navigate('/diary')}
              style={{
                backgroundColor: 'transparent',
                color: '#3D2A3F',
                border: '1.5px solid #EDE0E8',
                borderRadius: '9999px',
                padding: '0.85rem 2.25rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E8A4B0'
                e.currentTarget.style.color = '#E8A4B0'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#EDE0E8'
                e.currentTarget.style.color = '#3D2A3F'
              }}
            >
              Read all entries →
            </button>
          </div>
        </SectionContainer>
      </section>

      {/* ── TOPICS ── */}
      <section id="topics" style={{ padding: '5rem 0', backgroundColor: '#FBF8F5' }}>
        <SectionContainer>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 600,
                color: '#3D2A3F',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}
            >
              Find what your heart needs today.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {topics.map((topic) => (
              <TopicCard key={topic.name} topic={topic} />
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── DEAR GIRL ── */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(135deg, #3D2A3F 0%, #5C4A5E 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(232, 164, 176, 0.12) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(196, 181, 212, 0.10) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
        <SectionContainer style={{ position: 'relative' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '0.75rem',
                color: '#E8A4B0',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              A letter for you
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#FEFCFA',
                marginBottom: '0.5rem',
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
              }}
            >
              Dear girl,
            </h2>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '1.25rem',
                padding: '2.5rem',
                border: '1px solid rgba(237, 224, 232, 0.15)',
                marginBottom: '2rem',
              }}
              className="paper-texture"
            >
              <p
                className="font-serif"
                style={{
                  fontSize: '1.1rem',
                  color: '#EDE0E8',
                  lineHeight: 1.9,
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                You are not late.
                <br />
                <br />
                Your life is not a race, and someone else's timeline was never meant to become
                your measuring stick.
                <br />
                <br />
                Keep going.
                <br />
                <br />
                There is still so much of you waiting to be discovered.
              </p>
            </div>

            <button
              onClick={() => navigate('/diary')}
              style={{
                backgroundColor: 'transparent',
                color: '#EDE0E8',
                border: '1.5px solid rgba(237, 224, 232, 0.4)',
                borderRadius: '9999px',
                padding: '0.75rem 1.75rem',
                fontSize: '0.875rem',
                fontWeight: 400,
                cursor: 'pointer',
                fontStyle: 'italic',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E8A4B0'
                e.currentTarget.style.color = '#E8A4B0'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(237, 224, 232, 0.4)'
                e.currentTarget.style.color = '#EDE0E8'
              }}
            >
              Read more letters →
            </button>
          </div>
        </SectionContainer>
      </section>

      {/* ── GROWTH JOURNEY ── */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FEFCFA' }}>
        <SectionContainer>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 600,
                color: '#3D2A3F',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}
            >
              Growth doesn't happen overnight.
            </h2>
            <p style={{ fontSize: '0.975rem', color: '#7A6A7C', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              It isn't always linear. There are setbacks, pauses, and quiet seasons — and all of
              them are part of becoming.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '0',
              overflowX: 'auto',
              padding: '1rem 0 2rem',
            }}
          >
            {growthSteps.map((step, i) => (
              <GrowthStep key={step.label} step={step} index={i} total={growthSteps.length} />
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── JOURNAL PROMPTS ── */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F4F1F8' }}>
        <SectionContainer>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="prompts-grid">
            <div>
              <p
                style={{
                  fontSize: '0.75rem',
                  color: '#A891C0',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                Reflect & Write
              </p>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 600,
                  color: '#3D2A3F',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Take a moment to reflect.
              </h2>
              <p style={{ fontSize: '0.975rem', color: '#5C4A5E', lineHeight: 1.75, marginBottom: '2rem' }}>
                Journaling is one of the most powerful ways to understand yourself. These prompts
                are here to help you slow down and listen inward.
              </p>
              <button
                style={{
                  backgroundColor: '#C4B5D4',
                  color: '#FEFCFA',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.85rem 2rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s, transform 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#A891C0'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C4B5D4'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Explore Journal Prompts
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {journalPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => setActivePrompt(i)}
                  style={{
                    backgroundColor: activePrompt === i ? '#FEFCFA' : 'rgba(254, 252, 250, 0.5)',
                    border: `1.5px solid ${activePrompt === i ? '#C4B5D4' : '#EDE0E8'}`,
                    borderRadius: '1rem',
                    padding: '1.1rem 1.25rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    boxShadow: activePrompt === i ? '0 4px 16px rgba(196, 181, 212, 0.2)' : 'none',
                    transform: activePrompt === i ? 'translateX(6px)' : 'translateX(0)',
                  }}
                >
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>✦</span>
                  <span
                    className={activePrompt === i ? 'font-serif' : ''}
                    style={{
                      fontSize: '0.9rem',
                      color: activePrompt === i ? '#3D2A3F' : '#5C4A5E',
                      lineHeight: 1.5,
                      fontWeight: activePrompt === i ? 500 : 400,
                      fontStyle: activePrompt === i ? 'italic' : 'normal',
                    }}
                  >
                    {prompt}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ── HERO IMAGE ROW ── */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FBF8F5' }}>
        <SectionContainer>
          <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {[
              {
                url: 'https://images.unsplash.com/photo-1562048048-86d659689440?w=400&h=500&fit=crop&auto=format',
                alt: 'Delicate rose blossom',
                aspect: '3/4',
              },
              {
                url: 'https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?w=600&h=400&fit=crop&auto=format',
                alt: 'Woman writing in a notebook',
                aspect: '4/3',
              },
              {
                url: 'https://images.unsplash.com/photo-1596313922575-ec573dfef885?w=400&h=500&fit=crop&auto=format',
                alt: 'Pink flowers in soft light',
                aspect: '3/4',
              },
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: i === 1 ? '45%' : '28%',
                  minWidth: '220px',
                  height: '360px',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  backgroundColor: '#F8DDE4',
                }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FDF0F3' }}>
        <SectionContainer style={{ textAlign: 'center' }}>
          <div
            style={{
              maxWidth: '540px',
              margin: '0 auto',
              backgroundColor: '#FEFCFA',
              borderRadius: '2rem',
              padding: '3rem',
              border: '1.5px solid #EDE0E8',
              boxShadow: '0 8px 32px rgba(61, 42, 63, 0.06)',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💌</div>
            <h2
              className="font-serif"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                color: '#3D2A3F',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}
            >
              A little note for your inbox.
            </h2>
            <p style={{ fontSize: '0.925rem', color: '#7A6A7C', lineHeight: 1.7, marginBottom: '2rem' }}>
              Occasional reminders, reflections, journal prompts, and gentle encouragement for
              your growth journey.
            </p>

            {subscribed ? (
              <div
                style={{
                  backgroundColor: '#F4F1F8',
                  borderRadius: '1rem',
                  padding: '1.25rem',
                  border: '1.5px solid #C4B5D4',
                }}
              >
                <p className="font-serif" style={{ color: '#5C4A5E', fontStyle: 'italic', margin: 0, fontSize: '1rem' }}>
                  Welcome to the diary. 🌸 We're glad you're here.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ textAlign: 'center' }}
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#E8A4B0',
                    color: '#FEFCFA',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.875rem',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s, transform 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C05C74'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E8A4B0'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Join the Diary
                </button>
                <p style={{ fontSize: '0.75rem', color: '#9B8A9E', margin: 0 }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </SectionContainer>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-image-container { display: none !important; }
          .prompts-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </main>
  )
}

function TopicCard({ topic }: { topic: (typeof topics)[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: topic.color,
        border: `1.5px solid ${hovered ? topic.accent : 'transparent'}`,
        borderRadius: '1.25rem',
        padding: '1.75rem 1.5rem',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 12px 32px ${topic.accent}22` : '0 2px 8px rgba(61, 42, 63, 0.04)',
      }}
    >
      <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{topic.emoji}</div>
      <h3
        className="font-serif"
        style={{ fontSize: '1.05rem', fontWeight: 600, color: '#3D2A3F', margin: '0 0 0.5rem' }}
      >
        {topic.name}
      </h3>
      <p style={{ fontSize: '0.85rem', color: '#5C4A5E', lineHeight: 1.6, margin: 0 }}>
        {topic.description}
      </p>
    </div>
  )
}

function GrowthStep({
  step,
  index,
  total,
}: {
  step: { label: string; desc: string }
  index: number
  total: number
}) {
  const colors = growthStepColors
  const accents = growthStepAccents

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flex: '1 0 auto',
        minWidth: '130px',
      }}
    >
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: colors[index],
            border: `2px solid ${accents[index]}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#3D2A3F',
          }}
        >
          {index + 1}
        </div>
        <p
          className="font-serif"
          style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3D2A3F', margin: '0 0 0.25rem', fontStyle: 'italic' }}
        >
          {step.label}
        </p>
        <p style={{ fontSize: '0.75rem', color: '#9B8A9E', margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
      </div>
      {index < total - 1 && (
        <div
          style={{
            height: '2px',
            width: '40px',
            flexShrink: 0,
            background: 'linear-gradient(90deg, #E8A4B0, #C4B5D4)',
            borderRadius: '2px',
            margin: '0 0.5rem',
            marginTop: '-1.5rem',
          }}
        />
      )}
    </div>
  )
}
