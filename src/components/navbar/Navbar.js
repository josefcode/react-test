import { Link, Outlet } from 'react-router-dom'

import { Nav, Ul, Li, Logo } from './navbarStyle'

export function Navbar() {
  return (
    <header>
      <Nav>
        <Logo>Bookkeeper</Logo>
        <Ul>
          <Li>
            <Link to="/">Home</Link>
          </Li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </Ul>
      </Nav>
      <Outlet />
    </header>
  )
}
