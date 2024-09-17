import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <header className={style.navbar}>
      <h1><Link to="/">WebTech PUC Minas</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">React.js</Link></li>
          <li><Link to="/next">Next.js</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
