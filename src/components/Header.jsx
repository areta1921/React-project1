import logo from '../image/logo.png'
import "../style/HeaderS.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav className='nav'>
          <img src={logo} className='nav-logo' alt="" />
          <ul className ='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
