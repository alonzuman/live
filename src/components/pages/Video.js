import React from 'react';
import styled from 'styled-components';
import VideoComments from '../organisms/VideoComments';
import VideoPlayer from '../organisms/VideoPlayer';

const Container = styled.div`
  display: flex;
  width: 100%;
`

const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 16px;
  `

  const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding-top: 16px;
`


const Video = () => {
  return (
    <Container>
      <VideoSection>
        <VideoPlayer />
      </VideoSection>
      <CommentsSection>
        <VideoComments />
      </CommentsSection>
    </Container>
  )
}

export default Video
