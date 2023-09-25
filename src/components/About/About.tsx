import { useEffect } from "react";
import Ping from "../ults/ping";
import Aos from "aos";
import 'aos/dist/aos.css'
const headerSchool = 'border-b text-center font-bold text-lg py-2'
const detailUni = 'p-2 text-[#8899A6]'
const About = () =>{
    useEffect(()=>{
        Aos.init({
            once : true, 
            duration : 1500     
        });
    },[])
    return (
        <div className="bg-[#15202B] text-white py-[5rem]" id="about" >
            <div className="w-[80%] mx-auto" data-aos="fade-down">
                <div className="text-5xl font-bold flex items-center gap-[1rem] justify-center mb-[2rem]" >
                    <Ping/>
                    <p>About me</p>
                </div>
                <p className="text-center max-w-[500px] mx-auto text-[#8899A6] mb-[1rem]  md:mb-[5rem]">I graduated in electrical engineering. I am interested in changing job to a developer , I have no experience with it so I want to learn experience to improve my skills. Currently , I'm looking for a job as a developer.</p>

                <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 justify-center gap-[3rem] items-center mx-auto relative ">
                    <div className="absolute w-[5px] h-[225px] md:w-[420px] md:h-[5px] bg-[#8899A6] transform translate-x-1/2 right-1/2 z-0"></div>
                    <div className="w-full flex justify-center z-10">
                        <div className="rounded-lg bg-[#22303C] w-fit">
                            <p className={headerSchool}>High School</p>
                            <p className="p-2">Matthayom Watnairong School</p>
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-center z-10">
                        <div className="rounded-lg bg-[#22303C]">
                            <p className={headerSchool}>University</p>
                            <p className="p-2">King Mongkut's University of Technology North Bangkok</p>
                            <p className="p-2">Bachelor of Engineering</p>
                            <ul className="list-disc list-inside">
                                <li className={detailUni}>Major in Electrical and Computer Engineering </li>
                                <li className={detailUni}>GPA 3.06</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;