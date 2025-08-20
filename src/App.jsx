import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
      <Nav />
      <main style={{flex:1, maxWidth:960, margin:'0 auto', padding:'24px'}}>
        <Outlet />
      </main>
      <footer style={{padding:'16px', textAlign:'center', borderTop:'1px solid #eee', fontSize:14}}>
        Deployed free on Vercel • React + Vite • Platform-independent (static hosting)
      </footer>
    </div>
  )
}
