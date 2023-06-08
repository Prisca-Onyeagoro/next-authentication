'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export default function NextAuthProvider({ children }) {
  return React.createElement(SessionProvider, null, children);
}
