import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
