import React , { useState } from 'react';

const MeetTheTeam = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardStyle = {
    display: 'flex',
    borderRadius: '10px',
    overflow: 'hidden',
    width:'90%',
    marginLeft:'70px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#F8F4E1', 
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    margin: '20px',
  };

  const imageStyle = {
    flex: '40%',
    overflow: 'hidden',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const contentStyle = {
    flex: '60%',
    padding: '20px',
    textAlign: 'left',
  };

  const h2Style = {
    fontSize: '25px',
    marginBottom: '20px',
    color: 'black',
  };

  const divStyle = {
    marginBottom: '20px',
  };

  const h3Style = {
    fontSize: '18px',
    margin: '0',
    color: 'black',
  };

  const pStyle = {
    fontSize: '16px',
    color: '#666',
    margin: '5px 0',
    color:'#543310'
  };

  return (
    <div style={cardStyle}
    onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div style={imageStyle}>
        <img
          src="/images/absec/meetteam.jpg"
          alt="Our Team"
          style={imgStyle}
        />
      </div>
      <div style={contentStyle}>
        <h2 style={h2Style}>Our Team</h2>
        <div style={divStyle}>
          <h3 style={h3Style}>Alice Johnson</h3>
          <p style={pStyle}>Project Manager</p>
          <p style={pStyle}>Alice oversees the overall project, ensuring timely delivery and effective collaboration among team members.</p>
        </div>
        <div style={divStyle}>
          <h3 style={h3Style}>Bob Smith</h3>
          <p style={pStyle}>Technical Lead</p>
          <p style={pStyle}>Bob leads the development team, focusing on building and maintaining the platform's technical infrastructure.</p>
        </div>
        <div style={divStyle}>
          <h3 style={h3Style}>Carol Davis</h3>
          <p style={pStyle}>Community Outreach Coordinator</p>
          <p style={pStyle}>Carol manages relationships with partners and stakeholders, driving engagement and collaboration within the community.</p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
