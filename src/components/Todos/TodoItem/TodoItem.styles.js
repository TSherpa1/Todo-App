import styled from 'styled-components';

export const TodoCard = styled.div`
  background: ${(props) => props.clicked};
  border-radius: 30px;
  width: 91%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 150px;
  font-size: 15px;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

export const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const TodoBtnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;

export const TagsContainer = styled.ul`
  display: ${(props) => (props.tagslength === 0 ? 'none' : 'flex')};
  gap: 15px;
`;

export const InnerInfoContainer = styled.div`
  display: flex;
  position: relative;
  gap: 8px;
  p {
    white-space: nowrap;
  }
`;

export const Circle = styled.div`
  // background: #e2ecf6;
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

export const Tag = styled.li`
  background: #e2ecf6;
  padding: 8px;
  border-radius: 20px;
  font-size: 13px;
`;

export const EditCompleteTodoSVG = styled.svg`
  height: 20px;
  width: 20px;
  background: #e2ecf6;
  padding: 8px;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const LeftContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: spce-between;
  align-items: center;
  position: relative;
  left: 20px;
`;
