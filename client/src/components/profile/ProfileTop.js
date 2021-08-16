import React from 'react'
import PropTypes from 'prop-types'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twitter.svg'
import linkedin from '../../img/linkedin.svg'
import youtube from '../../img/youtube.svg'
import link from '../../img/link.svg'

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div class='profile-top  pd-2'>
      <img class='profile-top-img round-img mg-1' src={avatar} alt='' />
      <h1 class='large'>{name}</h1>
      <p class='lead ff-Work-Sans'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div class='icons mg-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <img src={link} className='link' />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <img src={twitter} className='twitter' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <img src={facebook} className='facebook' />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} className='linkedin' />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <img src={youtube} className='youtube' />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <img src={instagram} className='instagram' />
          </a>
        )}
      </div>
    </div>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileTop
