'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid rgba(0,240,255,0.1)',
      padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1rem, 5vw, 24px)',
      background: '#0a0a0a',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'clamp(1rem, 4vw, 1.5rem)',
        flexWrap: 'wrap',
      }}>
        {/* Left: Logo + copyright */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'clamp(0.3rem, 2vw, 0.4rem)',
        }}>
          <span style={{
            fontSize: 'clamp(0.85rem, 4vw, 1rem)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.02em',
          }}>
            Satrio <span style={{ color: '#00f0ff' }}>Dwi Ramadhan</span>
          </span>
          <p style={{
            fontSize: 'clamp(0.65rem, 2.5vw, 0.75rem)',
            color: '#666',
            fontFamily: 'monospace',
          }}>
            © {new Date().getFullYear()} Satrio Dwi Ramadhan. All rights reserved.
          </p>
        </div>

        {/* Right: Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(0,240,255,0.2)',
            borderRadius: '100px',
            color: '#aaa',
            fontSize: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#00f0ff'
            e.currentTarget.style.borderColor = '#00f0ff'
            e.currentTarget.style.background = 'rgba(0,240,255,0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#aaa'
            e.currentTarget.style.borderColor = 'rgba(0,240,255,0.2)'
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
          Back to top
        </motion.button>
      </div>
    </footer>
  )
}