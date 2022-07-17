import 'reflect-metadata'
import './assets/styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router5'
import { Provider as InversifyProvider } from 'inversify-react'
import { Provider as StoreProvider } from 'react-redux'
import App from './App'
import { router } from './router'
import { container } from '../inversify.config'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InversifyProvider container={container}>
      <StoreProvider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </StoreProvider>
    </InversifyProvider>
  </React.StrictMode>
)
