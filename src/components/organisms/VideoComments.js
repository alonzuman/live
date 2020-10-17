import React from 'react'
import styled from 'styled-components'
import Comments from '../molecules/Comments'
import TopCommentsSwiper from '../molecules/TopCommentsSwiper'

const topComments = [
  {
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'alon',
    content: 'Qui reprehenderit culpa amet in excepteur velit.',
    upVote: 24,
    downVote: 13,
    replies: [
      {
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        username: 'dannie',
        content: 'Eu proident velit ex aute excepteur nulla.',
        upVote: 13,
        downVote: 3,
      },
      {
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        username: 'Dan',
        content: 'Aliqua do ex aliquip officia ut ut.',
        upVote: 45,
        downVote: 3,
      },
      {
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        username: 'henu',
        content: 'Occaecat duis quis id voluptate sint id culpa mollit..',
        upVote: 44,
        downVote: 30,
      },
      {
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        username: 'henu',
        content: 'Occaecat duis quis id voluptate sint id culpa mollit..',
        upVote: 44,
        downVote: 30,
      },
      {
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        username: 'henu',
        content: 'Occaecat duis quis id voluptate sint id culpa mollit..',
        upVote: 44,
        downVote: 30,
      },
    ]
  },
  {
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'jeremy',
    content: 'Aute cupidatat ipsum sunt aliquip minim cupidatat id veniam consequat consequat ipsum sint minim pariatur..',
    upVote: 13,
    downVote: 5
  },
  {
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'idaue',
    content: 'Officia magna ad culpa commodo officia aliquip..',
    upVote: 56,
    downVote: 4
  },
]

const comments = [
  {
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'alon',
    content: 'Qui reprehenderit culpa amet in excepteur velit.',
    upVote: 24,
    downVote: 13
  },
  {
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'jeremy',
    content: 'Aute cupidatat ipsum sunt aliquip minim cupidatat id veniam consequat consequat ipsum sint minim pariatur..',
    upVote: 13,
    downVote: 5
  },
  {
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'idaue',
    content: 'Officia magna ad culpa commodo officia aliquip..',
    upVote: 56,
    downVote: 4
  },
  {
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'alon',
    content: 'Qui reprehenderit culpa amet in excepteur velit.',
    upVote: 24,
    downVote: 13
  },
  {
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'jeremy',
    content: 'Aute cupidatat ipsum sunt aliquip minim cupidatat id veniam consequat consequat ipsum sint minim pariatur..',
    upVote: 13,
    downVote: 5
  },
  {
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'idaue',
    content: 'Officia magna ad culpa commodo officia aliquip..',
    upVote: 56,
    downVote: 4
  },
]

const Container = styled.div`
  max-height: 400px;
  overflow: scroll;
`

const VideoComments = () => {
  return (
    <Container className='comments__container'>
      <TopCommentsSwiper comments={topComments} />
      <Comments comments={comments} />
    </Container>
  )
}

export default VideoComments
