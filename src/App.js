
import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import About from "./components/about/About"
import NgosHome from "./components/ngos/NgosHome"
import Team from "./components/team/Team"
import Register from "./components/register/Register"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Back from "./components/common/back/Back";
import LoginPage from "./components/signin/LoginPage";
import AdminPage from "./components/signin/AdminPage";
import SignUpVolun from "./components/register/signup/SignUpVolun";
import SignUpNgo from "./components/register/signup/SignUpNgo"
import SignUpDonor from "./components/register/signup/SignUpDonor"
import Body from "./components/home/body/Body"
import Hregister from "./components/home/Hregister"
import Navbar from "./components/admin/Navbar"
import Dashboard from "./components/admin/Dashboard"
import Open from "./components/open/Open"
import Loginmain from "./components/open/Loginmain"
import VolunLogin from "./components/signin/VolunLogin"
import DonorLogin from "./components/signin/DonorLogin"
import Ngomain from "./components/loginhome/nonpro/Ngomain"
import Donormain from "./components/loginhome/donor/Donormain";
import Volunteermain from "./components/loginhome/volunteer/Volunteermain"


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route exact path='/admin' element={<AdminPage />} />
        <Route exact path='/donorlogin' element={<DonorLogin />} />
        <Route exact path='/volunlogin' element={<VolunLogin />} />
        <Route path="/signupvolun" element={<SignUpVolun />} />
        <Route path="/signupngo" element={<SignUpNgo />} />
        <Route path="/signupdonor" element={<SignUpDonor />} />
        <Route exact path='/register1' element={<Hregister />} />
        <Route exact path='/nav' element={<Navbar/>}/>
        <Route exact path='/das' element={<Dashboard/>}/>
        <Route path="/home" element={<Open />} /> 
        <Route exact path='/loginmain' element={<Loginmain/>}/>
        <Route exact path='/ngomain' element={<Ngomain/>}/>
        <Route exact path='/donormain' element={<Donormain/>}/>
        <Route exact path='/volunmain' element={<Volunteermain/>}/>
      
        <Route path="*" element={
            <>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/ngos1' element={<NgosHome />} />
                <Route exact path='/team' element={<Team />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/work' element={<Work />} />
                <Route exact path='/body' element={<Body />} />
                <Route exact path='/back' element={<Back title="About Us" />} />
              
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
