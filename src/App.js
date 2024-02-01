import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage";
import BookingPage from './components/BookingPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
         <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
