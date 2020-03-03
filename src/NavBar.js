import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar() {

  return (
    <nav>
      <NavLink exact to="/colors">
        Home
      </NavLink>
      <NavLink exact to="/colors/new">
        Add Color
      </NavLink>
    </nav>
  );
}

export default NavBar;
