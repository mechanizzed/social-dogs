import React from 'react';

// styles
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/signin">Login / Registar</Link>
      </nav>
    </div>
  );
};

export default Footer;
