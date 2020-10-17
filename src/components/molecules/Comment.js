import React from 'react'
import styled from 'styled-components'
import Avatar from '../atoms/Avatar'
import Typography from '../atoms/Typography'

const Container = styled.div`
  display: flex;
  background-color: #202020;
  border-radius: 16px;
  padding: 8px;
  margin: 8px 0;
`

const CommentBody = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`

const Comment = ({ comment }) => {
  return (
    <Container>
      <Avatar size='small' src={comment.avatar} />
      <CommentBody>
        <Typography variant='subtitle1'>{comment.username}</Typography>
        <Typography variant='body2'>{comment.content}</Typography>
      </CommentBody>
    </Container>
  )
}

export default Comment
