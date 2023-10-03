import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Can Be Anything',
  description: 'The best place to center all your gifts ideas to share to your friends and family.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='dark' className='h-screen'>
      <body className={`${inter.className} h-screen flex flex-col`}>
        <Header />

        <main className='flex-1 max-w-10xl mx-auto'>
          {children}
        </main>

        <footer className='self-center'>
          <h2>Made with ❤️ by Nicodemos Santos</h2>
        </footer>
      </body>
    </html>
  )
}
