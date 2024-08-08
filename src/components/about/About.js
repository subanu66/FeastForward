import React from "react";
import Back from "../common/back/Back";
import Mission from "./sections/Mission";
import HowItWorks from "./sections/HowItWorks";
import WhyChooseUs from "./sections/WhyChooseUs";
import Impact from "./sections/Impact";
import MeetTheTeam from "./sections/MeetTheTeam";
import GetInvolved from "./sections/GetInvolved";
import Vision from "./sections/Vision";
import "./about.css"; // Assuming you have a CSS file for styling

const About = () => {
  const heading = "About Us";
  const description = "At FeastForward, we transform surplus food into sustenance. Our platform connects excess food from event organizers and individuals with those in need through NGOs and volunteers, tackling food waste efficiently.";
  const timelineItems = [
    { title: 'Mission' },
    { title: 'How It Works'},
    { title: 'Why Choose Us'},
    { title: 'Impact'},
    { title: 'Meet The Team'},
    { title: 'Get Involved'},
    { title: 'Vision'},
  ];
  return (
    <>
      <div className="about-pagea">
        <Back backgroundImage='/images/bk1.jpg' 
        heading={heading}
        description={description}
        timelineItems={timelineItems}
        />
      </div>
      <Mission />
       <HowItWorks />
      <WhyChooseUs />
      <Impact />
      <MeetTheTeam />
      <GetInvolved />
      <Vision />
    </>
  );
}

export default About; 