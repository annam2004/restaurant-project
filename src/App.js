
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-multi-carousel/lib/styles.css';
import './App.css';
import Homepage from './componenets/Homepage';
import Nav from './componenets/Nav';
import About from './componenets/About';
import BookingPage from "./componenets/BookingPage";
import Footer from './componenets/Footer';
import Menu from './componenets/Menu';
import Login from './componenets/Login'

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
