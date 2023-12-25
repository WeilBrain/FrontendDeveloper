import {NavLink} from 'react-router-dom'
import {BtnDarkMode} from "../UI/BtnDarkMode/BtnDarkMode.jsx";
import './style.css'

const Navbar = () => {
  const isActiveLink = 'nav-list__link nav-list__link--active'
  const isDefault = 'nav-list__link'

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to={'/'}><strong>Frontend</strong> developer</NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to={'/'} className={({isActive}) => isActive ? isActiveLink : isDefault}>Home</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to={'/projects'} className={({isActive}) => isActive ? isActiveLink : isDefault}>Projects</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to={'/contacts'} className={({isActive}) => isActive ? isActiveLink : isDefault}>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;