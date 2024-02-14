import styled from 'styled-components';

export const Bar = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 20px;
  background: #f5f5f5;
  margin-bottom: 10px;
`;

export const BarFill = styled.div`
  height: 100%;
  width: ${(props) => `${props.percentage}%`};
  border-radius: 20px;
  background: ${(props) => props.color};
`;

export const Percent = styled.div`
  position: relative;
  left: 91%;
  margin-bottom: 15px;
  color: ${(props) => props.color};
`;

export const Header = styled.h4`
  position: relative;
  top: 25px;
  font-weight: 450;
`;
