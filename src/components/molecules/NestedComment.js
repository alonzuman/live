import React from 'react'
import styled from 'styled-components'
import Avatar from '../atoms/Avatar'
import Typography from '../atoms/Typography'

const Container = styled.div`
  display: flex;
`

const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
`

const CommentAvatar = styled.div`
  margin-right: 8px;
`

const NestedComment = ({ comment, style }) => {
  return (
    <Container style={style}>
      <CommentAvatar>
        <Avatar size='small' src={comment?.avatar} />
      </CommentAvatar>
      <CommentBody>
        <Typography variant='subtitle1'>{comment?.username}</Typography>
        <Typography variant='body1'>{comment?.content}</Typography>
      </CommentBody>
    </Container>
  )
}

export default NestedComment
