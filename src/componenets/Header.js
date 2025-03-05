import logo from '../images/little-lemon-logo-main.jpg'

function Header(){
    return (
    <header className='container header-container'>
       <img src={logo} alt="Little Lemon Logo" width="300" height="auto"></img>
       <nav className="nav-container">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    )
}

export default Header;