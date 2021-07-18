import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './style.css';

const Navbar = () => {
  const { links } = useGlobalContext();

  return (
    <nav className="navbar navbar-expand navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          IG-Clone
        </Link>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">
            {links.map((navLink) => {
              const { id, name, url, icon } = navLink;
              return (
                <li key={id} className="nav-item">
                  <Link className="nav-link" to={url}>
                    {icon || name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
