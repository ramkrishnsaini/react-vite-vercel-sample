import React from 'react'

export default function Home(){
  return (
    <section>
      <h1 style={{fontSize:32, marginBottom:8}}>Welcome 👋</h1>
      <p style={{fontSize:18, lineHeight:1.6}}>
        This is a minimal <strong>React + Vite</strong> app designed to be deployed on <strong>Vercel (free)</strong> as a static site.
        It’s completely platform-independent — any static host will work.
      </p>

      <ul style={{marginTop:16, lineHeight:1.8}}>
        <li>Fast local dev with <code>vite</code></li>
        <li>Simple build: <code>npm run build</code> → <code>dist/</code></li>
        <li>SPA routing via <code>react-router</code> (handled by Vercel rewrite)</li>
      </ul>

      <div style={{marginTop:24, padding:16, border:'1px solid #eee', borderRadius:12, background:'#FFFDE7'}}>
        <b>Try it:</b>
        <ol style={{marginTop:8}}>
          <li>Run <code>npm i</code></li>
          <li>Run <code>npm run dev</code> and open http://localhost:5173</li>
          <li>Build with <code>npm run build</code></li>
        </ol>
      </div>
    </section>
  )
}
