const { default: styled } = require("styled-components");

const Avatar = styled.img`
  width: ${p => p.size === 'small' ? '24px' : 'medium' ? '68px' : 'large' ? '96px' : '24px'};
  height: ${p => p.size === 'small' ? '24px' : 'medium' ? '68px' : 'large' ? '96px' : '24px'};
  border-radius: 50%;
  object-fit: cover;
`
export default Avatar;
