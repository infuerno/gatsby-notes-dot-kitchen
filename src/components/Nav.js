import { Link } from 'gatsby';
import React from 'react';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/about">@infuerno</Link>
      </li>
      <li>
        <Link to="/">notes</Link>
      </li>
      <li>
        <Link to="/projects">projects</Link>
      </li>
      <li>
        <Link to="/colophon">colophon</Link>
      </li>
      <li>
        <Link to="/elsewhere">elsewhere</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
