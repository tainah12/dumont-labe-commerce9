import styled from 'styled-components';

export const Container = styled.div`
  max-width: 250px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid #FFD383;
  border-radius: 10px;
  margin: 10px 15px 10px 10px;
  background-color: #111;
  color: #FFF;
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 80%;
  height: 25px;
  border-radius: 10px;
  margin-bottom: 10px;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 5px;
`
