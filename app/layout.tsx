import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MainConatiner } from '@/components/ui/container';
import { NavBar } from '@/components/ui/navbar';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/ui/theme-prvider';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'uzwal - Full Stack Developer',
  description: 'Full-stack developer portfolio showcasing projects, work samples.',
  keywords: [
    'Portfolio',
    'Full-stack Developer',
    'Next.js',
    'JavaScript',
    'React',
    'Web Developer',
  ],
  icons: {
    icon: '/uzwal.ico',
  },
  authors: [{ name: 'uzwal' }],
  creator: 'Uzwal',
  // metadataBase: new URL("https:"),
  openGraph: {
    title: 'Uzwal - Full Stack Developer',
    description: 'Full-stack developer portfolio showcasing projects and work.',
    // url: "https:",
    siteName: 'uzwal tech',
    images: [
      {
        url: '/images/uzwal.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uzwal Portfolio',
    description: 'Explore Uzwal’s portfolio and projects.',
    images: ['/images/uzwal.jpg'],
    creator: '@isuzwal',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute={'class'} disableTransitionOnChange>
          <MainConatiner>
            <NavBar />
            {children}
          </MainConatiner>
          <Toaster
            toastOptions={{
              classNames: {
                success:
                  'bg-green-500 text-white border-green-600 hover:bg-green-700 transition-colors duration-200',

                error:
                  'bg-red-500 text-white border-red-600 hover:bg-red-700 transition-colors duration-200',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
