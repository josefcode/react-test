import { Link, Outlet } from 'react-router-dom'

export function Navbar() {
  return (
    <header>
      <nav>
        <h1>Bookkeeper</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  )
}
