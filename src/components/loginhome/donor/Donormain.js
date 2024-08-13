import React from 'react'
import DonorHeader from "./DonorHeader" 
import DonorBody from './DonorBody'
import DonationRequestForm from './DonationRequestForm'
import DonorServices from './DonorServices'
const Donormain = () => {
  return (
    <div style={styles.container}>
      <DonorHeader/>
      <DonorBody/>
      <DonationRequestForm />
      <DonorServices />
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
  header: {
    marginBottom: '0', // Remove bottom margin
  },
  body: {
    margin: '0', // Remove top and bottom margin
    padding: '0', // Adjust padding if needed
  },
  form: {
    margin: '10px 0', // Minimal margin between form and other components
  },
  services: {
    marginTop: '-100px', // Minimal margin above the services component
  },
};

export default Donormain
