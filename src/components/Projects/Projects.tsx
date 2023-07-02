import Ping from "../ults/ping";
import { useState } from 'react'
import { Btn } from "./Projects_style";
import { DataChallenges , DataProject } from "../data";
import WorkList from "../ults/worklist";
const Projects = () =>{
    const [route , Setroute] = useState(true)
    const handleProject = () => Setroute(!route)
    return (
        <div className="bg-[#15202B] text-white py-[9rem]" id="projects">
            <div className="w-[80%] mx-auto">
                <div className="text-5xl font-bold flex items-center gap-[1rem] justify-center mb-[2rem]">
                    <Ping/>
                    <p>Projects</p>
                </div>
                <p className="text-center max-w-[500px] mx-auto text-[#8899A6] mb-[1rem] md:mb-[5rem]">After learning on Udemy I practiced my coding skills with some projects such as frontend challenges on frontendmentor and recommended projects for junior frontend.</p>
            <div className="grid grid-cols-2 pb-[2rem]">
                <button className={`${Btn} rounded-l-full ${route?'bg-[#8899A6]':'hover:bg-[#22303C]'}`} disabled={route} onClick={handleProject}>Projects</button>
                <button className={`${Btn} rounded-r-full ${route?'hover:bg-[#22303C]':'bg-[#8899A6]'}`} disabled={!route} onClick={handleProject}>Challenges</button>
            </div>
            {route?<WorkList Data ={DataProject}/> : <WorkList Data={DataChallenges}/>}
            </div>
        </div>
    )
}
export default Projects;