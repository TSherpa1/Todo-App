import styled from 'styled-components';

export const TodoCard = styled.div`
  background: ${(props) => (props.iscomplete === 'true' ? '#e2ecf6' : 'white')};
  border-radius: 30px;
  width: 91%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 150px;
  font-size: 15px;
`;

export const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const TodoBtnsContainer = styled.div`
  width: 30%;
  gap: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const TagsContainer = styled.ul`
  display: flex;
  gap: 15px;
`;

export const InnerInfoContainer = styled.div`
  display: flex;
  position: relative;
  gap: 8px;
  span {
    color: gray;
  }
`;

export const Circle = styled.div`
  background: #e7f5ff;
  height: 18px;
  width: 18px;
  position: relative;
  border-radius: 50px;
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
  background: #e7f5ff;
  padding: 8px;
  border-radius: 20px;
  font-size: 13px;
`;

export const EditCompleteTodoSVG = styled.svg`
  height: 15px;
  width: 15px;
  background: #e7f5ff;
  padding: 8px;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`;
