import { Navbar } from "./Components/Navbar"
import { BrowserRouter, Routes, Route, useLocation, } from 'react-router-dom'
import { Home } from "./Pages/Home"
import { ContactUs } from "./Pages/ContactUs"
import { AboutUs } from "./Pages/AboutUs"
import { FAQs } from "./Pages/FAQs"
import { Privacy } from "./Pages/Privacy"
import { Shipping } from "./Pages/Shipping"
import { Terms } from "./Pages/Terms"
import { Shop } from "./Pages/Shop"
import { Blogs } from "./Pages/Blogs"
import { BlogDetails } from "./Pages/BlogDetails"
import { ProductDetails } from "./Pages/ProductDetails"
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register"
import { Footer } from "./Components/Footer"
import { Cart } from "./Pages/Cart"

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
  const location = useLocation();
  const hideLayout = ["/login", "/register", "/notfound"];
  const shouldHide = hideLayout.includes(location.pathname);
  return (
    <>
      {!shouldHide && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {!shouldHide && <Footer />}


    </>
  )
}
