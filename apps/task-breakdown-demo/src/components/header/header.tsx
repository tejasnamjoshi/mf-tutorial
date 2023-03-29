import Button from '../button/button';
import './header.scss';

export function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <h1>Task Breakdown</h1>
        <div className="header-right">
          <nav className="navbar">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <Button>Login</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
