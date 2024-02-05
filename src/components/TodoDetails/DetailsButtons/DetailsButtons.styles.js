import styled from 'styled-components';

export const DetailsBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const RepeatBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: #0f99ff;
  color: white;
  border-radius: 30px;
  border: none;
  width: 98%;
  height: 30px;
  padding: 25px 0px;
  font-size: 15px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: #ffe0de;
  color: black;
  border-radius: 30px;
  border: none;
  width: 98%;
  height: 30px;
  padding: 25px 0px;
  font-size: 15px;
  position: relative;
  //   right: 2%;
  &:hover {
    cursor: pointer;
  }
`;

export const SVG = styled.svg`
  height: 25px;
  width: 25px;
`;
