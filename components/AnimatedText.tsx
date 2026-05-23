'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

export default function AnimatedText({ 
  text, 
  className = '', 
  delay = 0, 
  once = true,
  as = 'div'
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const words = text.split(' ')
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay
      }
    }
  }

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
        duration: 0.5
      }
    }
  }

  const Component = as

  if (!text) return null

  return (
    <Component className={className}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.25rem',
        }}
      >
        {words.map((word, i) => (
          <motion.span 
            key={i} 
            variants={child} 
            style={{ 
              display: 'inline-block',
            }}
          >
            {word}
            {i < words.length - 1 && ' '}
          </motion.span>
        ))}
      </motion.div>
    </Component>
  )
}