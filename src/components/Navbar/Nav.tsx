import { useState } from "react";
import { BurgerIcon } from "./NavIcon";
import { Header, SideMenu } from "./Nav_style";

const Navbar = () => {
    const [ IsSideOpen , SetIsSideOpen ] = useState(false)
    const handleSideOpen = () => SetIsSideOpen(!IsSideOpen)
    const handleOnclickHeader = () =>{
        if(IsSideOpen) SetIsSideOpen(false)
    }
    return (
        <div className="z-20 bg-[#192734] sticky top-0">
            {IsSideOpen?
            <section className="fixed h-screen w-[100%] top-0 bg-black/60 z-20" onClick={handleSideOpen}></section>
            :
            null}
            <div className="flex w-[90%] mx-auto justify-between items-center py-[0.5rem]">
                <div className="flex gap-[1rem] items-center h-[45px]">
                    <p className="text-lg capitalize text-red-500">bundit</p>
                </div>
                <button className="md:hidden" onClick={handleSideOpen}>
                    <BurgerIcon/>
                </button>
                <ul className={`${SideMenu} ${IsSideOpen?'translate-x-0':'-translate-x-full'}`}>
                    <li onClick={handleOnclickHeader}><a href="#about" className={Header}>About me</a></li>
                    <li onClick={handleOnclickHeader}><a href="#skills" className={Header}>Skills</a></li>
                    <li onClick={handleOnclickHeader}><a href="#projects" className={Header}>Projects</a></li>
                    <li onClick={handleOnclickHeader}><a href="#contact" className={Header}>Contact</a></li>
                </ul>
            </div>
        </div>
        
    )
}
export default Navbar;