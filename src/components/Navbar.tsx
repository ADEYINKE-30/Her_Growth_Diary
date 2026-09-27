import { useState } from 'react'
import type { NavProps } from '../types'

export default function Navbar({ navigate, currentPage }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links: { label: string; page: Parameters<NavProps['navigate']>[0] }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Diary', page: 'diary' },
    { label: 'Topics', page: 'home' },
    { label: 'Resources', page: 'resources' },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(251, 248, 245, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1.5px solid #EDE0E8',
      }}
    >
      <nav style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label="Her Growth Diary - Home"
          >
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <span
              className="font-serif"
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#3D2A3F',
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}
            >
              Her Growth Diary
            </span>
          </button>

          {/* Desktop nav */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
            className="hidden-mobile"
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.page)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: currentPage === link.page && link.page !== 'home' ? '600' : '400',
                  color: currentPage === link.page && link.page !== 'home' ? '#E8A4B0' : '#5C4A5E',
                  letterSpacing: '0.01em',
                  padding: '0.25rem 0',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#E8A4B0' }}
                onMouseLeave={(e) => {
                  const isActive = currentPage === link.page && link.page !== 'home'
                  ;(e.target as HTMLElement).style.color = isActive ? '#E8A4B0' : '#5C4A5E'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="hidden-mobile">
            <button
              aria-label="Search"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#5C4A5E',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#E8A4B0' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#5C4A5E' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              onClick={() => navigate('diary')}
              style={{
                backgroundColor: '#E8A4B0',
                color: '#FEFCFA',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.55rem 1.4rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                letterSpacing: '0.01em',
                transition: 'background-color 0.2s ease, transform 0.15s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.backgroundColor = '#C05C74'
                ;(e.target as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.backgroundColor = '#E8A4B0'
                ;(e.target as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Start Reading
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#3D2A3F',
              padding: '0.5rem',
              display: 'none',
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: '1.5px solid #EDE0E8',
              padding: '1.5rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => { navigate(link.page); setMenuOpen(false) }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#3D2A3F',
                  padding: '0.75rem 0',
                  textAlign: 'left',
                  borderBottom: '1px solid #F5EFE8',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { navigate('diary'); setMenuOpen(false) }}
              style={{
                backgroundColor: '#E8A4B0',
                color: '#FEFCFA',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                marginTop: '1rem',
                alignSelf: 'flex-start',
              }}
            >
              Start Reading
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
