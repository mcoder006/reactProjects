import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './app/Home/Home.tsx'
import NewIdea from './app/addNewIdea/NewIdea.tsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home />,
  },
  {
    path: '/new',
    element: <NewIdea />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
