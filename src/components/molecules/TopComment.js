import React, { useState } from 'react'
import styled from 'styled-components'
import Avatar from '../atoms/Avatar'
import Chip from '../atoms/Chip'
import Typography from '../atoms/Typography'
import TopCommentActions from './TopCommentActions'

const Container = styled.div`
  width: 100%;
  padding: 12px;
  background-color: #202020;
  border-radius: 24px;
  cursor: pointer;
  max-height: 400px;
`

const CommentBody = styled.div`
  display: flex;
`

const CommentHeader = styled.div`
  display: flex;
  margin-bottom: 8px;
`

const CommentAvatarAndVotes = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`

const CommentText = styled.div`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  margin-bottom: 8px;
`

const CommentActions = styled.div`
`

const TopComment = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = e => {
    setIsOpen(!isOpen)
  }

  return (
    <Container onClick={handleClick}>
      <CommentHeader>
        <Chip size='small'>Top Comment</Chip>
      </CommentHeader>
      <CommentBody>
        <CommentAvatarAndVotes>
          <Avatar src={comment.avatar} size='small' />
        </CommentAvatarAndVotes>
        <CommentText>
          <Typography variant='subtitle1'>{comment.username}</Typography>
          <Typography variant='body1'>{comment.content}</Typography>
        </CommentText>
      </CommentBody>
      <CommentActions>
        <TopCommentActions comment={comment} isOpen={isOpen} />
      </CommentActions>
    </Container>
  )
}

export default TopComment
