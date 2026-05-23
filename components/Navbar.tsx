'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Handle scroll effect dan active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = ['home', 'about', 'projects', 'contact']
      let currentSection = 'home'
      
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const offsetTop = el.offsetTop - 100
          const offsetBottom = offsetTop + el.offsetHeight
          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
            currentSection = id
            break
          }
        }
      }
      setActive(currentSection)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once to set initial active
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(0,240,255,0.15)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '70px',
          height: 'auto',
          padding: '12px 20px',
          gap: '16px',
        }}>
          {/* Logo Kiri - responsive text */}
          <button
            onClick={() => handleNavClick('#home')}
            style={{
              fontSize: 'clamp(0.85rem, 4vw, 1.1rem)',
              fontWeight: 700,
              color: '#fff',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 0',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <span className="logo-full">Satrio Dwi Ramadhan</span>
            <span className="logo-short" style={{ display: 'none' }}>Satrio</span>
          </button>

          {/* Desktop Menu - Tengah (hidden di mobile) */}
          <div className="desktop-menu" style={{ 
            display: 'flex', 
            gap: 'clamp(4px, 1vw, 8px)', 
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    padding: '8px clamp(12px, 2vw, 16px)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#00f0ff' : '#aaa',
                    background: isActive ? 'rgba(0,240,255,0.1)' : 'transparent',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#aaa'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          {/* Kanan: Hire Me + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 12px)', flexShrink: 0 }}>
            <button
              onClick={() => handleNavClick('#contact')}
              className="hire-me-btn"
              style={{
                padding: '8px clamp(16px, 3vw, 20px)',
                fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)',
                fontWeight: 600,
                color: '#000',
                background: 'linear-gradient(135deg, #00f0ff, #0088aa)',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,240,255,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Hire Me
            </button>

            {/* Tombol Hamburger (hanya muncul di mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="hamburger-btn"
              style={{
                display: 'none',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                width: '40px',
                height: '40px',
                background: menuOpen ? 'rgba(0,240,255,0.1)' : 'transparent',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
              }}
            >
              <span style={{
                width: '20px',
                height: '2px',
                background: menuOpen ? '#00f0ff' : '#fff',
                borderRadius: '2px',
                transition: 'all 0.2s ease',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }} />
              <span style={{
                width: '20px',
                height: '2px',
                background: menuOpen ? '#00f0ff' : '#fff',
                borderRadius: '2px',
                transition: 'all 0.2s ease',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                width: '20px',
                height: '2px',
                background: menuOpen ? '#00f0ff' : '#fff',
                borderRadius: '2px',
                transition: 'all 0.2s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              zIndex: 998,
              background: 'rgba(10,10,10,0.98)',
              borderBottom: '1px solid rgba(0,240,255,0.1)',
              backdropFilter: 'blur(20px)',
              padding: '20px',
              maxHeight: 'calc(100vh - 70px)',
              overflowY: 'auto',
            }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = active === id
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 20px',
                      fontSize: '1rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#00f0ff' : '#fff',
                      background: isActive ? 'rgba(0,240,255,0.1)' : 'transparent',
                      borderRadius: '12px',
                      border: `1px solid ${isActive ? 'rgba(0,240,255,0.3)' : 'rgba(255,255,255,0.05)'}`,
                      cursor: 'pointer',
                      marginBottom: '8px',
                      transition: 'all 0.2s',
                    }}
                  >
                    {link.label}
                  </button>
                )
              })}
              <button
                onClick={() => handleNavClick('#contact')}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '14px 20px',
                  marginTop: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#000',
                  background: 'linear-gradient(135deg, #00f0ff, #0088aa)',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Hire Me ✨
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS untuk responsive dengan breakpoint yang tepat */}
      <style jsx>{`
        /* Tablet ke bawah (max 900px) - mulai responsif */
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
        
        /* HP kecil (max 480px) - logo dipendekkan */
        @media (max-width: 480px) {
          .logo-full {
            display: none !important;
          }
          .logo-short {
            display: inline !important;
          }
        }
        
        /* Desktop besar (min 901px) - hamburger tetap hidden */
        @media (min-width: 901px) {
          .hamburger-btn {
            display: none !important;
          }
          .desktop-menu {
            display: flex !important;
          }
        }
        
        /* Smooth transition untuk semua elemen */
        button {
          transition: all 0.2s ease;
        }
      `}</style>
    </>
  )
}