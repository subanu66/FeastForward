import React, { useState } from "react";
import "../work/work.css";
import { blog } from "../../dummydata";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Arrow icons

const HWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? blog.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === blog.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <section className="blog">
        <div className="container">
          <h2 className="heading1">OUR BLOG</h2>
          <h1 className="heading2">RECENT FROM OUR BLOG</h1>

          <div className="blogSlider">
            <div className="arrow left-arrow" onClick={handlePrev}>
              <FaChevronLeft />
            </div>

            <div className="blogWrapper">
              <div className="blogCards" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {blog.map((item, index) => (
                  <div className="blogCard" key={index}>
                    <div className="blogImage">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="blogText">
                      <span>{item.category}</span>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      {item.additionalInfo && (
                        <>
                          <p><strong>Date:</strong> {item.additionalInfo.date}</p>
                          {item.additionalInfo.volunteerName && (
                            <p><strong>Volunteer Name:</strong> {item.additionalInfo.volunteerName}</p>
                          )}
                          {item.additionalInfo.impact && (
                            <p><strong>Impact:</strong> {item.additionalInfo.impact}</p>
                          )}
                          {item.additionalInfo.partners && (
                            <p><strong>Partners:</strong> {item.additionalInfo.partners}</p>
                          )}
                          <p><strong>Call to Action:</strong> {item.additionalInfo.callToAction}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="arrow right-arrow" onClick={handleNext}>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HWork;
