import { data } from "../data"
import Work from "./work";

const WorkList = ({Data} : any | data[]) =>{
    return (
        <>
            {Data.map((work : data , i : number) => {
                return(
                    <Work work={work} key={i} />
                )
            })}
        </>
    )
        
}

export default WorkList;