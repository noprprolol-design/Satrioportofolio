'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Setup audio
  useEffect(() => {
    audioRef.current = new Audio('/song.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5
  }, [])

  // Auto play saat user interaksi pertama kali
  useEffect(() => {
    const startMusic = () => {
      if (!hasStarted && audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
        setHasStarted(true)
      }
    }

    window.addEventListener('click', startMusic)
    window.addEventListener('scroll', startMusic)
    window.addEventListener('keydown', startMusic)

    return () => {
      window.removeEventListener('click', startMusic)
      window.removeEventListener('scroll', startMusic)
      window.removeEventListener('keydown', startMusic)
    }
  }, [hasStarted])

  // Toggle play/pause manual
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={togglePlay}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: isPlaying ? 'linear-gradient(135deg, #00B4D8, #0077B6)' : 'rgba(0,0,0,0.7)',
        border: '1px solid rgba(0,180,216,0.5)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      }}
    >
      {isPlaying ? '⏸️' : '🎵'}
    </motion.button>
  )
}