import React from "react";
import {supabase} from "../utils/supabase"
import Link from "next/link";
import DesignThumb from "./DesignThumb";
import Navbar from "../../components/Navbar";


export interface IndexProps {
    thumbnails: any;
}

export const getStaticProps = async () => {
    const {data: thumbnails} = await supabase.from("DesignThumbnails").select("*");
    return {
        props: {
            thumbnails
        }
    };
};

const index: React.FC<IndexProps> = ({thumbnails}) => {

    return (
        <>
            <div className="w-screen h-full bg-gradient-to-r from-pink-500 to-purple-900">
                <Navbar />
                <div className="w-full h-full pt-20">
                    <div className="justify-center">
                    <div
                        className="grid grid-cols-1 gap-4 place-items-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

                        {thumbnails.map((data: any) => (
                            <Link key={data.id} href={`Design/${data.id}`}>
                                <div className="w-full h-full">
                                    <DesignThumb key={data.id} data={data} />
                                </div>
                            </Link>
                        ))}

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
