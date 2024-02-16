import { FaRegCheckCircle } from 'react-icons/fa'
import { MdOutlineDangerous } from 'react-icons/md'

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

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: #0d0e0e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 60px 0;
  align-items: center;
  color: white;
`

export const ActionsButtons = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

export const Buttons = styled.button`
  font-weight: bold;
  padding: 10px 10px;
  width: 40%;
  background-color: #ff0000;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 0, 0, 0.541);
  }
`

export const ButtonModal = styled.button`
  padding: 6px 10px;
  width: 140px;
  background-color: black;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s ease;
  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`

export const CheckIcon = styled(FaRegCheckCircle)`
  color: green;
  font-size: 2em;
`

export const ErrorIcon = styled(MdOutlineDangerous)`
  color: red;
  font-size: 2em;
`
