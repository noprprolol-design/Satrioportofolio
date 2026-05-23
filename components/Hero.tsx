'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    let frameId: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      }
    }
    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [target, duration, start])
  return count
}

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '+', label: 'Projects Completed' },
  { value: 15, suffix: '+', label: 'Technologies Used' },
]

const nameLetters = 'Satrio Dwi Ramadhan'.split('')

export default function Hero() {
  const [countStart, setCountStart] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const c1 = useCountUp(stats[0].value, 1800, countStart)
  const c2 = useCountUp(stats[1].value, 2000, countStart)
  const c3 = useCountUp(stats[2].value, 2200, countStart)
  const counts = [c1, c2, c3]

  useEffect(() => {
    if (isInView) setCountStart(true)
  }, [isInView])

  // Deteksi device untuk responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -30 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
  }

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, type: "spring", stiffness: 120, delay: 0.2 } }
  }

  const buttonHover = {
    hover: { scale: 1.08, boxShadow: '0 0 25px rgba(0,240,255,0.4)' },
    tap: { scale: 0.98 }
  }

  // Layout responsive: desktop = row, mobile = column
  const isDesktop = !isMobile

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(60px, 15vh, 80px)',
        paddingBottom: 'clamp(3rem, 8vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: 'clamp(40px, 8vw, 60px) clamp(40px, 8vw, 60px)',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Glow blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(500px, 80vw)',
          height: 'min(500px, 80vw)',
          background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 clamp(1rem, 5vw, 1.5rem)', 
        width: '100%' 
      }}>
        
        {/* FLEX ROW - Responsive via inline style */}
        <div style={{ 
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          alignItems: 'center',
          gap: 'clamp(1.5rem, 6vw, 4rem)',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: isDesktop ? 'left' : 'center',
        }}>
          
          {/* FOTO PROFILE */}
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            style={{ flexShrink: 0 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,240,255,0.5)' }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                width: 'clamp(150px, 35vw, 280px)',
                height: 'clamp(150px, 35vw, 280px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #00f0ff',
                boxShadow: '0 0 30px rgba(0,240,255,0.3)',
                background: 'linear-gradient(135deg, rgba(0,240,255,0.1), transparent)',
                margin: '0 auto',
              }}
            >
              {!imgError ? (
                <img
                  src="/Satrio.jpg"
                  alt="Satrio Dwi Ramadhan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <img
                  src="https://ui-avatars.com/api/?background=00f0ff&color=fff&name=Satrio+Dwi+Ramadhan&size=280&length=4&fontsize=0.33&bold=true"
                  alt="Satrio Dwi Ramadhan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </motion.div>
          </motion.div>

          {/* TEKS KONTEN */}
          <div style={{ 
            flex: isDesktop ? 1 : 'none',
            minWidth: '260px',
            textAlign: isDesktop ? 'left' : 'center',
            width: isDesktop ? 'auto' : '100%',
          }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ 
                display: 'flex', 
                justifyContent: isDesktop ? 'flex-start' : 'center',
                marginBottom: '1rem',
              }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 'clamp(0.3rem, 2vw, 0.4rem) clamp(0.75rem, 3vw, 1rem)',
                background: 'rgba(0,240,255,0.1)',
                border: '1px solid rgba(0,240,255,0.2)',
                borderRadius: '100px',
                fontSize: 'clamp(0.7rem, 2.5vw, 0.75rem)',
                color: '#00f0ff',
              }}>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 8px #00f0ff' }}
                />
                Available for Work
              </span>
            </motion.div>

            {/* Name split text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 'clamp(1.8rem, 7vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: isDesktop ? 'flex-start' : 'center',
              }}
            >
              {nameLetters.map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  style={{
                    display: 'inline-block',
                    color: char === ' ' ? 'transparent' : '#ffffff',
                    whiteSpace: char === ' ' ? 'pre' : 'normal',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                fontSize: 'clamp(0.85rem, 3vw, 1.1rem)',
                color: '#00f0ff',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                textAlign: 'inherit',
              }}
            >
              Full-Stack Engineer / Creative Technologist
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5 }}
              style={{
                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
                maxWidth: isDesktop ? '550px' : '100%',
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                marginLeft: isDesktop ? 0 : 'auto',
                marginRight: isDesktop ? 'auto' : 'auto',
                textAlign: 'inherit',
              }}
            >
              Crafting high-performance digital experiences with modern web technologies.
              Passionate about clean code, immersive UI, and turning complex ideas into
              elegant, scalable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{ 
                display: 'flex', 
                gap: 'clamp(0.75rem, 3vw, 1rem)', 
                flexWrap: 'wrap', 
                marginBottom: 'clamp(2rem, 5vw, 3rem)',
                justifyContent: isDesktop ? 'flex-start' : 'center',
              }}
            >
              <motion.a
                href="#projects"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                style={{
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.2rem, 4vw, 1.8rem)',
                  background: '#00f0ff',
                  color: '#000',
                  borderRadius: '100px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                  cursor: 'pointer',
                }}
              >
                View Projects →
              </motion.a>
              <motion.a
                href="#contact"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                style={{
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.2rem, 4vw, 1.8rem)',
                  border: '1px solid #00f0ff',
                  color: '#00f0ff',
                  borderRadius: '100px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              style={{ 
                display: 'flex', 
                gap: 'clamp(1rem, 6vw, 3rem)', 
                flexWrap: 'wrap',
                justifyContent: isDesktop ? 'flex-start' : 'center',
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.25rem', 
                    textAlign: 'center', 
                    cursor: 'default',
                    minWidth: 'clamp(80px, 20vw, 100px)',
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, delay: 1.5 + i * 0.15 }}
                    style={{ 
                      fontSize: 'clamp(1.3rem, 5vw, 2.2rem)', 
                      fontWeight: 900, 
                      color: '#00f0ff' 
                    }}
                  >
                    {counts[i]}{stat.suffix}
                  </motion.span>
                  <span style={{ 
                    fontSize: 'clamp(0.6rem, 2vw, 0.7rem)', 
                    color: 'rgba(255,255,255,0.5)', 
                    letterSpacing: '0.08em', 
                    textTransform: 'uppercase' 
                  }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}