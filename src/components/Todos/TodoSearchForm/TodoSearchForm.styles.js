import styled from 'styled-components';

export const SearchForm = styled.div`
  width: 100%;
  position: relative;
`;

export const SearchFormInput = styled.input`
  border-radius: 30px;
  border: 1px solid lightgray;
  width: 89%;
  height: 40px;
  padding: 10px 0px 10px 48px;
  font-size: 15px;
`;

export const SearchIcon = styled.svg`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 18px;
  left: 19px;
`;

export const ArrowIcon = styled.svg`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 13px;
  right: 12px;
  background: #deecf6;
  border-radius: 50px;
  padding: 5px;
`;
