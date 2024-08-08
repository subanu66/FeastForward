import React from "react"
import Back from "../common/back/Back"
import How from "./section2/How"
import NgoBenefits from "./section2/NgoBenefits"
import PartneredNGOs from "./section2/PartneredNGOs"
import NgoRegistration from "./section2/NgoRegistration"
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
      <Back backgroundImage='/images/bk1.jpg'
      heading={heading}
      description={description}
      timelineItems={timelineItems} />
      <How/>
      <NgoBenefits/>
      <PartneredNGOs/>
      <NgoRegistration/>
    </>
  )
}

export default NgosHome