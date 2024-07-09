import { Outlet } from "react-router-dom"
import MobileNavbar from "../components/navbar/navbar"
import Navbar from "../components/navbar/lg-navbar"
import Footer from "../components/footer"


const AppLayout = () => {
  return (
    <main>
        <MobileNavbar />
        <Navbar />
        <Outlet/>
        <Footer />
    </main>
  )
}

export default AppLayout