import React, { Fragment } from 'react'
import spinner from './spinner.gif'

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '100%',
        margin: 'auto',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
      alt='Loading...'
    />
  </Fragment>
)
