import Ping from "../ults/ping"
import { FbIcon, GhIcon, IgIcon, TwIcon } from "./contact_icon"

const Contact = () =>{
    return (
        <div className="bg-[#15202B] text-white pb-[2rem]" id="contact">
            <div className="w-[80%] mx-auto">
                <div className="text-5xl font-bold flex items-center gap-[1rem] justify-center mb-[2rem]">
                    <Ping/>
                    <p>Contact</p>
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <a href="mailto:bundit.hir@gmail.com" className="text-center">Email: bundit.hir@gmail.com</a>
                    <a href="tel:+951919284" className="text-center">Tel: 095-191-9284</a>
                    <div className="flex gap-[1rem] justify-center">
                        <a href="https://www.facebook.com/peet.bundit.71/" target="_blank"><FbIcon/></a>
                        <a href="https://github.com/bundithir" target="_blank"><GhIcon/></a>
                        <a href="https://www.instagram.com/peepi.p/" target="_blank"><IgIcon/></a>
                        <a href="https://twitter.com/peepi0615" target="_blank"><TwIcon/></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact