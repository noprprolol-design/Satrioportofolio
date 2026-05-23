'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectModal, { Project } from './ProjectModal'

const projects: Project[] = [
  {
    id: 1,
    title: 'ApakabarTangsel',
    description: 'A local digital news platform dedicated to providing up-to-date and reliable information about South Tangerang.',
    longDescription: `History of ApakabarTangsel

ApakabarTangsel was born in 2026 from a simple idea born out of concern over the lack of local news portals that truly focus on delivering information about South Tangerang. The name "ApakabarTangsel" was chosen because it reflects familiarity and closeness to the community, where the phrase "Apa kabar" (How are you) conveys a relaxed yet warm atmosphere in delivering news.

Starting from a small team of just five young journalists and media activists, they worked from a simple room in the Serpong area, gathering news from various sources with the spirit of presenting honest and balanced information. Entering its second month of operation, ApakabarTangsel began to attract the attention of South Tangerang residents, growing from dozens to thousands of visitors every day.

Today, ApakabarTangsel has transformed into an independent news portal that has become the main reference for the people of South Tangerang. With the tagline **#InformasiUntukWarga** (Information for Citizens), ApakabarTangsel is present not just as a media outlet, but as a partner to the community in obtaining accurate, fast, and relevant information for daily life in South Tangerang.

Website: https://www.apakabartangsel.com
Email: redaksi@apakabartangsel.com
Tangerang Selatan, Banten`,
    tech: ['PHP Native', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    category: 'News Portal',
    year: '2026',
    demoUrl: 'https://www.apakabartangsel.com',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #00B4D8, #0077B6)',
    images: ['/apakabar1.jpg', '/apakabar2.jpg', '/apakabar3.jpg'],
  },
  {
    id: 2,
    title: 'GreenLiteSpace',
    description: 'Sustainable green libraries for communities and public spaces.',
    longDescription: `History of GreenLiteSpace

GreenLiteSpace was born in 2025 from a simple idea born out of concern over the lack of eco-friendly reading spaces that truly focus on sustainability and community needs. The name "GreenLiteSpace" was chosen because it reflects a combination of green environmental values and light, welcoming library spaces that are accessible to everyone.

Starting from a small team of just three environmental design enthusiasts, they worked from a modest workshop, helping local communities build green libraries using recycled materials and energy-efficient concepts. Entering its second year of operation, GreenLiteSpace began to attract the attention of various communities and public institutions, growing from a small initiative to a trusted service provider.

Today, GreenLiteSpace has transformed into a professional service that has become a trusted partner for communities and public spaces looking to create sustainable libraries. With the tagline **#GreenReadGreenFuture**, GreenLiteSpace is present not just as a service provider, but as a partner to the community in creating eco-friendly, energy-efficient, and sustainable reading spaces for a better future.

Website: https://greenlitespacesz.vercel.app
Email: hello@greenlitespace.com
Tangerang Selatan, Banten`,
    tech: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind'],
    category: 'Green Library',
    year: '2025',
    demoUrl: 'https://greenlitespacesz.vercel.app/',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #2E7D32, #81C784)',
    images: ['/green1.jpg', '/green2.jpg', '/green3.jpg', '/green4.jpg'],
  },
  {
    id: 3,
    title: 'Aksara&Co',
    description: 'Strategic public relations and corporate communications agency building strong brand narratives.',
    longDescription: `History of Aksara&Co

Aksara&Co was born from a simple idea born out of concern over the lack of strategic communication services that truly understand brand narratives and public trust in Indonesia. The name "Aksara&Co" reflects a commitment to strategic communication and corporate reputation management.

Starting from a small team of just three public relations professionals, they worked with local businesses to build credible brand stories and media relationships. Entering its first year of operation, Aksara&Co began to attract the attention of corporate clients, growing from small businesses to major companies across various industries.

Today, Aksara&Co has transformed into a trusted public relations agency that has become a strategic partner for brands looking to build strong public trust. With services including Corporate Communications, Digital Public Relations, and Event & Brand Activation, Aksara&Co is present not just as a service provider, but as a partner in building lasting brand narratives and meaningful public relationships.

Website: https://aksara-co.vercel.app
Email: hello@aksaraco.com
Jakarta, Indonesia`,
    tech: ['React', 'Tailwind', 'Framer Motion', 'EmailJS'],
    category: 'Public Relations',
    year: '2026',
    demoUrl: 'https://aksara-co.vercel.app/',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #8B0000, #D32F2F)',
    images: ['/aksara1.jpg', '/aksara2.jpg', '/aksara3.jpg', '/aksara4.jpg'],
  },
  {
    id: 4,
    title: 'NexaCommerce',
    description: 'Modern e-commerce platform with real-time inventory, AI product recommendations, and advanced sales analytics.',
    longDescription: `History of NexaCommerce

NexaCommerce was born from the need for a scalable, feature-rich e-commerce solution that integrates modern technologies like AI and real-time data processing. The platform was designed to help merchants manage inventory dynamically and provide personalized shopping experiences.

Developed with Next.js and Node.js, NexaCommerce offers real-time inventory updates via WebSockets, AI-driven product recommendations using TensorFlow.js, and an interactive analytics dashboard. The system also features secure JWT authentication and a comprehensive admin panel.

Today, NexaCommerce serves 50+ merchants and processes thousands of transactions daily, making it a trusted choice for businesses looking to scale their online presence.`,
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'WebSocket'],
    category: 'E-Commerce',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #6A11CB, #2575FC)',
    images: ['/nexa1.jpg', '/nexa2.jpg', '/nexa3.jpg'],
  },
  {
    id: 5,
    title: 'DevFlow',
    description: 'Project management tool for developers with kanban board, code review integration, and CI/CD pipeline monitoring.',
    longDescription: `History of DevFlow

DevFlow was created to address the fragmentation of tools used by development teams. Combining project management, code review, and CI/CD monitoring into one platform, DevFlow streamlines the entire development workflow.

The platform features drag-and-drop kanban boards, direct GitHub integration for seamless code reviews, real-time CI/CD pipeline monitoring, time tracking, sprint planning with burndown charts, and integrated wiki documentation. Built with Next.js and TypeScript, DevFlow is scalable and secure.

Today, DevFlow is used by 30+ development teams across Indonesia, helping them ship better code faster.`,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'GitHub API'],
    category: 'Dev Tools',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #7c3aed, #00f0ff)',
    images: ['/devflow1.jpg', '/devflow2.jpg', '/devflow3.jpg'],
  },
  {
    id: 6,
    title: 'VisualizeAI',
    description: 'Interactive data visualization dashboard with 3D charts and AI-powered insights.',
    longDescription: `History of VisualizeAI

VisualizeAI was built to transform how data analysts and product teams interact with complex datasets. By combining immersive 3D visualizations with AI-driven insights, the platform makes data exploration intuitive and actionable.

Users can import data from various sources (CSV, JSON, API), create interactive 3D charts using Three.js and D3.js, and receive automated insights powered by OpenAI API. The platform also supports real-time collaboration, chart export, and ready-to-use dashboard templates.

Designed for high performance even with millions of data rows, VisualizeAI is the go-to solution for modern data visualization needs.`,
    tech: ['React', 'Three.js', 'Python', 'FastAPI', 'OpenAI API', 'D3.js', 'PostgreSQL'],
    category: 'Data Visualization',
    year: '2025',
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #ff6b00, #ff0080)',
    images: ['/viz1.jpg', '/viz2.jpg', '/viz3.jpg'],
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
      {/* Background decorative - Biru Muda */}
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
          background: 'radial-gradient(circle, #00B4D8, transparent)',
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
              background: '#00B4D8',
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
            Featured <span style={{ color: '#00B4D8' }}>Projects</span>
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
            Featured projects. Click any card to explore further.
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
                border: '1px solid rgba(0,180,216,0.12)',
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
                    background: 'rgba(0,180,216,0.1)',
                    border: '1px solid rgba(0,180,216,0.3)',
                    borderRadius: '100px',
                    fontSize: '11px',
                    color: '#00B4D8',
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
                    border: '1px solid rgba(0,180,216,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2">
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
                    background: 'rgba(0,180,216,0.08)',
                    border: '1px solid rgba(0,180,216,0.2)',
                    borderRadius: '6px',
                    fontSize: '10px',
                    color: '#00B4D8',
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
                  color: 'rgba(0,180,216,0.5)',
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