import { ChildrenProps} from "@/types"

 
export  const MainConatiner=({children}:ChildrenProps)=>{
    return(
        <div className="max-w-4xl mx-auto w-full border min-h-screen">
         {children}
        </div>
    )
}