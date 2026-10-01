import { Link } from 'react-router-dom'

export default function Footer() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Diary', path: '/diary' },
    { label: 'Resources', path: '/resources' },
  ]

  return (
    <footer style={{ backgroundColor: '#3D2A3F', color: '#EDE0E8' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div className="footer-brand" style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🌸</span>
              <span
                className="font-serif"
                style={{ fontSize: '1.25rem', fontWeight: 600, color: '#FEFCFA' }}
              >
                Her Growth Diary
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#B89DB5', lineHeight: 1.7, maxWidth: '280px' }}>
              A gentle reminder that becoming takes time.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {['Instagram', 'Pinterest', 'YouTube'].map((social) => (
                <button
                  key={social}
                  aria-label={social}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(237, 224, 232, 0.3)',
                    background: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D6CADB',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#E8A4B0'
                    ;(e.currentTarget as HTMLElement).style.color = '#E8A4B0'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(237, 224, 232, 0.3)'
                    ;(e.currentTarget as HTMLElement).style.color = '#D6CADB'
                  }}
                >
                  {social === 'Instagram' ? 'IG' : social === 'Pinterest' ? 'PT' : 'YT'}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-serif"
              style={{ color: '#FEFCFA', fontWeight: 500, marginBottom: '1.25rem', fontSize: '1rem' }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#B89DB5',
                      fontSize: '0.875rem',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#E8A4B0' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#B89DB5' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="font-serif"
              style={{ color: '#FEFCFA', fontWeight: 500, marginBottom: '1.25rem', fontSize: '1rem' }}
            >
              A note for your inbox
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#B89DB5', lineHeight: 1.6, marginBottom: '1rem' }}>
              Gentle reminders and journal prompts, when you need them.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(237, 224, 232, 0.2)',
                  borderRadius: '0.75rem',
                  padding: '0.6rem 0.875rem',
                  color: '#FEFCFA',
                  fontSize: '0.85rem',
                  flex: 1,
                  minWidth: '150px',
                }}
                aria-label="Email address"
              />
              <button
                style={{
                  backgroundColor: '#E8A4B0',
                  color: '#FEFCFA',
                  border: 'none',
                  borderRadius: '0.75rem',
                  padding: '0.6rem 1rem',
                  fontSize: '0.8rem',
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
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(237, 224, 232, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: '#7A6A7C', margin: 0 }}>
            © 2026 Her Growth Diary. All rights reserved.
          </p>
          <p
            className="font-serif"
            style={{ fontSize: '0.875rem', color: '#B89DB5', fontStyle: 'italic', margin: 0 }}
          >
            Keep growing. Keep becoming.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-brand { grid-column: span 1 !important; }
        }
      `}</style>
    </footer>
  )
}
