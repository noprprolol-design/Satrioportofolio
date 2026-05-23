'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92, icon: "⚛️", color: "#61DAFB" },
      { name: "Next.js", level: 88, icon: "▲", color: "#00f0ff" },
      { name: "TypeScript", level: 86, icon: "📘", color: "#3178C6" },
      { name: "Tailwind CSS", level: 94, icon: "🌊", color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 87, icon: "🟢", color: "#68A063" },
      { name: "Python", level: 83, icon: "🐍", color: "#3776AB" },
      { name: "Express.js", level: 88, icon: "🚂", color: "#000000" },
      { name: "GraphQL", level: 75, icon: "📊", color: "#E10098" },
    ]
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", level: 82, icon: "🐘", color: "#336791" },
      { name: "MongoDB", level: 85, icon: "🍃", color: "#47A248" },
      { name: "Docker", level: 76, icon: "🐳", color: "#2496ED" },
      { name: "Git", level: 90, icon: "📦", color: "#F05032" },
    ]
  }
]

const experiences = [
  {
    title: "Full-stack Engineer",
    company: "Freelance",
    period: "2023 - Present",
    achievements: [
      "6+ projects completed with 100% client satisfaction",
      "Improved website performance by 40% on average",
      "Implemented real-time features using WebSocket"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Tech Startup",
    period: "2022 - 2023",
    achievements: [
      "Built 5 interactive admin dashboards",
      "Reduced loading time by 35%",
      "Collaborated with design team on design system implementation"
    ]
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
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
  { label: "⏰ Timezone", value: "WIB (UTC+7)" },
]

export default function About() {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience'>('experience')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section 
      id="about" 
      ref={ref}
      style={{
        padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a'
      }}
    >
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
              background: '#00f0ff',
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
            About <span style={{ color: '#00f0ff' }}>Me</span>
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

        {/* STATS COUNTER - RESPONSIVE GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 'clamp(12px, 3vw, 20px)',
          marginBottom: 'clamp(40px, 8vw, 60px)'
        }}>
          {[
            { icon: "📁", value: "6+", label: "Projects" },
            { icon: "👥", value: "6+", label: "Clients" },
            { icon: "📅", value: "3+", label: "Years Exp" },
            { icon: "⭐", value: "100%", label: "Satisfaction" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(0,240,255,0.12)',
                borderRadius: '20px',
                padding: 'clamp(16px, 4vw, 24px) clamp(12px, 3vw, 16px)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 'clamp(28px, 6vw, 32px)', marginBottom: '12px' }}>{stat.icon}</div>
              <div style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', fontWeight: 'bold', color: '#00f0ff' }}>{stat.value}</div>
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#666', marginTop: '8px' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* MAIN CONTENT - 2 KOLOM RESPONSIF */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(24px, 5vw, 40px)'
        }}>
          
          {/* LEFT COLUMN - BIOGRAPHY */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 4vw, 24px)' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, rgba(0,240,255,0.08), transparent)',
                padding: 'clamp(20px, 4vw, 28px)',
                borderRadius: '20px',
                borderLeft: '4px solid #00f0ff'
              }}
            >
              <p style={{ color: '#e0e0e0', fontSize: 'clamp(16px, 4vw, 18px)' }}>
                Hi! I'm <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>Satrio Dwi Ramadhan</span>
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
              style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(13px, 3vw, 14px)' }}
            >
              My journey began with curiosity about how websites work. Now, I've completed 
              over 6 projects ranging from real-time analytics dashboards to AI-powered platforms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(13px, 3vw, 14px)' }}
            >
              My expertise covers modern frontend with React & Next.js, scalable backend 
              with Node.js & Python, and cloud infrastructure with Docker.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(13px, 3vw, 14px)' }}
            >
              Beyond coding, I'm active in the Indonesian developer community, contribute 
              to open source, and share knowledge with fellow developers.
            </motion.p>

            {/* Personal Info - Responsive Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 'clamp(10px, 2.5vw, 12px)',
                marginTop: '8px'
              }}
            >
              {personalInfo.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(0,240,255,0.12)',
                    borderRadius: '12px',
                    padding: 'clamp(10px, 2.5vw, 12px)',
                  }}
                >
                  <p style={{ fontSize: 'clamp(9px, 2vw, 10px)', color: '#666', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#fff', fontWeight: 500, wordBreak: 'break-word' }}>{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - TABS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* TABS BUTTONS - Responsif */}
            <div style={{ 
              display: 'flex', 
              borderBottom: '1px solid rgba(255,255,255,0.1)', 
              marginBottom: '28px',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <button
                onClick={() => setActiveTab('experience')}
                style={{
                  padding: 'clamp(10px, 3vw, 12px) clamp(16px, 4vw, 24px)',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'experience' ? '#00f0ff' : '#888',
                  borderBottom: activeTab === 'experience' ? '2px solid #00f0ff' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                💼 Experience
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                style={{
                  padding: 'clamp(10px, 3vw, 12px) clamp(16px, 4vw, 24px)',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'skills' ? '#00f0ff' : '#888',
                  borderBottom: activeTab === 'skills' ? '2px solid #00f0ff' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                📚 Tech Stack
              </button>
            </div>

            {/* EXPERIENCE TAB */}
            {activeTab === 'experience' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vw, 16px)' }}>
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(0,240,255,0.12)',
                      borderRadius: '20px',
                      padding: 'clamp(18px, 4vw, 24px)',
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      flexWrap: 'wrap', 
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '16px' 
                    }}>
                      <div>
                        <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(16px, 4vw, 18px)' }}>{exp.title}</h3>
                        <p style={{ color: '#00f0ff', fontSize: 'clamp(12px, 3vw, 14px)' }}>{exp.company}</p>
                      </div>
                      <span style={{ 
                        fontSize: 'clamp(10px, 2.5vw, 12px)', 
                        color: '#666', 
                        padding: '4px 12px', 
                        background: 'rgba(255,255,255,0.05)', 
                        borderRadius: '100px',
                        whiteSpace: 'nowrap'
                      }}>
                        {exp.period}
                      </span>
                    </div>
                    <ul style={{ marginTop: '8px', paddingLeft: 'clamp(16px, 4vw, 20px)' }}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} style={{ color: '#aaa', fontSize: 'clamp(12px, 3vw, 14px)', marginBottom: '8px' }}>
                          <span style={{ color: '#00f0ff', marginRight: '8px' }}>▸</span>
                          <span style={{ wordBreak: 'break-word' }}>{achievement}</span>
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
                {skillCategories.map((category, catIdx) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (catIdx * 0.1) }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(0,240,255,0.12)',
                      borderRadius: '20px',
                      padding: 'clamp(18px, 4vw, 24px)',
                    }}
                  >
                    <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '20px', fontSize: 'clamp(16px, 4vw, 18px)' }}>
                      {category.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 3vw, 16px)' }}>
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '6px' }}>
                            <span style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#ccc' }}>
                              <span style={{ marginRight: '8px' }}>{skill.icon}</span> {skill.name}
                            </span>
                            <span style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#00f0ff' }}>{skill.level}%</span>
                          </div>
                          <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 0.8, delay: 0.6 + (catIdx * 0.1) }}
                              style={{
                                height: '100%',
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
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
                    border: '1px solid rgba(0,240,255,0.12)',
                    borderRadius: '20px',
                    padding: 'clamp(18px, 4vw, 24px)'
                  }}
                >
                  <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '16px', fontSize: 'clamp(16px, 4vw, 18px)' }}>🤝 Soft Skills</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 2vw, 10px)' }}>
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: '6px clamp(12px, 3vw, 14px)',
                          background: 'rgba(0,240,255,0.08)',
                          border: '1px solid rgba(0,240,255,0.2)',
                          borderRadius: '100px',
                          fontSize: 'clamp(11px, 2.5vw, 12px)',
                          color: '#00f0ff',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>

        {/* DOWNLOAD CV BUTTON - Responsif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 'clamp(40px, 8vw, 60px)' }}
        >
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: 'clamp(12px, 3vw, 14px) clamp(28px, 6vw, 36px)',
              background: 'linear-gradient(135deg, #00f0ff, #0088aa)',
              color: '#000',
              fontWeight: 'bold',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: 'clamp(13px, 3vw, 14px)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,240,255,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            📄 Download CV
          </a>
        </motion.div>

      </div>
    </section>
  )
}