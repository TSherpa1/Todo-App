import styled from 'styled-components';

export const PriorityComplexityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PriorityComplexityLabel = styled.label`
  font-size: 20px;
  margin-bottom: 15px;
  // margin-left: 10px;
  // position: relative;
  // right: 10%;
`;

export const RadioBtnContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const RadioBtnInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50px;
  background-color: #deecf6;
  &:hover {
    background-color: #0f99ff;
    cursor: pointer;
  }
`;
