import React from 'react';
import styled from 'styled-components';
import Typography from '../atoms/Typography';

const VideoDescription = styled.div`
  padding: 16px;
`

const VideoWrapper = styled.div`
  height: 400px;
  width: 100%;
`

const Video = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const VideoPlayer = () => {
  return (
    <>
      <VideoWrapper>
        <Video src='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80' />
      </VideoWrapper>
      <VideoDescription>
        <Typography variant='h1'>Title of the video</Typography>
        <Typography variant='h3'>42 watching now • Started streaming 90 minutes ago</Typography>
      </VideoDescription>
    </>
  )
}

export default VideoPlayer
