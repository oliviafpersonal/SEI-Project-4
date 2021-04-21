/*eslint-disable no-unused-vars*/


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { userIsAuthenticated } from '../components/helpers/auth'

import Navbar from './Navbar'
import Comment from './Comment'
import { number } from 'prop-types'

const MpShow = () => {
  const [mp, setMp] = useState('')
  const [like, setLike] = useState(0)

  console.log(mp, setMp)

  const { id } = useParams()



  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/mp/${id}`)
      setMp(response.data)
    }
    getData()
  }, [])

  if (!mp) return null
  const { name, image, location, free_school_meals: freeSchoolMeals, coronavirus_face_coverings: coronaFaceCoverings, testing_of_nhs_staff: testingOfNhsStaff, police_crime_sentencing: policeCrimeSentencing, immigration_and_social_security: immigrationAndSocialSecurity, environment_bill: environmentalBill, european_union_withdrawal: europeanUnionWithdrawal, domestic_abuse_bill: domesticAbuseBill, nhs_pay_award: nhsPayAward, the_agriculture_act: theAgriculturalAct, offensive_weapons_report_nc26: offensiveWeaponsReport, windrush, unaccompanied_children: unaccompaniedChildren, trade_bill: tradeBill, financial_assitance_to_industry: financialAssistanceToIndustry, health_protection: healthProtection, brexit_air_quality: brexitAirQuality, combating_violence_against_women: combatingViolenceAgainstWomen, relationships_sex_education: relationshipSexEducation, brexit_rural_economy: brexitRuralEconomy, comments } = mp




  const liked = () => {
    setLike(like + 1)
  }

  return (
    <>
      <Navbar />

      <div className="main-container">
        <div className="profile-content">
          <div className="profile-img">
            <img src={image} alt="mp" />
            <div className="name">
              <h2>Name: {name}</h2>
              <span>Constituency: {location}</span>
              <h4>Party: {mp.party[0].name}</h4>
            </div>
          </div>
        </div>

        <hr className="break" />


        <h1>Voting History:</h1>
        <br />
        <div className="voting-section">

          <div className="voting-history">
            <h4><strong>Opposition Motion: Free School Meals:</strong></h4>
            <p>{freeSchoolMeals}</p>
          </div>
          {userIsAuthenticated() && (
            <>
              <button onClick={liked}>👍🏼</button>
              <p>Likes: {like}</p>
            </>
          )}

          <div className="voting-history">
            <h4><strong>The Health Protection: Coronavirus, Wearing of Face Coverings in a Relevant Place:</strong></h4>
            <p>{coronaFaceCoverings}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Opposition Motion: Testing of NHS and Social Care Staff:</strong></h4>
            <p>{testingOfNhsStaff}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Police, Crime, Sentencing and Courts Bill: Second Reading:</strong></h4>
            <p>{policeCrimeSentencing}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Immigration and Social Security Co-ordination (EU Withdrawal) Bill: Second Reading:</strong></h4>
            <p>{immigrationAndSocialSecurity}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Environmental Bill Report: Stage: New Clause 1:</strong></h4>
            <p>{environmentalBill}</p>
          </div>

          <div className="voting-history">
            <h4><strong>European Union (Notification of Wtihdrawal) Bill: Second Reading:</strong></h4>
            <p>{europeanUnionWithdrawal}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Domestic Abuse Bill Report Stage: New Clause 23:</strong></h4>
            <p>{domesticAbuseBill}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Ten Minute Rule Motion: NHS Pay Award (Report):</strong></h4>
            <p>{nhsPayAward}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Agriculture Bill: Lords Amendment 16B Motion to disagree:</strong></h4>
            <p>{theAgriculturalAct}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Offensive Weapons - Report - NC26:</strong></h4>
            <p>{offensiveWeaponsReport}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Opposition Motion: Windrush:</strong></h4>
            <p>{windrush}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Unaccompanied Children in Greece and Italy:</strong></h4>
            <p>{unaccompaniedChildren}</p>
          </div>

          <div className="voting-history">
            <h4><strong>International Trade and Development Agency Bill:</strong></h4>
            <p>{tradeBill}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Financial Assistance to Industry:</strong></h4>
            <p>{financialAssistanceToIndustry}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Health Protection (Coronavirus Restrictions) (All Tiers) (England) Regulations 2020:</strong></h4>
            <p>{healthProtection}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Exiting the European Union (Air Quality):</strong></h4>
            <p>{brexitAirQuality}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Preventing and Combating Violence Against Women and Domestic Violence (Ratification of Convention) Bill: Third Reading:</strong></h4>
            <p>{combatingViolenceAgainstWomen}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Draft Relationship Education, Relationships and Sex Education and Health Education (England) Regulations 2019:</strong></h4>
            <p>{relationshipSexEducation}</p>
          </div>

          <div className="voting-history">
            <h4><strong>Opposition Motion: Effect of the UK leaving the EU on the rural economy:</strong></h4>
            <p>{brexitRuralEconomy}</p>
          </div>

        </div>
        {/* 
        <h4>Comments:</h4>
        <Comment />
*/}


      </div>

    </>

  )
}


export default MpShow
