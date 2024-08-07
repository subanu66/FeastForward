import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {

  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/ab2.jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading title='ABOUT US' />
            <div className='items'>
              {homeAbout.map((val,index) => {
                return (
                  <div className='item flexSB'>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                    
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
      <div className='spacer'></div>
    </>
  )
}

export default AboutCard