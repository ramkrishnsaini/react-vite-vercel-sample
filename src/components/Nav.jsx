import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  padding: '8px 12px',
  borderRadius: 8,
  textDecoration: 'none',
  color: isActive ? '#111' : '#333',
  background: isActive ? 'linear-gradient(90deg,#FFEA70,#FFD166)' : 'transparent'
})

export default function Nav(){
  return (
    <header style={{borderBottom:'1px solid #eee', background:'#FFF8E1'}}>
      <nav style={{display:'flex', gap:12, alignItems:'center', maxWidth:960, margin:'0 auto', padding:'12px 16px', flexWrap:'wrap'}}>
        <Link to="/" style={{fontWeight:700, fontSize:18, color:'#FF8C00', textDecoration:'none'}}>React Vite Vercel</Link>
        <div style={{display:'flex', gap:8}}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
        </div>
        <a href="https://vercel.com" target="_blank" style={{marginLeft:'auto', fontSize:14, color:'#555'}}>Vercel ↗</a>
      </nav>
    </header>
  )
}
