import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectioContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextProvider from '@/context/theme-context'
import localFont from 'next/font/local'

const myFont = localFont({
  src: './CalSans-SemiBold.woff2',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akshay | Portfolio',
  description: 'Akshay is a software developer with 2.2 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${myFont.className}
          bg-[#EEEDEC]
          text-gray-950
          dark:bg-gray-900 dark:text-gray-50
          relative
        `}
      >
        <ThemeContextProvider>
          <ActiveSectioContextProvider>
            <Header />

            <main className="pt-28 sm:pt-32">
              {children}
            </main>

            <Footer />
            <Toaster position="top-right" />
          </ActiveSectioContextProvider>

          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
