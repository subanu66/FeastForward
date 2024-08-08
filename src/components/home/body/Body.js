import React from "react";
import { json, Link } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Body.css";

// const user=JSON.parse(localStorage.getItem('user'));
const Body = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <h1>
            <Heading title="TRANSFORMING SURPLUS INTO SUSTENANCE" /></h1>
            <p>
              FeastForward bridges event organizers and NGOs to deliver surplus
              food to those in need. Join us to turn excess into opportunity and
              make a difference in your community.
            </p>

            
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Body;
