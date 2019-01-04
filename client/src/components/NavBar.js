import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <nav>
    <NavLink activeStyle={styles.active} exact to='/'>Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to='/about'>About</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to='/items'>Item List</NavLink>
  </nav>
)

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

export default NavBar