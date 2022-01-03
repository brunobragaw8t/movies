import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">Movies DB</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarContent" aria-labelledby="navbarContentLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarContentLabel">Movies DB</h5>

            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/favourites"
                  className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
                >
                  Favourites
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
