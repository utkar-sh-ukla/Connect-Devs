import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Fragment>
      <section className='container'>
        <h1 className='xx-large text-theme text-center'>Sign In</h1>
        <div className='formbg'>
          <p className='lead text-center pd-top-30 ff-Work-Sans'>
            <i className='fas fa-user' /> Sign Into Your Account
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='semail'
                placeholder='Email Address'
                name='email'
                className='component-center mg-auth'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='spassword'
                placeholder='Password'
                name='password'
                className='component-center mg-auth'
                value={password}
                onChange={(e) => onChange(e)}
                minLength='6'
              />
            </div>
            <input
              type='submit'
              className='button component-center mg-auth width'
              value='Login'
            />
          </form>
          <p className='mg-1 text-center pd-bottom-30'>
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>
        </div>
      </section>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
