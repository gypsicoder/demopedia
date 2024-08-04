import NavBar from '@/components/navBar/NavBar';
import './globals.css';
import {Inter} from 'next/font/google';
import Footer from '@/components/footer/Footer';
import {ThemeProvider} from '@/contexts/ThemeContext';
import {AuthProvider} from '@/components/authProvider/AuthProvider';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Demopedia',
  description:
    'A demo website showcasing projects and blog posts developed in NextJS 13',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='max-w-[1366px] min-h-screen mx-auto px-[60px] flex flex-col justify-between'>
              <NavBar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
