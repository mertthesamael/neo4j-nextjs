"use client"
import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from 'next-auth/react';
import React, { FC } from 'react'

type ProvidersProps = {
    children:React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
        {children}
        <Toaster />
    </SessionProvider>
  )
}

export default Providers;