import { ReactNode, FC } from 'react'
import Header from '../Header'
import Menu from '../Menu'
import { Main } from './template'

interface TemplatesProps {
  children: ReactNode
}

const Templates: FC<TemplatesProps> = ({ children }) => {
  return (
    <>
      <div className="app">
        <Header />
      </div>
      <Main>
        <Menu />
        {children}
      </Main>
    </>
  )
}

export default Templates
