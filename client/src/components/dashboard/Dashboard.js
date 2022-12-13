import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import welcome from '../../img/welcome.svg'

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='dashboard_container'>
        <h1 className='xx-large text-theme mg-1'>Dashboard</h1>
        <p className='lead ff-Work-Sans'>
          <img src={welcome} className='welcome' alt='welcome'/> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <div className='mg-2'>
              <button
                className='btn btn-danger'
                onClick={() => deleteAccount()}
              >
                <i class='far fa-trash-alt' /> Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className='no_dashboard_container'>
              <i class='fas fa-user-circle fa-8x pd-bottom-30'></i>
              <p className='pd-bottom-30'>
                You have not yet setup a profile, please add some info
              </p>
              <Link to='/create-profile' className='button'>
                Create Profile
              </Link>
            </div>
          </Fragment>
        )}
      </section>
    </Fragment>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
)
