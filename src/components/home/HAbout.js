
import React, { useState, useEffect } from "react";
import AllNgos from "../ngos/AllNgos"
import { Link } from "react-router-dom";
import Heading from "../common/heading/Heading"
import "../ngos/ngo.css"
// import { coursesCard } from "../../dummydata"

const HAbout = () => {
  const ngoImages = [
    "/images/ngosimages/ngo01.png",
    "/images/ngosimages/ngo1.jpg",
    "/images/ngosimages/ngo2.jpg",
    "/images/ngosimages/ngo3.jpg",
    "/images/ngosimages/ngo4.jpeg",
    "/images/ngosimages/ngo5.jpg"
  ];
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(prevImage => (prevImage + 1) % ngoImages.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, [ngoImages.length]);
  
  return (
    <>  
      <section className="aboutSection">
        <h2>NGOS</h2>
      <h1 className="sectionTitle">
        PARTNERED NGOS: STRENGTHENING IMPACT
        </h1>
  
        <div className="containerWrapper">
          <div className="leftContainer">
            <p>
            At FeastForward, our partnerships with NGOs are essential for redistributing surplus food to those in need. NGOs gain access to a steady flow of donations from event organizers and individuals, which helps them serve their communities more effectively. Our platform streamlines logistics, making it easier for NGOs to coordinate pickups, track donations, and manage volunteers. By maximizing their impact, we turn surplus food into a vital resource, supporting and strengthening communities. Together, we’re making a real difference in the fight against hunger, creating a more sustainable future for all.


            </p>
            <Link to="/ngos1">
              <button  className="exploreBtn">Explore</button>
            </Link>
          </div>
          <div className="rightContainer">
            <div
              className="imageSlide"
              style={{ backgroundImage: `url(${ngoImages[currentImage]})` }}
            />
             <div className="sliderTracker1">
              {ngoImages.map((_, index) => (
                <div
                  key={index}
                  className={`bullet ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className='spacer2'></div>
      <AllNgos/>
    </>
  )
}

export default HAbout