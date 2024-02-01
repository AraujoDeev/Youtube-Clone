import styled from 'styled-components'

export const PageVideoContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`

export const MainContent = styled.div`
  width: 90%;
  height: 100%;
`

export const VideoContainer = styled.div`
  height: 35vw;
  width: 90%;
  margin: 20px 10px 0 20px;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: fill;
  outline: none;
`

export const DescContainer = styled.div`
  display: flex;
  width: auto;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-top: 14px;
`

export const TitleVideo = styled.h1`
  color: white;
  font-size: 1.5em;
  padding-top: 10px;
`

export const DescProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`

export const SubscribeContainer = styled.div`
  margin-left: 30px;
`

export const Subscribe = styled.button`
  background-color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 16px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #c9c9c9;
  }
`

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid pink;
  width: auto;
  height: 40px;
  border-radius: 22px;
  background-color: rgba(234, 234, 234, 0.13);
`

export const ButtonLike = styled.button`
  display: flex;
  align-items: center;
  border-radius: 22px 0 0 22px;
  background-color: transparent;
  height: 100%;
  width: auto;
  border: none;
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(234, 234, 234, 0.4);
  }
`

export const AmountLikes = styled.p`
  font-size: 15px;
  padding: 10px 10px;
`

export const LineHeight = styled.hr`
  height: 60%;
`

export const NotLike = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  background-color: transparent;
  border-radius: 0 22px 22px 0;
  height: 100%;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(234, 234, 234, 0.4);
  }
`
