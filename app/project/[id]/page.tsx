'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Data projects
const projectsData = [
  {
    id: 1,
    title: 'NexaCommerce',
    description: 'Platform e-commerce modern dengan real-time inventory, AI product recommendation, dan analitik penjualan canggih.',
    longDescription: `NexaCommerce adalah platform e-commerce full-stack yang dibangun dengan Next.js 14 dan Node.js.

Fitur utama meliputi:
• Sistem inventory real-time menggunakan WebSockets
• Rekomendasi produk berbasis AI dengan TensorFlow.js
• Dashboard analitik interaktif dengan chart real-time
• Integrasi payment gateway (Midtrans, Stripe)
• Arsitektur microservices yang scalable
• Sistem autentikasi JWT yang aman
• Panel admin yang komprehensif

Platform ini telah digunakan oleh 50+ merchant dan memproses ribuan transaksi setiap harinya.`,
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'TypeScript', 'WebSocket'],
    category: 'E-Commerce',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #00f0ff, #0080ff)',
    images: ['/images/projects/nexa1.jpg', '/images/projects/nexa2.jpg', '/images/projects/nexa3.jpg'],
  },
  {
    id: 2,
    title: 'AuraChat',
    description: 'Aplikasi chat real-time dengan enkripsi end-to-end, support grup, file sharing, dan notifikasi push.',
    longDescription: `AuraChat adalah messaging platform modern dengan arsitektur event-driven.

Fitur utama meliputi:
• Enkripsi end-to-end dengan Web Crypto API
• Grup chat dengan permission management
• File sharing hingga 100MB
• Video call via WebRTC
• Reaction emoji dan reply message
• Sistem notifikasi push yang efisien

Aplikasi ini mampu menangani 10,000+ koneksi simultan dengan latency di bawah 100ms.`,
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
    longDescription: `VisualizeAI menghadirkan pengalaman data visualization yang imersif dengan Three.js dan D3.js.

Fitur utama meliputi:
• Import data dari CSV, JSON, API
• Visualisasi 3D interaktif
• AI-powered insight menggunakan OpenAI API
• Export chart dalam berbagai format
• Kolaborasi real-time
• Template dashboard siap pakai

Dirancang untuk data analyst dan tim product dengan performa tinggi.`,
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
    longDescription: `DevFlow adalah tools manajemen proyek yang dirancang khusus untuk tim developer.

Fitur utama meliputi:
• Kanban board dengan drag-and-drop
• Integrasi langsung dengan GitHub untuk code review
• Monitoring CI/CD pipeline
• Time tracking dan sprint planning
• Burndown chart untuk tracking progress
• Dokumentasi wiki terintegrasi
• Slack notification

Digunakan oleh 30+ tim developer di Indonesia.`,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Docker', 'GitHub API', 'Prisma'],
    category: 'Dev Tools',
    year: '2023',
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #7c3aed, #00f0ff)',
    images: ['/images/projects/devflow1.jpg', '/images/projects/devflow2.jpg', '/images/projects/devflow3.jpg'],
  },
]

export default function ProjectDetail() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const project = projectsData.find(p => p.id === id)
  const [currentImage, setCurrentImage] = useState(0)

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>404</h1>
          <p style={{ color: '#888' }}>Project not found</p>
          <Link href="/#projects" style={{ color: '#00f0ff', marginTop: '1rem', display: 'inline-block' }}>← Back to Projects</Link>
        </div>
      </div>
    )
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* Navbar Back */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 24px',
        background: 'rgba(10,10,10,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,240,255,0.1)',
        zIndex: 100,
      }}>
        <Link href="/#projects" style={{ color: '#00f0ff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          ← Back to Projects
        </Link>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 60px' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 12px', background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: '100px', fontSize: '12px', color: '#00f0ff' }}>
              {project.category}
            </span>
            <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '12px', color: '#888' }}>
              {project.year}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '700px', lineHeight: 1.6 }}>
            {project.description}
          </p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ marginTop: '48px' }}>
          <div style={{
            position: 'relative',
            aspectRatio: '16/9',
            background: '#111',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(0,240,255,0.2)',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${project.gradient.split(',')[0]}, #0a0a0a)`,
              fontSize: '4rem',
            }}>
              🖼️ {project.title} - Screenshot {currentImage + 1}
            </div>

            {project.images.length > 1 && (
              <>
                <button onClick={prevImage} style={{
                  position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                  width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(0,240,255,0.3)', color: '#00f0ff', cursor: 'pointer',
                  fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>←</button>
                <button onClick={nextImage} style={{
                  position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                  width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(0,240,255,0.3)', color: '#00f0ff', cursor: 'pointer',
                  fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>→</button>
                <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                  {project.images.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentImage(idx)} style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: currentImage === idx ? '#00f0ff' : 'rgba(255,255,255,0.3)',
                      cursor: 'pointer', padding: 0, transition: 'all 0.3s'
                    }} />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Description & Tech */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '48px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>Project Overview</h2>
            <div style={{ color: '#aaa', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{project.longDescription}</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>Tech Stack</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {project.tech.map(tech => (
                <span key={tech} style={{ padding: '6px 14px', background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: '100px', fontSize: '13px', color: '#00f0ff' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{
                padding: '12px 28px', background: 'linear-gradient(135deg, #00f0ff, #0088aa)', color: '#000', fontWeight: 'bold', borderRadius: '100px', textDecoration: 'none'
              }}>Live Demo →</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                padding: '12px 28px', background: 'transparent', border: '1px solid #00f0ff', color: '#00f0ff', fontWeight: 'bold', borderRadius: '100px', textDecoration: 'none'
              }}>GitHub →</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}