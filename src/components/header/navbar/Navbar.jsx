  import React from 'react'
  import { useNavigate } from 'react-router';
  import './navbar.css'
  const Navbar = () => {
    const navigate = useNavigate();

    return (
      <div className='navbar'>
        <ul>
              <li onClick={()=>navigate('/')}>Home</li>
              <li onClick={()=>navigate('/about')}>About</li>
              <li onClick={()=>navigate('/project')}>Project</li>
              <li onClick={()=>navigate('/services')}>Services</li>
              <li onClick={()=>navigate('/blog')}>Blog</li>
              <li onClick={()=>navigate('/contact')}>Contact</li>
          </ul>
      </div>
    )
  }

  export default Navbar
