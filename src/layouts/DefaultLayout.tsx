import { ReactNode } from 'react'
import WrapperBox from 'components/WrapperBox'
import Header from 'components/Header'
import Drawer from 'components/Drawer'
import { DrawerContext } from 'contexts/DrawerContext'
import { Outlet } from 'react-router-dom'

interface Props {
  children?: ReactNode
}
const DetaultLayout = ({ children }: Props) => {
  return (
    <>
      <DrawerContext>
        <WrapperBox>
          <Header />
          <Drawer />
          {children}
          <Outlet />
        </WrapperBox>
      </DrawerContext>
    </>
  )
}

export default DetaultLayout
