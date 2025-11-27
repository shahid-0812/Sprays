import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Home } from "./Pages/Home"
import { ContactUs } from "./Pages/ContactUs"
import { AboutUs } from "./Pages/AboutUs"

function App() {

  return (
    <>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </>
  )
}

export default App

function AppWrapper() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>



    </>
  )
}
