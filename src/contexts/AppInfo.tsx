import { createContext } from 'react'

const initialState = {
  appName: '마법의 인형가게',
}

const AppInfo = createContext(initialState)
export { AppInfo }
