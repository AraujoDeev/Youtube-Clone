import { FaFacebook } from 'react-icons/fa'
import { AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai'

import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 60px);
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  border: 1px solid #343737;
  height: 440px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const Label = styled.label`
  font-size: 12px;
  color: #fff;
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #4e5152;
  outline: none;
  color: #fff;
  font-size: 14px;
  padding: 8px 0;
  opacity: 0.5;
`

export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 70px;
  border-radius: 8px;
  border: 1px solid black;
  font-size: 18px;
  background: linear-gradient(red, darkRed);
  color: white;
  cursor: pointer;
  &:active {
    background: linear-gradient(rgb(194, 0, 0), rgb(78, 0, 0));
  }
`

export const Paragraph = styled.p`
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1.5px;
`

export const Medias = styled.div`
  height: 50px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  font-size: 18px;
`

export const FacebookIcon = styled(FaFacebook)`
  color: #43588d;
  font-size: 32px;
  cursor: pointer;
`

export const GoogleIcon = styled(AiFillGoogleCircle)`
  color: #d65342;
  font-size: 32px;
  cursor: pointer;
`

export const TwitterIcon = styled(AiFillTwitterCircle)`
  color: #539edf;
  font-size: 32px;
  cursor: pointer;
`
