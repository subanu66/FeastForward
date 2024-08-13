import React from 'react'
import NgomainHeader from "./NgomainHeader" 
import NgoBody from './NgoBody'
import Ngodonorreq from './Ngodonorreq'
import Ngovolun from './Ngovolun'
import NgoService from './Ngoservice'
const Ngomain = () => {
  return (
    <div style={styles.container}>
      <NgomainHeader/>
      <NgoBody/>
      <Ngodonorreq />
      <Ngovolun />
      <NgoService/>
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

export default Ngomain
