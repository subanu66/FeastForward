import React from "react"
import Heading from "../../common/heading/Heading"
import "./style.css"

const testimonals = [
  { id: 1, name: "Adithya", city: "Coimbatore", testimonial: "Volunteering with FeastForward has been a truly rewarding experience. The opportunity to contribute to such a meaningful cause and see the direct impact of our efforts on the community has been incredible. It’s not just about redistributing food; it’s about bringing hope and support to those who need it most.", imgSrc: "/images/testo/test1.png" },
  { id: 2, name: "Arjun", city: "Chennai", testimonial: "I love being able to give back to my community through FeastForward. The sense of fulfillment I get from knowing that I am helping to reduce food waste while providing for those in need is unmatched. This initiative has shown me the power of collective action and the importance of every contribution.", imgSrc: "/images/testo/test2.png" },
  { id: 3, name: "Harry", city: "Bangalore", testimonial: "FeastForward has allowed me to make a real impact in my city. Being part of a team that is so dedicated to helping others has been inspiring. I’ve seen firsthand how our efforts are making a difference, and it motivates me to keep giving my best to this cause. It’s a privilege to be part of something so impactful.", imgSrc: "/images/testo/test3.jpg" }
];

const Testimonal = () => {
  return (
    <section className='testimonal padding'>
      <div className='container'>
        <h2 className="heading1">TESTIMONIAL</h2> 
        <h1 className="heading2">Our Dedicated Volunteers</h1>
        <div className='testimonal-wrapper'>
          {testimonals.map((item) => (
            <div className='testimonal-card' key={item.id}>
              <div className='top-section'>
                <div className='profile-pic'>
                  <img src={item.imgSrc} alt={item.name} />
                </div>
                <div className='volunteer-info'>
                  <h3>{item.name}</h3>
                  <p>{item.city}</p>
                </div>
              </div>
              <div className='bottom-section'>
                <p>{item.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonal
