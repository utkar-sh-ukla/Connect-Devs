import React from 'react'
import Lottie from 'react-lottie'

export default function LottieAnimation({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <section className='landing-inner'>
      {' '}
      <Lottie options={defaultOptions} height={height} width={width} />
    </section>
  )
}