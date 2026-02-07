import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './commonComponents/Header'
import Footer from './commonComponents/Footer'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import AboutUs from './components/AboutUs/AboutUs'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
