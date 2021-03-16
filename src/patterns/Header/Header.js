import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/" aria-label="Home">
          <Logo styleComponents="logo" />
          <span className="marcaNome">Of Space</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
