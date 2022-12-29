import React from "react";

export interface IindexProps {

}

const index: React.FC<IindexProps> = () => {

    return(
       <>
           <div className="w-screen h-screen bg-gradient-to-r from-pink-500 to-purple-900 overflow-hidden">
               <div className="w-full h-full pt-14 flex items-center justify-center
    text-6xl
    uppercase
    font-extrabold">
                   Home

               </div>
           </div>
       </>
    )
}

export default index
