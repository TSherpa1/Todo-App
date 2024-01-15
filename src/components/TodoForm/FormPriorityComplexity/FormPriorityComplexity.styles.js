import styled from 'styled-components';

export const PriorityComplexityContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 100%;
`;

export const PriorityComplexityLabel = styled.label`
  font-size: 19px;
  margin-bottom: 15px;
`;

export const RadioBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
