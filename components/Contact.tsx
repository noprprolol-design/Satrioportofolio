'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const contacts = [
  {
    name: 'WhatsApp',
    icon: '💬',
    username: 'Satrio Ganteng',
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

const projectTypes = [
  { value: 'website', label: 'Website' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'landing', label: 'Landing Page' },
  { value: 'other', label: 'Other' },
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
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'website',
    projectDesc: '',
    deadline: '',
    message: ''
  })

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      if (width < 640) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const phoneNumber = '6287826907056'
    const projectLabel = projectTypes.find(p => p.value === formData.projectType)?.label
    const text = `Hello! I am ${formData.name}%0A%0AEmail: ${formData.email}%0A%0AProject Type: ${projectLabel}%0A%0AProject Description:%0A${formData.projectDesc}%0A%0ADeadline: ${formData.deadline || 'Not specified'}%0A%0AAdditional Message:%0A${formData.message}%0A%0A--%0ASent from Portfolio`
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank')
    
    setFormData({
      name: '',
      email: '',
      projectType: 'website',
      projectDesc: '',
      deadline: '',
      message: ''
    })
  }

  const getGridTemplateColumns = () => {
    if (columns === 1) return '1fr'
    if (columns === 2) return 'repeat(2, 1fr)'
    return 'repeat(4, 1fr)'
  }

  const getMaxWidth = () => {
    if (columns === 1) return '360px'
    return 'none'
  }

  return (
    <section 
      id="contact" 
      ref={ref} 
      style={{
        padding: 'clamp(80px, 12vw, 120px) clamp(20px, 6vw, 32px)',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.12, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: 'clamp(300px, 60vw, 600px)',
          height: 'clamp(300px, 60vw, 600px)',
          background: 'radial-gradient(circle, #00f0ff, transparent)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        position: 'relative', 
        zIndex: 1
      }}>
        
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: 'center', marginBottom: 'clamp(60px, 10vw, 80px)' }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '80px' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              height: '4px',
              background: '#00f0ff',
              margin: '0 auto 24px',
              borderRadius: '2px'
            }}
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 800,
              marginBottom: '20px',
              color: '#fff',
              letterSpacing: '-0.02em'
            }}
          >
            Let's <span style={{ color: '#00f0ff' }}>Connect</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ 
              color: '#aaa', 
              maxWidth: '650px',
              margin: '0 auto',
              fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
              lineHeight: 1.6,
              padding: '0 16px'
            }}
          >
            Interested in collaborating or have an interesting project? 
            Reach out to me through the platforms below or send a direct message.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: getGridTemplateColumns(),
            gap: columns === 1 ? '20px' : '28px',
            maxWidth: getMaxWidth(),
            margin: columns === 1 ? '0 auto' : '0',
            marginBottom: '60px',
          }}
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 'clamp(16px, 4vw, 20px)',
                padding: columns === 1 
                  ? 'clamp(32px, 8vw, 40px) clamp(20px, 5vw, 28px)'
                  : 'clamp(28px, 6vw, 36px) clamp(16px, 4vw, 20px)',
                background: contact.bg,
                border: `2px solid ${contact.border}`,
                borderRadius: '24px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = contact.hoverBorder
                e.currentTarget.style.boxShadow = `0 12px 40px ${contact.bg}`
                e.currentTarget.style.transform = 'translateY(-8px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = contact.border
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: columns === 1 
                  ? 'clamp(80px, 20vw, 100px)'
                  : 'clamp(70px, 15vw, 90px)',
                height: columns === 1 
                  ? 'clamp(80px, 20vw, 100px)'
                  : 'clamp(70px, 15vw, 90px)',
                borderRadius: '50%',
                background: contact.bg,
                border: `2px solid ${contact.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: columns === 1 
                  ? 'clamp(42px, 10vw, 52px)'
                  : 'clamp(36px, 8vw, 46px)',
              }}>
                {contact.icon}
              </div>

              <h3 style={{
                fontSize: columns === 1 
                  ? 'clamp(1.4rem, 5vw, 1.8rem)'
                  : 'clamp(1.2rem, 4vw, 1.5rem)',
                fontWeight: 700,
                color: contact.color,
                margin: 0,
              }}>
                {contact.name}
              </h3>

              <p style={{
                fontSize: columns === 1 
                  ? 'clamp(1rem, 3.5vw, 1.2rem)'
                  : 'clamp(0.9rem, 3vw, 1rem)',
                color: '#ccc',
                margin: 0,
                wordBreak: 'break-word',
                maxWidth: '100%',
                padding: '0 8px'
              }}>
                {contact.username}
              </p>

              <div style={{
                marginTop: '12px',
                padding: columns === 1 
                  ? '12px 32px'
                  : '10px 24px',
                borderRadius: '100px',
                background: 'rgba(255,255,255,0.08)',
                fontSize: columns === 1 
                  ? 'clamp(1rem, 3.5vw, 1.1rem)'
                  : 'clamp(0.9rem, 3vw, 1rem)',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                Contact
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* REQUEST PROJECT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            marginTop: '80px',
            paddingTop: '60px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
            }}>
            </div>
            <h3 style={{
              fontSize: 'clamp(2rem, 6vw, 2.5rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '12px'
            }}>
              Request <span style={{ color: '#00f0ff' }}>Project</span>
            </h3>
            <p style={{ color: '#aaa', fontSize: 'clamp(1rem, 3.5vw, 1.1rem)' }}>
              Fill out the form below, and I will respond via WhatsApp
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '24px'
            }}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '14px',
                    color: '#fff',
                    fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00f0ff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Active Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '14px',
                    color: '#fff',
                    fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00f0ff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  color: '#fff',
                  fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00f0ff'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                {projectTypes.map((type) => (
                  <option key={type.value} value={type.value} style={{ background: '#1a1a1a' }}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <textarea
                name="projectDesc"
                placeholder="Project description (features, goals, etc.) *"
                value={formData.projectDesc}
                onChange={handleChange}
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  color: '#fff',
                  fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00f0ff'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <input
                type="datetime-local"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  color: '#fff',
                  fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
                onFocus={(e) => e.target.style.borderColor = '#00f0ff'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <textarea
                name="message"
                placeholder="Additional message or questions (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  color: '#fff',
                  fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00f0ff'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '18px 24px',
                background: 'linear-gradient(135deg, #00f0ff, #0088aa)',
                border: 'none',
                borderRadius: '14px',
                color: '#000',
                fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,240,255,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span></span> Send Request via WhatsApp
              <span></span>
            </button>

            <p style={{
              textAlign: 'center',
              marginTop: '20px',
              color: '#666',
              fontSize: 'clamp(0.8rem, 2.5vw, 0.85rem)'
            }}>
              Form will redirect you to WhatsApp Web for confirmation
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}