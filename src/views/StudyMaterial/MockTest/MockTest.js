import React from 'react'
import Banner from './Banner'
import Title from './Title'
import PastTest from './PastTest'
import TopicWise from './TopicWise'
import CompanyWise from './CompanyWise'
const MockTest = () => {
  return (
    <div className='container study-mat'>
      <div className="mock-test">
        <Banner/>
        <div className="test-cards">
          <Title  title1="Featured Mock Tests" title2="PAST MOCK TESTS"/>
          <PastTest/>
          <Title  title1="Practice Tests" title2="TOPIC WISE"/>
          <TopicWise/>
          <Title   title2="COMPANY WISE"/>
          <CompanyWise/>
        </div>
      </div>

    </div>
  )
}

export default MockTest