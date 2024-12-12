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
      <span class="navbar-toggler-icon"></span>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to={'home'} className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to={'about'} className="nav-link px-2 text-white">About</Link></li>
          <li><Link to={'contact'} className="nav-link px-2 text-white">Contact</Link></li>
          <li><Link to={''} className="nav-link px-2 text-white"onClick={()=>{setcategory('business')}}>Business</Link></li>
          <li> <Link to={''} className="nav-link px-2 text-white" onClick={()=>{setcategory('entertainment')}}>Entertainment</Link></li>
          <li><Link to={''} className="nav-link px-2 text-white" onClick={()=>{setcategory('health')}}>Health</Link></li>
          <li><Link to={""} className="nav-link px-2 text-white" onClick={()=>{setcategory('sports')}}>Sports</Link></li>
          <li><Link to={""} className="nav-link px-2 text-white" onClick={()=>{setcategory('technology')}}>Technology</Link></li>
          <li><Link to={""} className="nav-link px-2 text-white" onClick={()=>{setcategory('science')}}>Science</Link></li>
  
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  )
}
