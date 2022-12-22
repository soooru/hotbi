import { useContext } from 'react'
import { CounterContext } from 'contexts/DrawerContext'

function useCounterState() {
  const value = useContext(CounterContext)
  if (value === undefined) {
    throw new Error('undefined value')
  }
  return value
}

export default useCounterState
