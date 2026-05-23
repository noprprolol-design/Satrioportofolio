'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string
  year: string
  demoUrl: string
  githubUrl: string
  gradient: string
  images?: string[]
}

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const [currentImage, setCurrentImage] = useState(0)

  // Ambil images untuk kemudahan dan type safety
  const images = project?.images ?? []

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && images.length > 0) {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
      }
      if (e.key === 'ArrowRight' && images.length > 0) {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }
    }
    if (project) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
      setCurrentImage(0)
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, images.length, onClose])

  if (!project) return null

  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  // Fallback image jika tidak ada
  const getImageSrc = (index: number) => {
    if (images[index]) return images[index]
    // fallback ke placeholder
    return `/images/projects/${project.title.toLowerCase().replace(/[^a-z]/g, '')}${index + 1}.jpg`
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.94)',
          backdropFilter: 'blur(12px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '850px',
            width: '100%',
            maxHeight: '85vh',
            background: '#0a0a0a',
            border: '1px solid rgba(0,240,255,0.2)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <div style={{ height: '3px', background: project.gradient, width: '100%' }} />

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(0,240,255,0.3)',
              color: '#00f0ff',
              cursor: 'pointer',
              zIndex: 20,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>

          <div style={{ padding: '0 0 12px 0' }}>
            <div style={{
              position: 'relative',
              borderRadius: '0',
              overflow: 'hidden',
              background: '#050505',
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                minHeight: '240px',
                maxHeight: '320px',
              }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={getImageSrc(currentImage)}
                    alt={`${project.title} screenshot`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '320px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?background=00f0ff&color=fff&name=${project.title.substring(0, 2)}&size=800`
                    }}
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.6)',
                        border: '1px solid rgba(0,240,255,0.4)',
                        color: '#00f0ff',
                        cursor: 'pointer',
                        fontSize: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.6)',
                        border: '1px solid rgba(0,240,255,0.4)',
                        color: '#00f0ff',
                        cursor: 'pointer',
                        fontSize: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      →
                    </button>
                  </>
                )}

                {images.length > 1 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 10,
                    background: 'rgba(0,0,0,0.5)',
                    padding: '5px 12px',
                    borderRadius: '20px',
                  }}>
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: currentImage === idx ? '#00f0ff' : 'rgba(255,255,255,0.5)',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {images.length > 1 && (
              <div style={{
                textAlign: 'center',
                marginTop: '10px',
                fontSize: '11px',
                color: '#666',
                fontFamily: 'monospace',
              }}>
                {currentImage + 1} / {images.length}
              </div>
            )}
          </div>

          <div style={{
            padding: '16px 24px 24px 24px',
            overflowY: 'auto',
            flex: 1,
          }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span style={{
                padding: '3px 10px',
                background: 'rgba(0,240,255,0.1)',
                border: '1px solid rgba(0,240,255,0.3)',
                borderRadius: '100px',
                fontSize: '10px',
                color: '#00f0ff',
              }}>{project.category}</span>
              <span style={{
                padding: '3px 10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                fontSize: '10px',
                color: '#888',
              }}>{project.year}</span>
            </div>

            <h2 style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#fff',
            }}>{project.title}</h2>

            <div style={{
              color: '#aaa',
              lineHeight: 1.7,
              marginBottom: '20px',
              fontSize: '0.85rem',
              whiteSpace: 'pre-line',
            }}>
              {project.longDescription}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '10px',
                color: '#666',
                marginBottom: '8px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>Tech Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    padding: '4px 10px',
                    background: 'rgba(0,240,255,0.08)',
                    border: '1px solid rgba(0,240,255,0.2)',
                    borderRadius: '20px',
                    fontSize: '10px',
                    color: '#00f0ff',
                  }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 20px',
                  background: 'linear-gradient(135deg, #00f0ff, #0088aa)',
                  color: '#000',
                  fontWeight: 600,
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontSize: '12px',
                }}
              >
                Live Demo →
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 20px',
                  background: 'transparent',
                  border: '1px solid #00f0ff',
                  color: '#00f0ff',
                  fontWeight: 600,
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontSize: '12px',
                }}
              >
                GitHub →
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}