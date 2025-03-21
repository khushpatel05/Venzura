// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import SignIn from './pages/signin';
// import SignUp from './pages/signup';
// import Home from './pages/Home';
// import Venue from './pages/Venue';
// import VenueDesign1 from './designvenue/venuedesign1';
// import VenueDesign2 from './designvenue/venuedesign2';
// import VenueDesign3 from './designvenue/venuedesign3';
// import VenueDesign4 from './designvenue/venuedesign4';
// import VenueDesign5 from './designvenue/venuedesign5';
// import Theme from './pages/theme';
// import About from './pages/about';
// import Navbar from './components/navbar';
// import ViewTheme1 from './thems/viewtheme1';
// import ViewTheme2 from './thems/viewtheme2';
// import ViewTheme3 from './thems/viewtheme3';
// import ViewTheme4 from './thems/viewtheme4';
// import ViewTheme5 from './thems/viewtheme5';
// import Booking from './bookings/showbooking';
// import HallBooking from './bookings/hallbooking'; // Import the HallBooking component
// import ClubBooking from './bookings/clubbooking'; // Import the ClubBooking component
// import ClubBooking1 from './clubdesign/clubbooking1';
// import ClubBooking2 from './clubdesign/clubbooking2';
// import ClubBooking3 from './clubdesign/clubbooking3';
// import ClubBooking4 from './clubdesign/clubbooking4';
// import ClubBooking5 from './clubdesign/clubbooking5';
// import Musician from './pages/musician-host';
// // For the admin
// import AdminLogin from './admin/adminlogin';
// import AdminPanel from './admin/adminpannel';



// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar /> {/* Navbar is always visible */}
//       <Routes>
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/venue" element={<Venue />} />
//         <Route path="/venuedesign1" element={<VenueDesign1 />} />
//         <Route path="/venuedesign2" element={<VenueDesign2 />} />
//         <Route path="/venuedesign3" element={<VenueDesign3 />} />
//         <Route path="/venuedesign4" element={<VenueDesign4 />} />
//         <Route path="/venuedesign5" element={<VenueDesign5 />} />
//         <Route path="/theme" element={<Theme />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/viewtheme1" element={<ViewTheme1 />} />
//         <Route path="/viewtheme2" element={<ViewTheme2 />} />
//         <Route path="/viewtheme3" element={<ViewTheme3 />} />
//         <Route path="/viewtheme4" element={<ViewTheme4 />} />
//         <Route path="/viewtheme5" element={<ViewTheme5 />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/hallbooking" element={<HallBooking />} /> {/* Add the HallBooking route */}
//         <Route path="/clubbooking" element={<ClubBooking />} /> {/* Add the ClubBooking route */}
//         <Route path="/clubbooking1" element={<ClubBooking1 />} />
//         <Route path="/clubbooking2" element={<ClubBooking2 />} />
//         <Route path="/clubbooking3" element={<ClubBooking3 />} />
//         <Route path="/clubbooking4" element={<ClubBooking4 />} />
//         <Route path="/clubbooking5" element={<ClubBooking5 />} />
//         <Route path="/musician-host" element={<Musician />} />

//         {/* for admin */}
//         <Route path="/adminlogin" element={<AdminLogin/>} />
//         <Route path="/adminpannel" element={<AdminPanel/>} />
//         <Route path="/" element={<Navigate to="/home" replace />} /> {/* Redirect to Home */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Home from './pages/Home';
import Venue from './pages/Venue';
import VenueDesign1 from './designvenue/venuedesign1';
import VenueDesign2 from './designvenue/venuedesign2';
import VenueDesign3 from './designvenue/venuedesign3';
import VenueDesign4 from './designvenue/venuedesign4';
import VenueDesign5 from './designvenue/venuedesign5';
import Theme from './pages/theme';
import About from './pages/about';
import Navbar from './components/navbar';
import ViewTheme1 from './thems/viewtheme1';
import ViewTheme2 from './thems/viewtheme2';
import ViewTheme3 from './thems/viewtheme3';
import ViewTheme4 from './thems/viewtheme4';
import ViewTheme5 from './thems/viewtheme5';
import Booking from './bookings/showbooking';
import HallBooking from './bookings/hallbooking';
import ClubBooking from './bookings/clubbooking';
import ClubBooking1 from './clubdesign/clubbooking1';
import ClubBooking2 from './clubdesign/clubbooking2';
import ClubBooking3 from './clubdesign/clubbooking3';
import ClubBooking4 from './clubdesign/clubbooking4';
import ClubBooking5 from './clubdesign/clubbooking5';
import Musician from './pages/musician-host';
import AdminLogin from './admin/adminlogin';
import AdminPanel from './admin/adminpannel';
import User from './admin/user';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import OTP from './pages/otp';
import ClubBook from './admin/clubbook';

function App() {
  return (
    <BrowserRouter>
      <ConditionalNavbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/venuedesign1" element={<VenueDesign1 />} />
        <Route path="/venuedesign2" element={<VenueDesign2 />} />
        <Route path="/venuedesign3" element={<VenueDesign3 />} />
        <Route path="/venuedesign4" element={<VenueDesign4 />} />
        <Route path="/venuedesign5" element={<VenueDesign5 />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/about" element={<About />} />
        <Route path="/viewtheme1" element={<ViewTheme1 />} />
        <Route path="/viewtheme2" element={<ViewTheme2 />} />
        <Route path="/viewtheme3" element={<ViewTheme3 />} />
        <Route path="/viewtheme4" element={<ViewTheme4 />} />
        <Route path="/viewtheme5" element={<ViewTheme5 />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/hallbooking" element={<HallBooking />} />
        <Route path="/clubbooking" element={<ClubBooking />} />
        <Route path="/clubbooking1" element={<ClubBooking1 />} />
        <Route path="/clubbooking2" element={<ClubBooking2 />} />
        <Route path="/clubbooking3" element={<ClubBooking3 />} />
        <Route path="/clubbooking4" element={<ClubBooking4 />} />
        <Route path="/clubbooking5" element={<ClubBooking5 />} />
        <Route path="/musician-host" element={<Musician />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminpannel" element={<AdminPanel />} />
        <Route path="/user" element={<User />} />
        <Route path="/otp" element={<OTP />} /> {/* Fixed Syntax Error */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/clubbook" element={<ClubBook />} /> {/* Add this route */}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const noNavbarRoutes = ['/adminlogin', '/adminpannel', '/user', '/clubbook'];

  return !noNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
}

export default App;
  