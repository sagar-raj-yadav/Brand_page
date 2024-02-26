

import './NavBar.css';

const NavBar = () => {
  return (
  <>
    <div className="container">
    
      <div className='brand_logo'>
      <img  src="brand_logo.png" alt="brand_logo"></img>
      </div>

      <div className='menu'>
      <ul  className="menu1">
        <li><a href="#">MENU</a></li>
        <li><a href="#">LOCATION</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      </div>

      <div>
      <button className='nav-button'>Login</button>
      </div>
    </div>
  </>
  )
}

export default NavBar