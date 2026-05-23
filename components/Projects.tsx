'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectModal, { Project } from './ProjectModal'

const projects: Project[] = [
  {
    id: 1,
    title: 'ApakabarTangsel',
    description: 'Portal berita digital lokal yang fokus menyajikan informasi terkini dan terpercaya seputar Tangerang Selatan.',
    longDescription: History of ApakabarTangsel

ApakabarTangsel was born in 2026 from a simple idea born out of concern over the lack of local news portals that truly focus on delivering information about South Tangerang. The name "ApakabarTangsel" was chosen because it reflects familiarity and closeness to the community, where the phrase "Apa kabar" (How are you) conveys a relaxed yet warm atmosphere in delivering news.

Starting from a small team of just five young journalists and media activists, they worked from a simple room in the Serpong area, gathering news from various sources with the spirit of presenting honest and balanced information. Entering its second month of operation, ApakabarTangsel began to attract the attention of South Tangerang residents, growing from dozens to thousands of visitors every day.

Today, ApakabarTangsel has transformed into an independent news portal that has become the main reference for the people of South Tangerang. With the tagline **#InformasiUntukWarga** (Information for Citizens), ApakabarTangsel is present not just as a media outlet, but as a partner to the community in obtaining accurate, fast, and relevant information for daily life in South Tangerang.

Website: https://www.apakabartangsel.com
Email: redaksi@apakabartangsel.com
Tangerang Selatan, Banten`,
    tech: ['PHP Native', 'MySQL', 'Tailwind CSS', 'JavaScript', 'TinyMCE', 'Chart.js'],
    category: 'News Portal',
    year: '2026',
    demoUrl: 'https://www.apakabartangsel.com',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #0F3B3C, #E67E22)',
    images: ['/images/projects/apakabar1.jpg', '/images/projects/apakabar2.jpg', '/images/projects/apakabar3.jpg'],
  },
  {
    id: 2,
    title: 'AuraChat',
    description: 'Aplikasi chat real-time dengan enkripsi end-to-end, support grup, file sharing, dan notifikasi push.',
    longDescription: 'AuraChat adalah messaging platform modern yang dibangun dengan arsitektur event-driven menggunakan Socket.io dan Node.js. Fitur utama meliputi enkripsi end-to-end dengan Web Crypto API, grup chat dengan permission management, file sharing hingga 100MB, video call via WebRTC, reaction emoji, dan sistem notifikasi push yang efisien. UI dibangun dengan React dan animasi Framer Motion. Aplikasi ini mampu menangani 10,000+ koneksi simultan dengan latency di bawah 100ms.',
    tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'WebRTC', 'Redis', 'Tailwind'],
    category: 'Real-Time App',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #00f0ff, #00ff88)',
    images: ['/images/projects/aura1.jpg', '/images/projects/aura2.jpg', '/images/projects/aura3.jpg'],
  },
  {
    id: 3,
    title: 'VisualizeAI',
    description: 'Dashboard data visualization interaktif dengan 3D charts menggunakan Three.js dan integrasi AI untuk insight otomatis.',
    longDescription: 'VisualizeAI menghadirkan pengalaman data visualization yang imersif dengan Three.js dan D3.js. Platform ini memungkinkan import data dari berbagai sumber (CSV, JSON, API), visualisasi 3D interaktif, AI-powered insight menggunakan OpenAI API, export chart dalam berbagai format, kolaborasi real-time, dan template dashboard yang siap pakai.',
    tech: ['React', 'Three.js', 'Python', 'PostgreSQL', 'OpenAI API', 'D3.js', 'FastAPI'],
    category: 'Data Viz',
    year: '2023',
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #ff6b00, #ff0080)',
    images: ['/images/projects/viz1.jpg', '/images/projects/viz2.jpg', '/images/projects/viz3.jpg'],
  },
  {
    id: 4,
    title: 'DevFlow',
    description: 'Project management tool untuk developer dengan kanban board, code review integration, CI/CD pipeline monitor.',
    longDescription: 'DevFlow adalah tools manajemen proyek yang dirancang khusus untuk tim developer. Menampilkan kanban board dengan drag-and-drop, integrasi langsung dengan GitHub untuk code review, monitoring CI/CD pipeline, time tracking, sprint planning dengan burndown chart, dokumentasi wiki terintegrasi, dan Slack notification.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Docker', 'GitHub API', 'Prisma'],
    category: 'Dev Tools',
    year: '2023',
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #7c3aed, #00f0ff)',
    images: ['/images/projects/devflow1.jpg', '/images/projects/devflow2.jpg', '/images/projects/devflow3.jpg'],
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
  hidden: { opacity: 0, y: 50 },
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section 
      id="projects" 
      ref={ref} 
      style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a'
      }}
    >
      {/* Background decorative */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.15, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #E67E22, transparent)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* HEADER SECTION - CENTERED */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ 
            textAlign: 'center', 
            marginBottom: '60px' 
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '60px' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              height: '3px',
              background: '#E67E22',
              margin: '0 auto 20px',
              borderRadius: '2px'
            }}
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              marginBottom: '16px'
            }}
          >
            Featured <span style={{ color: '#E67E22' }}>Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ 
              color: '#999', 
              maxWidth: '500px',
              margin: '0 auto',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              lineHeight: 1.6
            }}
          >
            Beberapa project yang telah saya kerjakan. Klik pada card untuk melihat detail lengkap.
          </motion.p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
              style={{
                cursor: 'pointer',
                position: 'relative',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(230,126,34,0.12)',
                borderRadius: '20px',
                padding: '28px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Top gradient accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: project.gradient,
                  transformOrigin: 'left',
                }}
              />

              {/* Category & Year Row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                flexWrap: 'wrap',
                gap: '10px',
              }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    padding: '4px 12px',
                    background: 'rgba(230,126,34,0.1)',
                    border: '1px solid rgba(230,126,34,0.3)',
                    borderRadius: '100px',
                    fontSize: '11px',
                    color: '#E67E22',
                    fontFamily: 'monospace',
                  }}>
                    {project.category}
                  </span>
                  <span style={{
                    padding: '4px 12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '100px',
                    fontSize: '11px',
                    color: '#888',
                    fontFamily: 'monospace',
                  }}>
                    {project.year}
                  </span>
                </div>

                {/* Arrow Icon with animation */}
                <motion.div
                  whileHover={{ rotate: 45, x: 5 }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(230,126,34,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E67E22" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </motion.div>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                marginBottom: '12px',
                color: '#fff',
                letterSpacing: '-0.02em',
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{
                color: '#aaa',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}>
                {project.description}
              </p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '4px 10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '6px',
                      fontSize: '10px',
                      color: '#888',
                      fontFamily: 'monospace',
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span style={{
                    padding: '4px 10px',
                    background: 'rgba(230,126,34,0.08)',
                    border: '1px solid rgba(230,126,34,0.2)',
                    borderRadius: '6px',
                    fontSize: '10px',
                    color: '#E67E22',
                    fontFamily: 'monospace',
                  }}>
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Click hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                style={{
                  fontSize: '10px',
                  color: 'rgba(230,126,34,0.5)',
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em',
                  marginTop: '12px',
                }}
              >
                Click to explore →
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
