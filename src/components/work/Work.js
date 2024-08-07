import React from "react"
import Back from "../common/back/Back"
import WorkCard from "./WorkCard"
import "./work.css"

const Work = () => {
  return (
    <>
      <Back backgroundImage='/images/bk1.jpg' />
      <section className='blog padding'>
        <div className='container grid2'>
          <WorkCard />
        </div>
      </section>
    </>
  )
}

export default Work