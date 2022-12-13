import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import logo from '../../img/c.svg'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles' className='button'>
          <i class='fas fa-user'></i> <span className='hide-sm'>Developer</span>
        </Link>
      </li>
      <li>
        <Link to='/posts' className='button'>
          <i class='fas fa-plus-square'></i>{' '}
          <span className='hide-sm'>Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard' className='button'>
          <i class='fas fa-chalkboard-teacher'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!' className='button'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles' className='button'>
          <i class='fas fa-user'></i>
          <span className='hide-sm'>Developers</span>
        </Link>
      </li>
      <li>
        <Link to='/register' className='button'>
          Sign Up
        </Link>
      </li>
      <li>
        <Link to='/login' className='button'>
          Sign In
        </Link>
      </li>
    </ul>
  )

  return (
    <nav className='navbar '>
      <h1 className='large'>
        <Link to='/' style={{ color: '#111439', textAlign: 'center' }}>
          <img src={logo} className='logo' alt='logo'/>
          onnect Devs
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar)
