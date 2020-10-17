import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TopComment from './TopComment';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const Container = styled.div`
  overflow-x: hidden;
  position: sticky;
  top: 0;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4724264705882353) 22%, rgba(0,0,0,1) 100%);
`

const TopCommentsSwiper = ({ comments }) => {
  const options = {
    spaceBetween: 8,
    slidesPerView: 1.2,
  }

  const slideStyle = {
    width: '100%',
    height: '100%',
  }

  return (
    <Container>
      <Swiper {...options}>
        {comments?.map((v, i) => <SwiperSlide style={slideStyle} key={i}><TopComment comment={v} /></SwiperSlide>)}
      </Swiper>
    </Container>
  )
}

export default TopCommentsSwiper
