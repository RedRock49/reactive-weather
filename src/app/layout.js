import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from './components/sideBar';


const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reactive Weather',
  description: 'Time for the right weather',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        <div className={font.className}>{children}</div>
      </body>
    </html>
  )
}
