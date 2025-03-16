import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NewsContext } from '../Context/NewsContext'

export default function NavBar() {
  const {setcategory}=useContext(NewsContext)
  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </Link>
        <a className="navbar-brand" href="home" style={{fontFamily: 'Amoretta',fontSize:"30px"}}>Daily Dispatch</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
      <span className="navbar-toggler-icon"></span>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to={'home'} className="nav-link px-2 text-white link-hover">Home</Link></li>
          <li><Link to={'about'} className="nav-link px-2 text-white link-hover">About</Link></li>
          <li><Link to={'contact'} className="nav-link px-2 text-white link-hover">Contact</Link></li>
          <li><Link to={''} className="nav-link px-2 text-white link-hover" onClick={()=>{setcategory('business')}}>Business</Link></li>
          <li><Link to={''} className="nav-link px-2 text-white link-hover" onClick={()=>{setcategory('entertainment')}}>Entertainment</Link></li>
          <li><Link to={''} className="nav-link px-2 text-white link-hover" onClick={()=>{setcategory('health')}}>Health</Link></li>
          <li><Link to={''} className="nav-link px-2 text-white link-hover" onClick={()=>{setcategory('sports')}}>Sports</Link></li>
          <li><Link to={''} className="nav-link px-2 text-white link-hover" onClick={()=>{setcategory('technology')}}>Technology</Link></li>
          <li><Link to={''} className="nav-link px-2 text-white link-hover" onClick={()=>{setcategory('science')}}>Science</Link></li>
        </ul>
      </div>
    </div>
    <style>{`
      .link-hover {
        transition: all 0.3s ease-in-out;
        position: relative;
      }
      .link-hover::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -3px;
        width: 0;
        height: 2px;
        background-color: yellow;
        transition: all 0.3s ease-in-out;
        transform: translateX(-50%);
      }
      .link-hover:hover {
        color: yellow !important;
      }
      .link-hover:hover::after {
        width: 100%;
      }
    `}</style>
  </header>
  )
}
