const { default: styled } = require("styled-components");

const Chip = styled.span`
  border-radius: 24px;
  width: fit-content;
  border: 1px solid pink;
  color: pink;
  font-size: 12px;
  font-weight: 600;
  padding: ${p => p.size === 'small' ? '2px 8px' : '4px 8px'};
`

export default Chip;
