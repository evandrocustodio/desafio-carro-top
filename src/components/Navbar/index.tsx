import './style.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md main-nav navbar-light">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text ">
          <div className='logo'>
          <FontAwesomeIcon icon={faFutbol} className="icone" />
          <h4>B3ts</h4>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active">
                MEU JOGOS
              </NavLink>
            </li>
            <li>
              <NavLink to="/rodadas">RANKING</NavLink>
            </li>            
            <li>
              <NavLink to="/regras">REGRAS</NavLink>
            </li>            
            <li>
              <NavLink to="/acesso">ACESSO</NavLink>
            </li>    
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
