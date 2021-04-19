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
  const { name, image, location, free_school_meals: freeSchoolMeals, coronavirus_face_coverings: coronaFaceCoverings, testing_of_NHS_staff: testingOfNhsStaff, police_crime_sentencing: policeCrimeSentencing, immigration_and_social_security: immigrationAndSocialSecurity, environment_bill: environmentalBill, european_union_withdrawal: europeanUnionWithdrawal, domestic_abuse_bill: domesticAbuseBill, nhs_pay_award: nhsPayAward, the_agriculture_act: theAgriculturalAct, offensive_weapons_report_nc26: offensiveWeaponsReport, windrush, unaccompanied_children: unaccompaniedChildren, trade_bill: tradeBill, financial_assitance_to_industry: financialAssistanceToIndustry, health_protection: healthProtection, brexit_air_quality: brexitAirQuality, combating_violence_against_women: combatingViolenceAgainstWomen, relationships_sex_education: relationshipSexEducation, brexit_rural_economy: brexitRuralEconomy } = mp
  return (
    <>
      <Navbar />

      <div className="main-container">
        <div className="profile-content">
          <div className="profile-img">
            <img src={image} alt="mp" />
            <div className="name">
              <h2>{name}</h2>
              <span>{location}</span>
            </div>
          </div>
        </div>

        <hr className="break" />

        <div>
          <h2>Voting History:</h2>
          <div>
            <h4>Opposition Motion: Free School Meals</h4>
            <p>{freeSchoolMeals}</p>
          </div>
        </div>

      </div>



    </>

  )
}


export default MpShow
