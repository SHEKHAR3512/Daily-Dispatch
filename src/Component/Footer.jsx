import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<div className="container footer">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to={"home"} className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to={"contact"} className="nav-link px-2 text-body-secondary">Contact- Us</Link></li>
      <li className="nav-item"><Link  to={"about"} className="nav-link px-2 text-body-secondary">About</Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
</div>
  )
}

