import { Link } from "gatsby"
import React from "react"

const Header = () =>(
  <header>
    <div className='container'>
      <div className='inner-header'>
      <div className='logo'>
        <Link to="/" >Utkarsh Rai</Link>
      </div>
      <div className='navigation'>
        <nav>
          <Link to="/#about-jump" data-text="About">About</Link>
          <Link to="/projects" data-text="Projects">Projects</Link>
          <Link to="/#contact-jump" data-text="Contact">Contact</Link>
        </nav>
      </div>
      </div>
    </div>
  </header>
)


export default Header