import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import WrapperBox from 'components/WrapperBox'

interface Props {
  children?: ReactNode
}

function EmptyLayout({ children }: Props) {
  return (
    <WrapperBox>
      {children}
      <Outlet />
    </WrapperBox>
  )
}

export default EmptyLayout
