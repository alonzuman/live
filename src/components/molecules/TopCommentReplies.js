import React from 'react'
import styled from 'styled-components'
import NestedComment from './NestedComment'

const Container = styled.div`
  overflow-y: scroll;
  max-height: 224px;
`

const CommentStyle = {
  marginBottom: 8
}

const TopCommentReplies = ({ comments }) => {
  return (
    <Container>
      {comments?.map((v, i) => <NestedComment style={CommentStyle} comment={v} key={i} />)}
    </Container>
  )
}

export default TopCommentReplies
