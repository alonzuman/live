import React, { useState } from 'react'
import styled from 'styled-components'
import RepeatIcon from '@material-ui/icons/Repeat';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '../atoms/Typography';
import { IconButton } from '@material-ui/core';
import TopCommentReplies from './TopCommentReplies';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MetersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const MeterContainer = styled.div`
  display: flex;
  align-items: center;
`

const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconStyle = {
  color: 'white',
  fontSize: 16,
  fontWeight: 500
}

const TopCommentActions = ({ comment, isOpen }) => {
  return (
    <Container>
      <MetersContainer>
        <MeterContainer>
          <Typography variant='body2'>{comment?.replies?.length || 0}</Typography>
          <IconButton>
            <RepeatIcon style={IconStyle} />
          </IconButton>
        </MeterContainer>
        <MeterContainer>
          <Typography variant='body2'>{comment?.upVote}</Typography>
          <IconButton>
            <ThumbUpIcon style={IconStyle} />
          </IconButton>
        </MeterContainer>
        <MeterContainer>
          <Typography variant='body2'>{comment?.downVote}</Typography>
          <IconButton>
            <ThumbDownIcon style={IconStyle} />
          </IconButton>
        </MeterContainer>
      </MetersContainer>
      <ShowMoreContainer>
        <IconButton size='small'>
          <ExpandMoreIcon style={IconStyle} />
        </IconButton>
      </ShowMoreContainer>
      {isOpen && <TopCommentReplies comments={comment?.replies} />}
    </Container>
  )
}

export default TopCommentActions
