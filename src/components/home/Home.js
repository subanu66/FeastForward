import React from "react"
import AboutCard from "../about/AboutCard"
import HWork from "./HWork"
import HAbout from "./HAbout"
import Body from "./body/Body"
import Hregister from "./Hregister"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Body />
      <AboutCard />
      <Hregister />
      <HAbout />
      <Testimonal />
      <HWork/>
    </>
  )
}

export default Home