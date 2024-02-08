import styled from 'styled-components';

export const TodoDetailsCard = styled.div`
  background: white;
  border-radius: 30px;
  width: 91%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 220px;
  font-size: 17px;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const TodoBtnsContainer = styled.div`
  width: 30%;
  gap: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const InnerInfoContainer = styled.div`
  display: flex;
  position: relative;
  gap: 10px;
  p {
    white-space: nowrap;
  }
`;

export const Circle = styled.div`
  background: ${(props) => props.datecolor};
  height: 18px;
  width: 18px;
  position: relative;
  border-radius: 50px;
`;

export const DateSpan = styled.span`
  color: ${(props) => props.datecolor};
`;

export const LabelSpan = styled.span`
  color: grey;
`;
export const SVG = styled.svg`
  height: 18px;
  width: 18px;
  position: relative;
  bottom: 1px;
`;

export const FourArrowSVG = styled.svg`
  height: 18px;
  width: 18px;
  position: relative;
  bottom: 1px;
  transform: rotate(45deg);
`;

export const PriorityContainer = styled.div`
  display: flex;
  position: relative;
  gap: 5px;
`;

export const ArrowUpSvg = styled.svg`
  height: 18px;
  width: 18px;
  position: relative;
  bottom: 1px;
`;

export const ProgressBarContainer = styled.div``;
