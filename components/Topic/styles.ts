import styled from 'styled-components';

export const TopicHeader = styled.div.attrs({
  className: 'd-flex justify-content-between'
})`
  margin-top: 20px;
`;

export const TopicTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const TopicCaption = styled.div.attrs({
  className: 'd-flex flex-column align-items-end'
})`
  font-size: 12px;
  font-weight: 700;
`;

export const Descrtiption = styled.p`
  margin: 20px 0 40px;
  text-align: justify;
`;
