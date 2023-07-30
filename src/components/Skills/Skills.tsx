import Ping from "../ults/ping";
const Skills = () =>{
    return (
        <div className="bg-[#15202B] text-white pt-[5rem] md:pt-[8rem]" id="skills">
            <div className="w-[80%] mx-auto bg-[#22303C] rounded-lg py-[2rem]">
                <div className="text-5xl font-bold flex items-center gap-[1rem] justify-center mb-[2rem]">
                    <Ping/>
                    <p>Skills</p>
                </div>
                <p className="text-center max-w-[500px] mx-auto text-[#8899A6] px-2">I have learned from courses on Udemy. The courses I learned are <span>
                    <a href="https://www.udemy.com/certificate/UC-752af901-062b-455f-b7fe-0e1b3a0a6b66/" target="blank" className="underline">The Complete Web Developer in 2023</a> and <a href="https://www.udemy.com/certificate/UC-4a98c174-42ce-4d04-ad6d-7f2ec6c4284e/" target="blank" className="underline">Complete React Developer in 2023</a> 
                </span> 
                </p>
                <div className="flex flex-wrap gap-[1rem] items-center justify-center pt-[1rem]">
                    <div><img src="/html.png" width={130}  alt="html" /></div>
                    <div><img src="/css.png"  width={115} alt="css" /></div>
                    <div><img src="/tailwind.png"  width={110} alt="tailwind" /></div>
                    <div><img src="/js.png" width={100} alt="js" /></div>
                    <div><img src="/ts.png" width={100} alt="ts" /></div>
                    <div><img src="/react.png" width={100} alt="react" /></div>
                    <div><img src="/node.png" width={100} alt="node" /></div>
                    <div><img src="/postgres.png" width={110} alt="psql" /></div>
                </div>
            </div>
        </div>
    )
}

export default Skills;