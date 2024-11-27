import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppoinments from "./pages/MyAppoinments";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-10 sm:mx-20:">
    
    <Navbar/>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/doctors/:speciality?" element={<Doctors />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/my-appointments" element={<MyAppoinments />} />
      <Route path="/my-appointments/:docId" element={<Appointment />} />
    </Routes>
    <Footer/>
   
    </div>
  );
}

export default App;
