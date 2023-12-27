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
  const {isLoading,test} = useSelector((state)=>state.data)

useEffect(() => {
  dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/test`,"test"))
}, [])


  return (
    <div className='container study-mat'>
      <div className="mock-test">
        <Banner/>
        <div className="test-cards">
          <Title  title1="Featured Mock Tests" title2="PAST MOCK TESTS"/>
          <PastTest data= {test} isLoading={isLoading}/>
          <Title  title1="Practice Tests" title2="TOPIC WISE"/>
          <TopicWise data={test} isLoading={isLoading}/>
          <Title   title2="COMPANY WISE"/>
          <CompanyWise data={test} isLoading={isLoading}/>
        </div>
      </div>

    </div>
  )
}

export default MockTest