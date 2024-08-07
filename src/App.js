
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
function App() {
  return (
    <Router>
      {/* Only render Header and Footer on non-login pages */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route exact path='/admin' element={<AdminPage />} />
        <Route path="/signupvolun" element={<SignUpVolun />} />
        <Route path="/signupngo" element={<SignUpNgo />} />
        <Route path="/signupdonor" element={<SignUpDonor />} />
        <Route exact path='/register1' element={<Hregister />} />

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
