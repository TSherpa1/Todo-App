import styled from 'styled-components';

export const CircleSVG = styled.svg`
  position: relative;
  left: 15%;
  top: 10%;
`;

export const CircleBG = styled.circle`
  fill: none;
  stroke: #ddd;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: ${(props) => props.color};
`;

export const ProgressNumber = styled.p`
  position: relative;
  bottom: 29%;
  left: 17%;
  font-size: 15px;
`;
