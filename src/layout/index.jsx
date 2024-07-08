import { Outlet } from "react-router-dom"
import MobileNavbar from "../components/navbar/navbar"
import Navbar from "../components/navbar/lg-navbar"


const AppLayout = () => {
  return (
    <main>
        <MobileNavbar />
        <Navbar />
        <Outlet/>
    </main>
  )
}

export default AppLayout