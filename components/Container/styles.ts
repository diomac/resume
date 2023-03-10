import styled from 'styled-components';

export const StyledContainer = styled.div.attrs({
  className: 'container'
})``;

export const Section = styled.div.attrs({
  className: ''
})`
  border-top: 2px solid #000;
  width: 100%;
  position: relative;
  padding-top: 20px;
  text-align: left;

  &:after {
    content: "";
    border-top: 4px solid #000;
    width: 100%;
    position: absolute;
    top: 2px;
    left: 0;
  }
`;
