import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('')
  return (
    <div class='post-form'>
      <div class='bg-primary pd'>
        <h3>Leave a Comment</h3>
      </div>
      <form
        class='form mg-1'
        onSubmit={(e) => {
          e.preventDefault()
          addComment(postId, { text })
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

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm)
