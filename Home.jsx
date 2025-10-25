import React from 'react'
export default function Home(){
  return (
    <section className="hero">
      <h2>Welcome to Citadel of Greatness Gospel Church</h2>
      <p className="lead">A place where faith meets action. Join us for worship, teaching, and community.</p>
      <div className="hero-actions">
        <a href="/events" className="btn">Next Service</a>
        <a href="/give" className="btn-outline">Give Online</a>
      </div>
    </section>
  )
}
