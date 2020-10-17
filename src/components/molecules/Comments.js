import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

const Comments = ({ comments }) => {
  return (
    <Container>
      {comments?.map((v, i) => <Comment key={i} comment={v} />)}
    </Container>
  )
}

export default Comments
