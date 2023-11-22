import './globals.css'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reactive Weather',
  description: 'Time for the right weather',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
