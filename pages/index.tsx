import React from "react";
import Navbar from "../components/Navbar";

export interface IindexProps {

}

const index: React.FC<IindexProps> = () => {

    return(
       <>
           <div className="w-screen h-screen bg-gradient-to-r from-pink-500 to-purple-900 overflow-hidden">
               <div className="w-full h-full flex items-center justify-center text-6xl uppercase font-extrabold">
                   <Navbar />
                   Home
               </div>
           </div>
       </>
    )
}

export default index
