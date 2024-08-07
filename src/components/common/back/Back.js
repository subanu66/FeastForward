import React from "react"
import { useLocation } from "react-router-dom"
import "./Back.css"

const Back = ({ backgroundImage, heading, description, timelineItems}) => {
  const location = useLocation()

  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`  , // Update the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust the height as needed
    color: 'white', // Adjust text color as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };
  return (
    <>
      <section className='back' style={sectionStyle}>
      <div className='overlay-contenta'>
          {heading && description && (
            <div className='timeline-section'>
              <div className='left-sidea'>
                <h1>{heading}</h1>
                <p>{description}</p>
              </div>
              <div className='right-sidea'>
                <div className='timeline'>
                  {timelineItems && timelineItems.map((item, index) => (
                    <div key={index} className='timeline-item'>
                      <div className='timeline-content'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          </div>
        {/* <h2>{location.pathname.split("/")[1]}</h2> */}
        {/* <h1>{title}</h1> */}
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back