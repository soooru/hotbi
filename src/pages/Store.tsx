import HelmetComponents from 'components/HelmetComponents'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import axios from 'api'
import ProfileImage from 'components/ProfileImage'

interface resultProps {
  name: string
  url: string
  img: string
}

const StyledWrapper = styled.div`
  padding: 10px 20px;
  grid-template-columns: 1fr 1fr;
  display: grid;
  row-gap: 20px;
  column-gap: 20px;
  text-align: center;
  @media screen and (max-width: 500px) {
    padding: 10px 40px;
    grid-template-columns: 1fr;
  }
  img {
    max-width: 90%;
  }
  .img-holder {
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: inset -1em -0.5em 1px rgba(205, 228, 248, 0.4);
    border: 7px solid aliceblue;
    padding: 10px;
  }
  .name {
    margin-bottom: 20px;
    font-size: 0.9rem;
    padding: 20px 3px 13px;
    margin-top: -30px;
    border-radius: 80px 80px 5px 5px;
    color: #ffff;
    border-bottom: 7px solid #076565;
    background: #379393;
  }
`
const StyledTitle = styled.div`
  font-size: 1.4rem;
  margin: 50px 0px;
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
        <StyledTitle>🧸 가게의 모든 인형 🧸</StyledTitle>
        <StyledWrapper>
          {allResults &&
            allResults.map((v) => (
              <NavLink to={v.url} key={v.name}>
                <div>
                  <div className="img-holder">
                    <ProfileImage mbti={v.img} />
                  </div>
                  <div className="name">{v.name}</div>
                </div>
              </NavLink>
            ))}
        </StyledWrapper>
      </div>
    </>
  )
}
