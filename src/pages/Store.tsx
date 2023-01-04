import HelmetComponents from 'components/HelmetComponents'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import axios from 'api'

interface resultProps {
  name: string
  url: string
}

const StyledWrapper = styled.div`
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  display: grid;
  row-gap: 20px;
  column-gap: 20px;
`
const StyledTitle = styled.div`
  font-size: 1.2rem;
  margin: 30px 0px;
  font-weight: bold;
  text-align: center;
`

export default function Store() {
  const [allResults, setallResults] = useState<resultProps[]>()

  useEffect(() => {
    //결과 가져오는 함수

    const getAllResults = async () => {
      try {
        let res = await axios.get('/all-result.json')
        let allData = res.data?.data
        if (allData) {
          setallResults(allData)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAllResults()
  }, [])

  return (
    <>
      <HelmetComponents title=":모든 인형" />
      <div>
        <StyledTitle>가게의 모든 인형</StyledTitle>
        <StyledWrapper>
          {allResults &&
            allResults.map((v) => (
              <NavLink to={v.url} key={v.name}>
                <div>이미지</div>
                <div>{v.name}</div>
              </NavLink>
            ))}
        </StyledWrapper>
      </div>
    </>
  )
}
