/*eslint-disable no-unused-vars, indent */


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { userIsAuthenticated, getTokenFromLocalStorage } from '../components/helpers/auth'

import Navbar from './Navbar'
import Comment from './Comment'

const MpShow = () => {
  const [mp, setMp] = useState('')
  const [like, setLike] = useState(0)

  const [comment, setComment] = useState('')

  console.log(mp, setMp)

  const { id } = useParams()



  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/mp/${id}`)
      setMp(response.data)
    }
    getData()
  }, [])

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get('/api/comments', {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      console.log(response)
      setComment(response.data)
    }
    getComments()
  }, [])

  if (!mp) return null
  const { name, image, location, free_school_meals: freeSchoolMeals, coronavirus_face_coverings: coronaFaceCoverings, testing_of_nhs_staff: testingOfNhsStaff, police_crime_sentencing: policeCrimeSentencing, immigration_and_social_security: immigrationAndSocialSecurity, environment_bill: environmentalBill, european_union_withdrawal: europeanUnionWithdrawal, domestic_abuse_bill: domesticAbuseBill, nhs_pay_award: nhsPayAward, the_agriculture_act: theAgriculturalAct, offensive_weapons_report_nc26: offensiveWeaponsReport, windrush, unaccompanied_children: unaccompaniedChildren, trade_bill: tradeBill, financial_assitance_to_industry: financialAssistanceToIndustry, health_protection: healthProtection, brexit_air_quality: brexitAirQuality, combating_violence_against_women: combatingViolenceAgainstWomen, relationships_sex_education: relationshipSexEducation, brexit_rural_economy: brexitRuralEconomy, comments } = mp

  /*
    const partyBorder = document.getElementById('image-border')
  
    if (mp.party[0].id === 1) {
      partyBorder.className += ' tory-border'
    }
  */


  const liked = () => {
    setLike(like + 1)
  }

  return (
    <>
      <Navbar />

    
      <div className="main-container">
        <div className="profile-content">
          
          <div className="profile-img">
            <img id='image-border' src={image} alt="mp" />
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
        <div className="voting-wrapper">
        <div className="voting-section">

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://commonslibrary.parliament.uk/research-briefings/cdp-2020-0114/">
                  Opposition Motion: Free School Meals:
                </a>
              </p>
              <p className="subtitle">
                {freeSchoolMeals}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.legislation.gov.uk/uksi/2020/882/contents/made/">
                  The Health Protection: Coronavirus, Wearing of Face Coverings in a Relevant Place:
                </a>
              </p>
              <p className="subtitle">
                {coronaFaceCoverings}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://hansard.parliament.uk/commons/2020-06-24/debates/5056F5C3-1576-40AE-BFF7-CF84BE599156/TestingOfNHSAndSocialCareStaff">
                Opposition Motion: Testing of NHS and Social Care Staff:
                </a>
              </p>
              <p className="subtitle">
              {testingOfNhsStaff}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.local.gov.uk/parliament/briefings-and-responses/police-crime-sentencing-and-courts-bill-house-commons-second">
                  Police, Crime, Sentencing and Courts Bill: Second Reading:
                </a>
              </p>
              <p className="subtitle">
                {policeCrimeSentencing}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://commonslibrary.parliament.uk/research-briefings/cbp-8706/">
                Immigration and Social Security Co-ordination (EU Withdrawal) Bill: Second Reading:
                </a>
              </p>
              <p className="subtitle">
                {immigrationAndSocialSecurity}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://hansard.parliament.uk/commons/2021-01-26/debates/20CFA026-8E78-4D84-82E4-B4236D826AA4/EnvironmentBill" target='blank'>
                  Environmental Bill Report: Stage: New Clause 1:
                </a>
              </p>
              <p className="subtitle">
                {environmentalBill}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://bills.parliament.uk/bills/1952" target='blank'>
                  European Union (Notification of Wtihdrawal) Bill: Second Reading:
                </a>
              </p>
              <p className="subtitle">
                {europeanUnionWithdrawal}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.theyworkforyou.com/divisions/pw-2020-07-06-73-commons" target='blank'>
                  Domestic Abuse Bill Report Stage: New Clause 23:
                </a>
              </p>
              <p className="subtitle">
                {domesticAbuseBill}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://whatson.parliament.uk/event/cal34272" target='blank'>
                  Ten Minute Rule Motion: NHS Pay Award (Report):
                </a>
              </p>
              <p className="subtitle">
                {nhsPayAward}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.parallelparliament.co.uk/debate/commons/2020-11-04/debates/7B1D81E2-1376-4C88-AA4D-16035978BE99/AgricultureBill" target='blank'>
                  Agriculture Bill: Lords Amendment 16B Motion to disagree:
                </a>
              </p>
              <p className="subtitle">
                {theAgriculturalAct}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.legislation.gov.uk/ukpga/2019/17/contents/enacted/data.htm" target='blank'>
                  Offensive Weapons - Report - NC26:
                </a>
              </p>
              <p className="subtitle">
                {offensiveWeaponsReport}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.whatdotheyknow.com/request/windrush_opposition_day_motion" target='blank'>
                  Opposition Motion: Windrush:
                </a>
              </p>
              <p className="subtitle">
                {windrush}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.theyworkforyou.com/debates/?id=2017-02-23b.1230.0" target='blank'>
                  Unaccompanied Children in Greece and Italy:
                </a>
              </p>
              <p className="subtitle">
                {unaccompaniedChildren}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.parliament.uk/globalassets/documents/impact-assessments/IA17-010.pdf" target='blank'>
                  International Trade and Development Agency Bill:
                </a>
              </p>
              <p className="subtitle">
                {tradeBill}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://publications.parliament.uk/pa/cm200203/cmbills/005/2003005.htm" target='blank'>
                   Financial Assistance to Industry:
                </a>
              </p>
              <p className="subtitle">
               {financialAssistanceToIndustry}
              </p>
            </div>
          </div>
          
          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.legislation.gov.uk/uksi/2020/1374/contents" target='blank'>
                  Health Protection (Coronavirus Restrictions) (All Tiers) (England) Regulations 2020:
                </a>
              </p>
              <p className="subtitle">
                {healthProtection}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.theyworkforyou.com/debates/?id=2019-10-15c.178.5" target='blank'>
                  Exiting the European Union (Air Quality):
                </a>
              </p>
              <p className="subtitle">
                {brexitAirQuality}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://bills.parliament.uk/bills/1954" target='blank'>
                  Preventing and Combating Violence Against Women and Domestic Violence (Ratification of Convention) Bill: Third Reading:
                </a>
              </p>
              <p className="subtitle">
                {combatingViolenceAgainstWomen}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://www.legislation.gov.uk/ukdsi/2019/9780111181997" target='blank'>
                  Draft Relationship Education, Relationships and Sex Education and Health Education (England) Regulations 2019:
                </a>
              </p>
              <p className="subtitle">
                {relationshipSexEducation}
              </p>
            </div>
          </div>

          <div className="card voting-card">
            <div className="card-content">
              <p className="title">
                <a href="https://commonslibrary.parliament.uk/research-briefings/cdp-2017-0018/" target='blank'>
                  Opposition Motion: Effect of the UK leaving the EU on the rural economy:
                </a>
              </p>
              <p className="subtitle">
                {brexitRuralEconomy}
              </p>
            </div>
          </div>
          
          </div>
        
        
        </div>
        {userIsAuthenticated() && (
          <Comment />
          )}

        <h1>Comments:</h1>
        <div className="comments-section">
          {
            comments.map((comment) => (
              <div className=" card" key={comment.owner.id}>
                <div className="card-content"> 
                  <div className="media">
                    <div className="media-left">
                      <img className="image is-48x48"src={comment.owner.photo} alt="user profile image"/>
                    </div>
                    <div className="media-content">
                      <h2 className="title is-4">{comment.owner.username}</h2>
                      <p className="subtitle is-6">{comment.text}</p>
                    </div>
                  </div>
              </div>
               </div>
            ))
          }
        </div>
        
      </div>
      </>
    

  )
}


export default MpShow
