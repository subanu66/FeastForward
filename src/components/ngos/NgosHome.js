import React from "react"
import Back from "../common/back/Back"
import How from "./section2/How"
import NgoBenefits from "./section2/NgoBenefits"
import PartneredNGOs from "./section2/PartneredNGOs"
import NgoRegistration from "./section2/NgoRegistration"
import "./ngo.css"

const NgosHome = () => {
  const heading = "NGOS";
  const description = "Food Bridge links NGOs with surplus food, simplifying the process of receiving and distributing it to those in need. Join us to efficiently manage food resources and make a difference in your community.";
  const timelineItems = [
    { title: 'How It Works'},
    { title: 'Benefits For NGOS'},
    { title: 'Partnered NGOS'},
    { title: 'NGO Registration'},
  ];
  return (
    <>
    <div className="col">
      <Back 
      backgroundGradient='linear-gradient(to right, #C6FFDD, #FFD194)'
      heading={heading}
      description={description}
      timelineItems={timelineItems} />
      <div className="swift"></div>
      <How/>
      <div className="swift"></div>
      <NgoBenefits/>
      <div className="swift"></div>
      <PartneredNGOs/>
      <div className="swift"></div>
      <NgoRegistration/>
      <div className="swift"></div>
      </div>
    </>
  )
}

export default NgosHome