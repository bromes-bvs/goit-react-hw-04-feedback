import styled from 'styled-components';

const StyledButton = styled.button`
  height: 35px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 6px;
  padding: 8px 15px;
  font-size: 16px;
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;
  :active {
    background-color: #235ad1;
    border-color: #4871c9;
    color: #fff;
  }
`;

export default StyledButton;
