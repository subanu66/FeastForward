// AllNgos.js
import React, { useState, useEffect } from "react";
import "./ngo.css";
import Donate from "./Donate";

const AllNgos = () => {
  const ngoImages = [
    "/images/donation/donate5.webp",
    "/images/donation/donate1.avif",
    "/images/donation/donate3.png",
    "/images/donation/donate2.jpg",
    "/images/donation/donate4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % ngoImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [ngoImages.length]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
    <div className="firsttitle1">
      <h2 className="firsttile">DONATION</h2>
      <h1 className="sectionTitle1">SUPPORT OUR MISSION: EVERY CONTRIBUTION COUNTS</h1>
      

      <section className='online'>
        <div className='containerdo'>
          {/* Left Part with Sliding Images */}
          <div className='leftPart'>
            <div
              className='imageSlidedo'
              style={{ backgroundImage: `url(${ngoImages[currentImage]})` }}
            />
            <div className='sliderTracker'>
              {ngoImages.map((_, index) => (
                <div
                  key={index}
                  className={`bullett ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
          {/* Right Part with Text and Button */}
          <div className='rightPart'>
            <div className='topContent'>
              <p>
                At FeastForward, we are dedicated to making a difference. Your generous donation supports our mission to redistribute surplus food and help those in need. Every contribution has a significant impact on our efforts to combat hunger and promote sustainability.
                Your support allows us to reach more communities and provide nutritious meals to individuals and families. Each donation covers costs like logistics and food safety, ensuring that surplus food reaches those who need it most.
              </p>
            </div>
            <button className='donationBtn' onClick={handleOpenModal}>Donate Now</button>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Donate isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default AllNgos;
