import React from 'react';
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <NavBar/>
      <Link to="/" className="item">
        BSoft Profile
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Items
        </Link>
      </div>
    </div>
  );
};

export default Header;
