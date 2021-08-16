import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div class='profile-about bg-light pd-2'>
    {bio && (
      <Fragment>
        <h2 class='text-theme'>{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
        <div class='line' />
      </Fragment>
    )}
    <h2 class='text-theme'>Skill Set</h2>
    <div class='text-theme ff-Playfair-Display'>
      {skills.map((skill, index) => (
        <div key={index} className='pd-1'>
          <i class='fas fa-star-half'></i> {skill}
        </div>
      ))}
    </div>
  </div>
)

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileAbout
