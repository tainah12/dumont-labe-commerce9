import styled from 'styled-components';

export const Container = styled.div`
  max-width: 250px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid  #d49010;
  border-radius: 10px;
  margin: 10px 15px 10px 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const H2 = styled.h2`
  color: #FFF;
  font-size: 28px;
  letter-spacing: 2px;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`
export const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #FFD383;
  letter-spacing: 1px;
`
export const Input = styled.input`
  width: 90%;
  height: 35px;
  border-radius: 20px;
  margin-bottom: 10px;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 5px;
  border: none;
`
