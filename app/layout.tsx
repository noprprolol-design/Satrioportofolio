import type { Metadata } from 'next'
import './globals.css'
import MusicPlayer from '@/components/MusicPlayer'

export const metadata: Metadata = {
  title: 'Satrio Dwi Ramadhan — Full-Stack Engineer',
  description: 'Portfolio of Satrio Dwi Ramadhan, Full-Stack Engineer & Creative Technologist based in Indonesia.',
  keywords: ['Satrio Dwi Ramadhan', 'Full Stack Engineer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Satrio Dwi Ramadhan' }],
  openGraph: {
    title: 'Satrio Dwi Ramadhan — Full-Stack Engineer',
    description: 'Portfolio of Satrio Dwi Ramadhan',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  )
}