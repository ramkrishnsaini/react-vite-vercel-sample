import React from 'react'

export default function About(){
  return (
    <section>
      <h1 style={{fontSize:28, marginBottom:8}}>About this template</h1>
      <p style={{lineHeight:1.8}}>
        This template is intentionally tiny and framework-agnostic for deployment.
        You can move it to GitHub and connect to Vercel for zero-config deploys.
      </p>
      <p style={{marginTop:12}}>
        To keep it portable, there is no backend. If you need APIs, add serverless
        functions using Vercel or host a separate API anywhere (Azure, AWS, etc.).
      </p>
    </section>
  )
}
