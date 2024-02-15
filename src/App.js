import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import BookingPage from './components/BookingPage/BookingPage'
import ConfirmedBooking from "./components/Confirmation/ConfirmedBooking";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path="/booking-confirmation" element={<ConfirmedBooking/>}></Route>
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
