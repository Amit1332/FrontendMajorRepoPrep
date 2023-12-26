import React, { useEffect } from 'react'
import Banner from './Banner'
import Title from './Title'
import PastTest from './PastTest'
import TopicWise from './TopicWise'
import CompanyWise from './CompanyWise'
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../../../store/actions'
const MockTest = () => {
  const dispatch =useDispatch()
  const data = useSelector((state)=>state.data.test)

useEffect(() => {
  dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/test`,"test"))
}, [])

console.log(data);
  return (
    <div className='container study-mat'>
      <div className="mock-test">
        <Banner/>
        <div className="test-cards">
          <Title  title1="Featured Mock Tests" title2="PAST MOCK TESTS"/>
          <PastTest data= {data}/>
          <Title  title1="Practice Tests" title2="TOPIC WISE"/>
          <TopicWise data={data}/>
          <Title   title2="COMPANY WISE"/>
          <CompanyWise data={data}/>
        </div>
      </div>

    </div>
  )
}

export default MockTest