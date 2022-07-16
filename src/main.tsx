import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router5'
import './assets/styles/global.css'
import App from './App'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
