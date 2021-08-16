import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import LottieAnimation from './Lottie'
import home from '../../Animation/animation.json'
// import Landing from './Landing'

const Example = () => {
  return (
    <section className='flex-container'>
      <div className='flex-items'>
        <div className='land'>
          <h1 className='x-large text-focus-in ff-Work-Sans'>
            Connect with Developers
          </h1>
          <p className='lead ff-Work-Sans'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className='buttons'>
            {/* <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link> */}
            <Link to='/login' className='btn theme-color'>
              Get Started <i class='fas fa-arrow-right'></i>
            </Link>
          </div>
        </div>
      </div>
      <div class='flex-items'>
        <LottieAnimation lotti={home} height={650} width={640} />
      </div>
    </section>
  )
}

export default Example
