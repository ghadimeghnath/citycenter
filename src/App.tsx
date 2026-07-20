import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Index from './routes/index'
import MenuAdmin from './routes/admin.menu'
import { reportLovableError } from './lib/lovable-error-reporting'

const queryClient = new QueryClient()

function ErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  React.useEffect(() => {
    reportLovableError(error, { boundary: 'root_error_component' })
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { queryClient.invalidateQueries(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin/menu" element={<MenuAdmin />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </QueryClientProvider>
  )
}
