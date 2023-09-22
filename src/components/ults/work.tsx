import { data } from "../data"
import { CodeIcon, ViewIcon } from "./workIcon"

interface Work_data {
    work : data
}
const Work = ( { work } :Work_data ) =>{
    const { name , details , stacks , image , code ,view } = work
    return(
        <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mx-auto gap-[2rem] hover:bg-[#22303C] duration-500 lg:rounded-lg px-[1rem] py-[2rem] border-b lg:border-0">
            <div className="flex flex-col lg:flex-row gap-[1rem]">
                <img src={image} className="w-full lg:w-[300px]" alt={name}/>    
                <div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                        
                    
                    <h3 className="text-[#8899A6] py-[0.5rem]">{details}</h3>
                    <div className="flex flex-wrap gap-[0.5rem]">
                        {stacks.map((stack :string ,i : number )  => <div className="py-1 px-2 rounded-lg bg-[#8899A6]" key={i}>{stack}</div>)}
                    </div>
                </div>
            </div>
            
            <div className="flex gap-[1rem]">
                <a href={code} target="_blank" ><CodeIcon/></a>
                {view?
                <a href={view} target="_blank" ><ViewIcon/></a>
                :null}
            </div>
        </div>
    )
}

export default Work;