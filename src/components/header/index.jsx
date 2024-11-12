import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Logo</h1>
        {pathname === '/' ? (
          <nav className="header-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/introduccion" className="nav-link">Introducción</Link>
              </li>
              <li className="nav-item">
                <Link to="/registro" className="nav-link">Registro</Link>
              </li>
              <li className="nav-item">
                <Link to="/detalle" className="nav-link">Detalle</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <h2>¡Bienvenido a {pathname.replace('/', '')}!</h2>
            <button onClick={handleGoBack} className="back-button">
              Regresar
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
