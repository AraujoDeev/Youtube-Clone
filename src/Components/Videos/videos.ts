import styled from 'styled-components'

export const SectionVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  width: 100%;
  margin-top: 50px;
  margin-left: 20px;
  height: 100%;
  padding: 10px 20px;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const VideoContainer = styled.div`
  height: auto;
  width: auto;
  cursor: pointer;
`

export const ThumbnailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`

export const DescVideos = styled.div`
  width: 100%;
  height: 40%;
  padding: 10px 10px;
`

export const TitleVideo = styled.h2`
  color: white;
  font-size: 20px;
  padding-bottom: 5px;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
`

export const Views = styled.p`
  color: white;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`
