import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import logo from '../images/logo.svg'

const NavLinks = [{
  path: '#services',
  name: 'Services'
},
{
  path: '#process',
  name: 'Our Process'
},
{
  path: '#team',
  name: 'Team'
},
{
  path: '#about-us',
  name: 'About Us'
},
{
  path: '#contact-us',
  name: 'Contact Us'
},]

const HeaderNavLink = ({ path, name }) => (
  <button onClick={() => { scrollTo(path) }} className="header__link">
    {name}
  </button>
)

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="header__nav">
          { NavLinks.map(({ path, name }) => 
              <HeaderNavLink key={path} path={path} name={name} />
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header;
