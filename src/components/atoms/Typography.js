import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: white;
  margin: .25rem 0;
  `

  const H3 = styled.h3`
  color: #bababa;
  margin: .25rem 0;
  font-weight: 500;
`

const P = styled.p`
  overflow-wrap: break-word;
  font-size: 1rem;
  color: white;
`

const Subtitle1 = styled.p`
  color: #bababa;
  font-weight: 600;
  margin-bottom: .25rem;
  font-size: 1rem;
`


const Typography = ({ variant, style, className, children }) => {
  switch (variant) {
    case 'h1': return <H1>{children}</H1>;
    case 'h3': return <H3>{children}</H3>;
    case 'body1': return <P>{children}</P>;
    case 'subtitle1': return <Subtitle1>{children}</Subtitle1>;
    default: return <P>{children}</P>;
  }
}

export default Typography
