import helper from '../../helper/helper'
import './lg-navbar.css'

import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const goToPage = (input) => {
        navigate(input)
    }
  return (
    <section className="hidden lg:block pr-[20px]">
        <nav className="flex justify-between items-center  border-b-[0.5px] border-[#BE827DB2]">
            <div className="col-span-1 flex items-center justify-around">
                <img onClick={() => goToPage("/")} src={helper.Logo} alt=" timbu home icon" className=""/>
                <img src={helper.Hamburger} alt=" timbu hamburger icon" />
            </div>

            <div className="w-[654px] h-[40px] relative">
                <input type="searh" name="search" placeholder="Search" className="w-full h-[40px]  rounded-[50px]  bg-[#D9D9D980] search-bar" />
                <div className="absolute top-0 h-full  ml-[2rem] flex items-center">
                    <img src={helper.Search} alt="Timbu logo"  />
                </div>
            </div>

            <div className=" flex items-center gap-[15px] ">
                <img src={helper.Profile} alt=" timbu User Profile icon" />
                <img onClick={() => goToPage("cart")} src={helper.Cart} alt=" timbu cart icon" />
            </div>
        </nav>
    </section>
  )
}

export default Navbar