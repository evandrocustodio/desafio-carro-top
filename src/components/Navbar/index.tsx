import './style.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md main-nav navbar-light">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text ">
          <h4>Sportifs</h4>
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
              <NavLink to="/rodadas">RODADAS</NavLink>
            </li>            
            <li>
              <NavLink to="/premiacoes">RANKING</NavLink>
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
