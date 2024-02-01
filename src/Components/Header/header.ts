import styled from 'styled-components'

export const HeaderStyle = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  position: fixed;
  background-color: #1a1c1d;
  @media screen and (max-width: 425px) {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const Logo = styled.div`
  width: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  @media screen and (max-width: 425px) {
    width: 25%;
  }
`

export const ImgLogo = styled.img`
  width: 90px;
  cursor: pointer;
  margin-left: 20px;
  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }
`

export const MenuBurguer = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    margin-left: 12px;
  }
`

export const Seacrh = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    width: -webkit-fill-available;
    margin-left: 20px;
  }
`

export const SeacrhInput = styled.input`
  border-radius: 18px;
  padding: 8px 20px;
  width: 70%;
  background-color: transparent;
  outline: none;
  border: 1px solid #2a2a2a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonSearch = styled.button`
  float: left;
  position: relative;
  left: -61px;
  border-radius: 0 18px 18px 0;
  width: 60px;
  border: none;
  padding: 3px 0;
  cursor: pointer;
  background-color: #222222;
  color: #d7d7d7;
  @media screen and (max-width: 425px) {
    width: 32px;
    left: -33px;
  }
`

export const Profile = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 425px) {
    display: none;
  }
`

export const ButtonIcon = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 80%;
`
