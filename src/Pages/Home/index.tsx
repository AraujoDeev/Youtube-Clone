import React from 'react'
import Videos from '../../Components/Videos'
import { MainPage } from './home'
import Templates from '../../Components/Templates'

const Home: React.FC = () => {
  return (
    <>
      <Templates>
        <MainPage>
          <Videos />
        </MainPage>
      </Templates>
    </>
  )
}

export default Home
