import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Home } from "./Pages/Home"

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
      </Routes>



    </>
  )
}
