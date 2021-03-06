import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('')
  return (
    <div class='post-form'>
      <div class='large'>&#128527; Say Something...</div>
      <form
        class='form mg-1'
        onSubmit={(e) => {
          e.preventDefault()
          addPost({ text })
          setText('')
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' class='btn btn-success mg-1' value='Submit' />
      </form>
    </div>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(PostForm)
