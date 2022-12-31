import React from "react";
import Image from 'next/image'

export interface IDesignThumbProps {
    data: any
}

const DesignThumb: React.FC<IDesignThumbProps> = ({data}) => {

    return (
        <>
            <div className="relative aspect-w-16 aspect-h-12 w-full h-full">
                <Image src={data.url} fill cover alt="something"  className="object-cover hover:cursor-pointer hover:bg-black" />
                <div
                    className="h-auto w-auto opacity-0 flex items-center justify-center flex-col hover:cursor-pointer hover:opacity-100 hover:bg-black hover:bg-opacity-70">
                    <div
                        className="  text-5xl font-extrabold mb-4 text-white border border-white border-4 p-6 rounded-md sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
                        {data.Company}
                    </div>
                    <div className="  text-white text-3xl font-light sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
                        {data.ThumbDescription}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignThumb
