import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
`

export const Title = styled.h1`
  font-size: 32px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 8px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid white;
  height: 350px;
  width: 400px;
  padding: 20px;
`

export const Label = styled.label`
  font-size: 18px;
  color: white;
`

export const Input = styled.input`
  width: 70%;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  padding: 12px 12px;
  font-size: 14px;
  outline: none;
  color: white;
`

export const Button = styled.button`
  color: white;
  font-size: 18px;
  padding: 12px 12px;
  background-color: #fe0000;
  border: none;
  border-radius: 8px;
  width: 40%;
  cursor: pointer;
  transition: all 0.2s;
  &:active {
    background-color: #fe000081;
  }
`
