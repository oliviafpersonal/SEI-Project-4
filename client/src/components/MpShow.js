/*eslint-disable no-unused-vars*/


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Navbar from './Navbar'

const MpShow = () => {
  const [mp, setMp] = useState('')
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
  const { name, image, location, free_school_meals: freeSchoolMeals, coronavirus_face_coverings: coronaFaceCoverings, testing_of_nhs_staff: testingOfNhsStaff, police_crime_sentencing: policeCrimeSentencing, immigration_and_social_security: immigrationAndSocialSecurity, environment_bill: environmentalBill, european_union_withdrawal: europeanUnionWithdrawal, domestic_abuse_bill: domesticAbuseBill, nhs_pay_award: nhsPayAward, the_agriculture_act: theAgriculturalAct, offensive_weapons_report_nc26: offensiveWeaponsReport, windrush, unaccompanied_children: unaccompaniedChildren, trade_bill: tradeBill, financial_assitance_to_industry: financialAssistanceToIndustry, health_protection: healthProtection, brexit_air_quality: brexitAirQuality, combating_violence_against_women: combatingViolenceAgainstWomen, relationships_sex_education: relationshipSexEducation, brexit_rural_economy: brexitRuralEconomy } = mp


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


        <h2>Voting History:</h2>
        <br />
        <div className="voting-section">

          <div className="voting-history">
            <h4>Opposition Motion: Free School Meals</h4>
            <p>{freeSchoolMeals}</p>
          </div>

          <div className="voting-history">
            <h4>The Health Protection: Coronavirus, Wearing of Face Coverings in a Relevant Place</h4>
            <p>{coronaFaceCoverings}</p>
          </div>

          <div className="voting-history">
            <h4>Opposition Motion: Testing of NHS and Social Care Staff</h4>
            <p>{testingOfNhsStaff}</p>
          </div>

          <div className="voting-history">
            <h4>Police, Crime, Sentencing and Courts Bill: Second Reading</h4>
            <p>{policeCrimeSentencing}</p>
          </div>

          <div className="voting-history">
            <h4>Immigration and Social Security Co-ordination (EU Withdrawal) Bill: Second Reading</h4>
            <p>{immigrationAndSocialSecurity}</p>
          </div>

          <div className="voting-history">
            <h4>Environmental Bill Report: Stage: New Clause 1</h4>
            <p>{environmentalBill}</p>
          </div>

          <div className="voting-history">
            <h4>European Union (Notification of Wtihdrawal) Bill: Second Reading</h4>
            <p>{europeanUnionWithdrawal}</p>
          </div>

          <div className="voting-history">
            <h4>Domestic Abuse Bill Report Stage: New Clause 23</h4>
            <p>{domesticAbuseBill}</p>
          </div>

          <div className="voting-history">
            <h4>Ten Minute Rule Motion: NHS Pay Award (Report)</h4>
            <p>{nhsPayAward}</p>
          </div>

          <div className="voting-history">
            <h4>Agriculture Bill: Lords Amendment 16B Motion to disagree</h4>
            <p>{theAgriculturalAct}</p>
          </div>

          <div className="voting-history">
            <h4>Offensive Weapons - Report - NC26</h4>
            <p>{offensiveWeaponsReport}</p>
          </div>

          <div className="voting-history">
            <h4>Opposition Motion: Windrush</h4>
            <p>{windrush}</p>
          </div>

          <div className="voting-history">
            <h4>Unaccompanied Children in Greece and Italy</h4>
            <p>{unaccompaniedChildren}</p>
          </div>

          <div className="voting-history">
            <h4>International Trade and Development Agency Bill</h4>
            <p>{tradeBill}</p>
          </div>

          <div className="voting-history">
            <h4>Financial Assistance to Industry</h4>
            <p>{financialAssistanceToIndustry}</p>
          </div>

          <div className="voting-history">
            <h4>Health Protection (Coronavirus Restrictions) (All Tiers) (England) Regulations 2020</h4>
            <p>{healthProtection}</p>
          </div>

          <div className="voting-history">
            <h4>Exiting the European Union (Air Quality)</h4>
            <p>{brexitAirQuality}</p>
          </div>

          <div className="voting-history">
            <h4>Preventing and Combating Violence Against Women and Domestic Violence (Ratification of Convention) Bill: Third Reading</h4>
            <p>{combatingViolenceAgainstWomen}</p>
          </div>

          <div className="voting-history">
            <h4>Draft Relationship Education, Relationships and Sex Education and Health Education (England) Regulations 2019</h4>
            <p>{relationshipSexEducation}</p>
          </div>

          <div className="voting-history">
            <h4>Opposition Motion: Effect of the UK leaving the EU on the rural economy</h4>
            <p>{brexitRuralEconomy}</p>
          </div>

        </div>
        {/* 
        <h4>Comments:</h4>

        <div>
          <p>{mp.comments[0].text}</p>
          <p>{mp.comments[0].owner.username}</p>
        </div>
        */}

      </div>



    </>

  )
}


export default MpShow
