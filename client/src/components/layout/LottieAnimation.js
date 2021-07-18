import React from 'react'
import LottieAnimation from './Lottie'
import home from '../../Animation/63921-developer.json'
import Landing from './Landing'

const Example = () => {
  return (
    <section>
      <LottieAnimation lotti={home} height={650} width={640} />

      <div class='mouse_scroll'>
        <div class='mouse'>
          <div class='wheel'></div>
          {/* <h3>Scroll down</h3> */}
        </div>

        <div>
          <span class='m_scroll_arrows unu'></span>
          <span class='m_scroll_arrows doi'></span>
          <span class='m_scroll_arrows trei'></span>
        </div>
      </div>
      <Landing />
    </section>
  )
}

export default Example
