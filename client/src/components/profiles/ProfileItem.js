import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='' />
      <div>
        <h2>{name}</h2>
        <p>
          <i class='fas fa-building'></i>
          &nbsp; {status} {company && <span>at {company}</span>}
        </p>
        <p className='mg-1'>
          {' '}
          <i class='fas fa-map-marker-alt'></i>
          &nbsp; {location && <span>{location}</span>}
        </p>
        <Link to={`/profile/${_id}`} className='btn theme-color'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skills, index) => (
          <li key={index} className=' text-theme ff-Playfair-Display'>
            <i class='fas fa-star-half'></i>
            {skills}
          </li>
        ))}
      </ul>
    </div>
  )
}

ProfileItem.propTypes = {}

export default ProfileItem
