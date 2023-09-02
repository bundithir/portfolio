import { data } from "../data"
import Work from "./work";
interface DataWork {
    Data : data[]
}
const WorkList = ({Data} : DataWork) =>{
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