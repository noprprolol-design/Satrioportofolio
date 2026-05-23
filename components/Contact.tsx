'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const contacts = [
  {
    name: 'WhatsApp',
    icon: '💬',
    username: '@satrio',
    url: 'https://wa.me/6287826907056',
    color: '#25D366',
    bg: 'rgba(37, 211, 102, 0.08)',
    border: 'rgba(37, 211, 102, 0.2)',
    hoverBorder: 'rgba(37, 211, 102, 0.5)',
  },
  {
    name: 'Email',
    icon: '📧',
    username: 'Satriopow',
    url: 'mailto:Satriopow@gmail.com',
    color: '#00f0ff',
    bg: 'rgba(0, 240, 255, 0.08)',
    border: 'rgba(0, 240, 255, 0.2)',
    hoverBorder: 'rgba(0, 240, 255, 0.5)',
  },
  {
    name: 'GitHub',
    icon: '🐙',
    username: 'noprprolol-design',
    url: 'https://github.com/noprprolol-design',
    color: '#e8e8e8',
    bg: 'rgba(232, 232, 232, 0.06)',
    border: 'rgba(232, 232, 232, 0.15)',
    hoverBorder: 'rgba(232, 232, 232, 0.4)',
  },
  {
    name: 'Instagram',
    icon: '📷',
    username: '@satriormdan',
    url: 'https://instagram.com/satriormdan',
    color: '#E1306C',
    bg: 'rgba(225, 48, 108, 0.08)',
    border: 'rgba(225, 48, 108, 0.2)',
    hoverBorder: 'rgba(225, 48, 108, 0.5)',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } 
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
  },
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [columns, setColumns] = useState(4)

  // Responsive grid columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      if (width < 540) {
        setColumns(1)
      } else if (width < 768) {
        setColumns(2)
      } else if (width < 1024) {
        setColumns(2)
      } else {
        setColumns(4)
      }
    }
    
    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  // Helper untuk mendapatkan jumlah kolom yang benar di setiap device
  const getGridTemplateColumns = () => {
    if (columns === 1) return '1fr'
    if (columns === 2) return 'repeat(2, 1fr)'
    return 'repeat(4, 1fr)'
  }

  // Helper untuk max width container di mobile
  const getMaxWidth = () => {
    if (columns === 1) return '320px'
    return 'none'
  }

  return (
    <section 
      id="contact" 
      ref={ref} 
      style={{
        padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a'
      }}
    >
      {/* Background decorative */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: 'clamp(200px, 50vw, 400px)',
          height: 'clamp(200px, 50vw, 400px)',
          background: 'radial-gradient(circle, #00f0ff, transparent)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        position: 'relative', 
        zIndex: 1, 
        padding: columns === 1 ? '0' : '0 8px'
      }}>
        
        {/* HEADER */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 60px)' }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '60px' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              height: '3px',
              background: '#00f0ff',
              margin: '0 auto 20px',
              borderRadius: '2px'
            }}
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              marginBottom: '16px',
              color: '#fff'
            }}
          >
            Let's <span style={{ color: '#00f0ff' }}>Connect</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ 
              color: '#999', 
              maxWidth: '550px',
              margin: '0 auto',
              fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
              lineHeight: 1.6,
              padding: '0 16px'
            }}
          >
            Tertarik untuk berkolaborasi atau punya project menarik? 
            Hubungi saya melalui platform di bawah ini.
          </motion.p>
        </motion.div>

        {/* CONTACT GRID - Responsive based on columns state */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: getGridTemplateColumns(),
            gap: columns === 1 ? '16px' : '20px',
            maxWidth: getMaxWidth(),
            margin: columns === 1 ? '0 auto' : '0',
          }}
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 'clamp(12px, 3vw, 16px)',
                padding: columns === 1 
                  ? 'clamp(20px, 5vw, 28px) clamp(16px, 4vw, 20px)'
                  : 'clamp(24px, 5vw, 32px) clamp(12px, 3vw, 16px)',
                background: contact.bg,
                border: `1px solid ${contact.border}`,
                borderRadius: '20px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = contact.hoverBorder
                e.currentTarget.style.boxShadow = `0 8px 30px ${contact.bg}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = contact.border
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div style={{
                width: columns === 1 
                  ? 'clamp(65px, 15vw, 80px)'
                  : 'clamp(55px, 12vw, 70px)',
                height: columns === 1 
                  ? 'clamp(65px, 15vw, 80px)'
                  : 'clamp(55px, 12vw, 70px)',
                borderRadius: '50%',
                background: contact.bg,
                border: `2px solid ${contact.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: columns === 1 
                  ? 'clamp(30px, 7vw, 38px)'
                  : 'clamp(26px, 6vw, 32px)',
              }}>
                {contact.icon}
              </div>

              {/* Nama Platform */}
              <h3 style={{
                fontSize: columns === 1 
                  ? 'clamp(1.1rem, 4vw, 1.25rem)'
                  : 'clamp(0.95rem, 3.5vw, 1.1rem)',
                fontWeight: 700,
                color: contact.color,
                margin: 0,
              }}>
                {contact.name}
              </h3>

              {/* Username */}
              <p style={{
                fontSize: columns === 1 
                  ? 'clamp(0.8rem, 3vw, 0.9rem)'
                  : 'clamp(0.7rem, 2.5vw, 0.8rem)',
                color: '#aaa',
                margin: 0,
                wordBreak: 'break-word',
                maxWidth: '100%',
                padding: '0 4px'
              }}>
                {contact.username}
              </p>

              {/* Tombol Hubungi */}
              <div style={{
                marginTop: '8px',
                padding: columns === 1 
                  ? '8px clamp(20px, 5vw, 28px)'
                  : '6px clamp(12px, 4vw, 20px)',
                borderRadius: '100px',
                background: 'rgba(255,255,255,0.05)',
                fontSize: columns === 1 
                  ? 'clamp(0.8rem, 3vw, 0.85rem)'
                  : 'clamp(0.7rem, 2.5vw, 0.75rem)',
                color: '#ccc',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
              }}>
                Hubungi
                <span>→</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}