import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register({ name, email, password })
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-theme text-center'>Sign Up</h1>
        <div className='formbg'>
          <p className='lead ff-Work-Sans text-center pd-top-30'>
            <i className='fas fa-user' /> Create Your Account
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='stext'
                placeholder='Name'
                name='name'
                className='component-center mg-auth'
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='semail'
                placeholder='Email Address'
                name='email'
                className='component-center mg-auth'
                value={email}
                onChange={(e) => onChange(e)}
              />
              <small className='form-text component-center mg-auth'>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div className='form-group'>
              <input
                type='spassword'
                placeholder='Password'
                name='password'
                className='component-center mg-auth'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='spassword'
                placeholder='Confirm Password'
                name='password2'
                className='component-center mg-auth'
                value={password2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <input
              type='submit'
              className='button component-center mg-auth width'
              value='Register'
            />
          </form>
          <p className='mg-auth text-center pd-bottom-30'>
            Already have an account? <Link to='/login'>Sign In</Link>
          </p>
        </div>
      </section>
    </Fragment>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { setAlert, register })(Register)
