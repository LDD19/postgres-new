'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import AppProvider from './app-provider'

const queryClient = new QueryClient()

export default function Providers({ children }: PropsWithChildren) {
  return (
    // Force theme until we implement dark mode
    <ThemeProvider forcedTheme="light">
      <QueryClientProvider client={queryClient}>
        <AppProvider>{children}</AppProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
