'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import NextAuthProvider from './Providers/Sessionproviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home Page',
  description: 'Tutorial on next-auth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={inter.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
