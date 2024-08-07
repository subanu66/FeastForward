import React from 'react';

const MeetTheTeam = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <img
          src="/images/absec/meetteam.jpg"
          alt="Our Team"
          style={styles.image}
        />
      </div>
      <div style={styles.rightSide}>
        <h2 style={styles.heading}>Our Team</h2>
        <div style={styles.teamMember}>
          <h3 style={styles.memberName}>Alice Johnson</h3>
          <p style={styles.memberRole}>Project Manager</p>
          <p style={styles.memberContribution}>
            Alice oversees the overall project, ensuring timely delivery and effective collaboration among team members.
          </p>
        </div>
        <div style={styles.teamMember}>
          <h3 style={styles.memberName}>Bob Smith</h3>
          <p style={styles.memberRole}>Technical Lead</p>
          <p style={styles.memberContribution}>
            Bob leads the development team, focusing on building and maintaining the platform's technical infrastructure.
          </p>
        </div>
        <div style={styles.teamMember}>
          <h3 style={styles.memberName}>Carol Davis</h3>
          <p style={styles.memberRole}>Community Outreach Coordinator</p>
          <p style={styles.memberContribution}>
            Carol manages relationships with partners and stakeholders, driving engagement and collaboration within the community.
          </p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    margin: '20px 0',
  },
  leftSide: {
    flex: '0.4',
    paddingRight: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  rightSide: {
    flex: '0.6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  teamMember: {
    marginBottom: '20px',
  },
  memberName: {
    fontSize: '20px',
    margin: '5px 0',
  },
  memberRole: {
    fontSize: '18px',
    color: '#666',
    margin: '5px 0',
  },
  memberContribution: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
};

export default MeetTheTeam;
