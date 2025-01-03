import HamburgerMenu from "./components/Hambug"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Comments from "./components/comments"
import Footer from "./components/Footer"

const Homepage = () => {
  return (
    <div>
      <HamburgerMenu/>
      <Header/>
    <Hero/>
      <Comments/>
      <Footer/>
      
    </div>
  )
}

export default Homepage
