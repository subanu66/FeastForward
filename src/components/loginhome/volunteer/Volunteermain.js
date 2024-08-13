import React from 'react'
import VolunteerHeader from './VolunteerHeader'
import VolunteerBody from './VolunteerBody'
import Points from './Points'
const Volunteermain = () => {
  return (
    <div style={styles.container}>
      <VolunteerHeader/>
      <VolunteerBody/>
      <Points /> 
    </div>
  )
}
const styles = {
  container: {
    background: 'linear-gradient(to right, #C6FFDD, #FFD194)', // Linear gradient background
    minHeight: '100vh', // Ensure it covers the entire viewport height
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Volunteermain
