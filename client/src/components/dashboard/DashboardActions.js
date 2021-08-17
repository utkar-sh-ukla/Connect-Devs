import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {
  return (
    <div className='bu'>
      <Link to='/edit-profile' className='dashboard-buttons'>
        <i className='fas fa-user-circle' />{' '}
        <span className='hide-sm'>Edit Profile</span>
      </Link>

      <Link to='/add-experience' className='dashboard-buttons '>
        <i className='fab fa-black-tie ' />{' '}
        <span className='hide-sm'>Add Experience</span>
      </Link>

      <Link to='/add-education' className='dashboard-buttons '>
        <i className='fas fa-graduation-cap ' />{' '}
        <span className='hide-sm'>Add Education</span>
      </Link>
    </div>
  )
}

export default DashboardActions
