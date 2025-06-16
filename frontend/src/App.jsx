import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Navbarmain from "./components/NavbarMain";
import Footer from "./components/Footer";
import MyAppointments from "./pages/MyAppointments";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {location.pathname !== "/" ? <Navbar /> : <Navbarmain />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
// This code defines the main application component for a React application using React Router for navigation.
// It includes routes for various pages such as Home, Doctors, Login, About, Contact, MyProfile, Appointment, and MyAppointments.
// The Navbar component is conditionally rendered based on the current path, and a Footer component is included at the bottom of the page.
// The application is structured to provide a responsive design with a meta viewport tag for mobile compatibility.
// The useLocation hook from React Router is used to determine the current path and conditionally render the appropriate Navbar.
// The App component is exported as the default export, making it available for use in other parts of the application.
// The use of React Router allows for a single-page application experience, where navigation between pages does not require a full page reload.
