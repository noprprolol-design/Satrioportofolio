'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// ========== COUNT UP COMPONENT ==========
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

// ========== DATA ==========
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92, color: "#00B4D8" },
      { name: "Next.js", level: 88, color: "#00B4D8" },
      { name: "TypeScript", level: 86, color: "#00B4D8" },
      { name: "Tailwind CSS", level: 94, color: "#00B4D8" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 87, color: "#00B4D8" },
      { name: "Python", level: 83, color: "#00B4D8" },
      { name: "Express.js", level: 88, color: "#00B4D8" },
      { name: "GraphQL", level: 75, color: "#00B4D8" },
    ]
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", level: 82, color: "#00B4D8" },
      { name: "MongoDB", level: 85, color: "#00B4D8" },
      { name: "Docker", level: 76, color: "#00B4D8" },
      { name: "Git", level: 90, color: "#00B4D8" },
    ]
  }
]

const experiences = [
  {
    title: "Full-stack Engineer",
    company: "Freelance",
    period: "2024 - Present",
    achievements: [
      "6+ projects completed with 100% client satisfaction",
      "Improved website performance by 40% on average",
      "Implemented real-time features using WebSocket"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Tech Startup",
    period: "2025 - present",
    achievements: [
      "Built 5 interactive admin dashboards",
      "Reduced loading time by 35%",
      "Collaborated with design team on design system implementation"
    ]
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2025 - present",
    achievements: [
      "Developed 10+ responsive websites for clients",
      "Integrated REST APIs and third-party services",
      "Maintained and optimized existing codebases"
    ]
  }
]

const softSkills = [
  "Team Collaboration", "Problem Solving", "Communication",
  "Time Management", "Adaptability", "Critical Thinking", "Leadership"
]

const personalInfo = [
  { label: "📍 Location", value: "Indonesia, Tangerang Selatan" },
  { label: "💼 Status", value: "Open to Work" },
  { label: "🎯 Focus", value: "Front End Development" },
  { label: "📈 Level", value: "Mid-Senior (3+ Years)" },
  { label: "🌐 Languages", value: "Indonesian, English" },
  { label: "⏰ Timezone", value: "WIB (UTC+7)" }
]

const stats = [
  { value: 3, suffix: '+', label: 'YEARS EXPERIENCE' },
  { value: 6, suffix: '+', label: 'PROJECTS COMPLETED' },
  { value: 15, suffix: '+', label: 'TECHNOLOGIES USED' },
  { value: 100, suffix: '%', label: 'SATISFACTION' }
]

export default function About() {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills'>('experience')
  const [countStart, setCountStart] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const c1 = useCountUp(stats[0].value, 1800, countStart)
  const c2 = useCountUp(stats[1].value, 2000, countStart)
  const c3 = useCountUp(stats[2].value, 2200, countStart)
  const c4 = useCountUp(stats[3].value, 2400, countStart)
  const counts = [c1, c2, c3, c4]

  useEffect(() => {
    if (inView) setCountStart(true)
  }, [inView])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isDesktop = !isMobile

  return (
    <section 
      id="about" 
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 120px) clamp(20px, 6vw, 32px)',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a'
      }}
    >
      {/* Background decorative */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,180,216,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,180,216,0.03) 1px, transparent 1px)
        `,
        backgroundSize: 'clamp(40px, 8vw, 60px) clamp(40px, 8vw, 60px)',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 60px)' }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '60px' } : { width: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              height: '3px',
              background: '#00B4D8',
              margin: '0 auto 20px',
              borderRadius: '2px'
            }}
          />
          
          <h2 style={{
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
            fontWeight: 800,
            marginBottom: '16px',
            color: '#fff'
          }}>
            About <span style={{ color: '#00B4D8' }}>Me</span>
          </h2>
          
          <p style={{ 
            color: '#999', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: 'clamp(0.85rem, 3vw, 1rem)',
            padding: '0 16px'
          }}>
            Full-stack Engineer with 3+ years of experience building high-quality digital solutions
          </p>
        </motion.div>

        {/* STATS COUNTER */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
          marginBottom: 'clamp(50px, 10vw, 80px)'
        }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(0,180,216,0.12)',
                borderRadius: '20px',
                padding: 'clamp(20px, 5vw, 28px)',
                textAlign: 'center',
              }}
            >
              <div style={{ 
                fontSize: 'clamp(2rem, 6vw, 2.8rem)', 
                fontWeight: 'bold', 
                color: '#00B4D8',
                marginBottom: '8px'
              }}>
                {counts[idx]}{stat.suffix}
              </div>
              <div style={{ 
                fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', 
                color: '#aaa',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div style={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          gap: 'clamp(30px, 6vw, 50px)'
        }}>
          
          {/* LEFT COLUMN - BIOGRAPHY */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 4vw, 24px)' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, rgba(0,180,216,0.08), transparent)',
                padding: 'clamp(20px, 4vw, 28px)',
                borderRadius: '20px',
                borderLeft: '4px solid #00B4D8'
              }}
            >
              <p style={{ color: '#e0e0e0', fontSize: 'clamp(16px, 4vw, 18px)' }}>
                Hi! I&apos;m <span style={{ color: '#00B4D8', fontWeight: 'bold' }}>Satrio Dwi Ramadhan</span>
              </p>
              <p style={{ color: '#aaa', marginTop: '12px', fontSize: 'clamp(13px, 3vw, 14px)' }}>
                A Full-Stack Engineer with 3+ years of professional experience building 
                enterprise-grade and startup web applications.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(13px, 3vw, 14px)' }}>
              My journey began with curiosity about how websites work. Now, I&apos;ve completed 
              over 6 projects ranging from real-time analytics dashboards to AI-powered platforms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(13px, 3vw, 14px)' }}>
              My expertise covers modern frontend with React and Next.js, scalable backend 
              with Node.js and Python, and cloud infrastructure with Docker.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(13px, 3vw, 14px)' }}>
              Beyond coding, I&apos;m active in the Indonesian developer community, contribute 
              to open source, and share knowledge with fellow developers.
            </motion.p>

            {/* Personal Info WITH EMOJIS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 'clamp(10px, 2.5vw, 12px)',
                marginTop: '8px'
              }}
            >
              {personalInfo.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(0,180,216,0.12)',
                    borderRadius: '12px',
                    padding: 'clamp(10px, 2.5vw, 12px)',
                  }}
                >
                  <p style={{ fontSize: 'clamp(9px, 2vw, 10px)', color: '#666', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#fff', fontWeight: 500 }}>{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - TABS */}
          <div style={{ flex: 1 }}>
            <div style={{ 
              display: 'flex', 
              borderBottom: '1px solid rgba(255,255,255,0.1)', 
              marginBottom: '28px',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => setActiveTab('experience')}
                style={{
                  padding: 'clamp(10px, 3vw, 12px) clamp(20px, 5vw, 28px)',
                  fontSize: 'clamp(13px, 3.5vw, 15px)',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'experience' ? '#00B4D8' : '#888',
                  borderBottom: activeTab === 'experience' ? '2px solid #00B4D8' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                💼 Experience
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                style={{
                  padding: 'clamp(10px, 3vw, 12px) clamp(20px, 5vw, 28px)',
                  fontSize: 'clamp(13px, 3.5vw, 15px)',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'skills' ? '#00B4D8' : '#888',
                  borderBottom: activeTab === 'skills' ? '2px solid #00B4D8' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                📚 Tech Stack
              </button>
            </div>

            {/* EXPERIENCE TAB */}
            {activeTab === 'experience' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3.5vw, 20px)' }}>
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(0,180,216,0.12)',
                      borderRadius: '20px',
                      padding: 'clamp(20px, 4vw, 24px)',
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      flexWrap: 'wrap', 
                      gap: '12px',
                      marginBottom: '16px' 
                    }}>
                      <div>
                        <h3 style={{ fontSize: 'clamp(16px, 4vw, 18px)', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                          {exp.title}
                        </h3>
                        <p style={{ fontSize: 'clamp(13px, 3vw, 14px)', color: '#00B4D8' }}>{exp.company}</p>
                      </div>
                      <span style={{ 
                        fontSize: 'clamp(11px, 2.5vw, 12px)', 
                        color: '#666', 
                        padding: '4px 12px', 
                        background: 'rgba(255,255,255,0.05)', 
                        borderRadius: '100px'
                      }}>
                        {exp.period}
                      </span>
                    </div>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} style={{ color: '#aaa', fontSize: 'clamp(12px, 3vw, 13px)', marginBottom: '8px', lineHeight: 1.6 }}>
                          <span style={{ color: '#00B4D8', marginRight: '8px' }}>▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {/* SKILLS TAB */}
            {activeTab === 'skills' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 4vw, 24px)' }}>
                {skillCategories.map((category, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(0,180,216,0.12)',
                      borderRadius: '20px',
                      padding: 'clamp(20px, 4vw, 24px)',
                    }}
                  >
                    <h3 style={{ fontSize: 'clamp(16px, 4vw, 18px)', fontWeight: 600, color: '#fff', marginBottom: '20px' }}>
                      {category.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <span style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#ccc' }}>{skill.name}</span>
                            <span style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#00B4D8' }}>{skill.level}%</span>
                          </div>
                          <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 0.8, delay: 0.6 + (idx * 0.1) }}
                              style={{
                                height: '100%',
                                background: `linear-gradient(90deg, ${skill.color}, #00f0ff)`,
                                borderRadius: '3px'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Soft Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(0,180,216,0.12)',
                    borderRadius: '20px',
                    padding: 'clamp(20px, 4vw, 24px)'
                  }}
                >
                  <h3 style={{ fontSize: 'clamp(16px, 4vw, 18px)', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
                    🤝 Soft Skills
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: '8px 18px',
                          background: 'rgba(0,180,216,0.08)',
                          border: '1px solid rgba(0,180,216,0.2)',
                          borderRadius: '100px',
                          fontSize: 'clamp(11px, 2.5vw, 12px)',
                          color: '#00B4D8',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* DOWNLOAD CV BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 'clamp(50px, 10vw, 80px)' }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(0,180,216,0.4)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: 'clamp(14px, 3.5vw, 16px) clamp(32px, 8vw, 48px)',
              background: 'linear-gradient(135deg, #00B4D8, #0077B6)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              cursor: 'pointer',
            }}
          >
            📄 Download CV
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}