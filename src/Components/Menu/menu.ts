import styled from 'styled-components'

export const MenuStyles = styled.div`
  width: 65px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin-top: 60px;
  height: calc(100vh - 60px);

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #121212;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`

export const ButtonIcons = styled.button`
  color: white;
  border: none;
  border-radius: 8px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const SubTitlesButtons = styled.p`
  font-size: 10px;
  font-weight: bold;
`

export const SVGIcon = styled.img`
  width: 30px;
  color: white;
`
