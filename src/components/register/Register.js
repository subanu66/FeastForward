
import Back from "../common/back/Back"
import "./register.css"
import Intro from "./section3/Intro"
import ContributeOptions from "./section3/ContributeOptions"
import RegisterThree from "./section3/RegisterThree"
import Faq from "./Faq"

const Register = () => {

  const heading = "Register";
  const description = "Join the FeastForward community by registering as a donor or volunteer. Contribute to reducing food waste and support those in need with ease.";
  const timelineItems = [
    { title: 'How It Work'},
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
      <Intro/>
      <ContributeOptions/>
             <RegisterThree />
      
      
      <Faq />
    </>
  )
}

export default Register