import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Header} from './blog/header.tsx'
import {Sections} from './blog/sections.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-screen h-screen'>
      <Header />
      <Sections />
    </div>
  </StrictMode>,
)
