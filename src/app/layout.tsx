
import CustomCursor from '@/components/Cursor';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';
import type { Metadata } from 'next';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false


export const metadata: Metadata = {
  title: 'Neelay Kamat | Portfolio',
  description: 'Explore Neelay Kamat’s work across Web Development, Design, and Data Science',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
<body className="scroll-smooth transition-colors duration-300">        <ThemeProvider>
        <Header />
        <main>{children}</main>
        <Footer />
        </ThemeProvider>
        <CustomCursor />
      </body>
    </html>
  )
}
