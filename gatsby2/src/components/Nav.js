import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const NavStyles = styled.nav`
  margin-bottom: 1rem;
  ul {
    display: flex;
    background-color: var(--black);
  }
  a {
    padding: 0.5rem 1rem;
    display: block;
    text-decoration: none;
    color: var(--off-white);
  }
  a:hover {
    color: var(--white);
    background-color: var(--off-black);
  }

  a.active {
    color: var(--off-black);
    background-color: var(--deep-pink-half);
  }

  a[aria-current="page"] {
    color: var(--off-black);
    background-color: var(--deep-pink);
  }

  a.active:hover {
    color: var(--white);
    background-color: var(--deep-pink);
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Link className="active" to="/about">
          @infuerno
        </Link>
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
  </NavStyles>
);

export default Nav;
