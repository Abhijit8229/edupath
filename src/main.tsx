import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './router/router.tsx'
import AuthProvider from './context/authProvider.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
