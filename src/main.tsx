import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { HashRouter, Route, Routes } from 'react-router-dom'
import {Header} from './blog/header.tsx'
import { RenderIndustryImmersion } from './blog/content/tours.tsx'
import { TravelsList } from './blog/content/travels.tsx'
import { Homepage } from './blog/content/home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-screen h-screen bg-[#E5D2B8]'>
        <Header />
        <HashRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Homepage />}/>
              <Route path="#/travels" element={<TravelsList />}/>
              <Route path="#/tour" element={<RenderIndustryImmersion />}/>
            </Route>
          </Routes>
        </HashRouter>
    </div>
  </StrictMode>,
)
