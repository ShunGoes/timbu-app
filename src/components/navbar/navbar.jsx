import helper from "../../helper/helper"
import { useNavigate } from "react-router-dom"

const MobileNavbar = () => {
    const navigate = useNavigate()
    const goToPage = (input) => {
        navigate(input)
    }
  return (
    <section className="lg:hidden">
        <nav className="grid grid-cols-4 border-[0.5px] border-[#BE827DB2]">
            <div className="col-span-1 flex items-center justify-around">
                <img src={helper.Hamburger} alt=" timbu hamburger icon" />
                <img src={helper.Search} alt=" timbu search icon" />
            </div>
            <div className="col-span-2 flex justify-center">
                <img onClick={() => goToPage("/")} src={helper.Logo} alt="Timbu logo" />
            </div>
            <div className="col-span-1 flex items-center justify-around ">
                <img src={helper.Profile} alt=" timbu User Profile icon" />
                <img onClick={() => goToPage("cart")} src={helper.Cart} alt=" timbu cart icon" />
            </div>
        </nav>
    </section>
  )
}

export default MobileNavbar