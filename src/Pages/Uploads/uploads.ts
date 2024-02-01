import { FaRegCheckCircle } from 'react-icons/fa'
import { MdOutlineDangerous } from 'react-icons/md'
import styled from 'styled-components'

export const UploadsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
`

export const Form = styled.form`
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 6px;
`

export const Inputs = styled.input`
  padding: 8px 10px;
  border-radius: 4px;
  outline: none;
  width: 60%;
  background-color: black;
  border: 1px solid white;
  color: white;
`

export const InputsFile = styled.input`
  display: none;
`

export const Labels = styled.label`
  border: 1px solid white;
  width: 60%;
  padding: 6px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s ease;
  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`

export const Button = styled.button`
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
  padding: 60px 0;
  align-items: center;
  color: white;
`

export const CheckIcon = styled(FaRegCheckCircle)`
  color: green;
  font-size: 2em;
`

export const ErrorIcon = styled(MdOutlineDangerous)`
  color: red;
  font-size: 2em;
`

export const ActionsButtons = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`

export const Buttons = styled.button`
  font-weight: bold;
  padding: 10px 10px;
  width: 40%;
  background-color: #ff0000;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 0, 0, 0.541);
  }
`
