import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";
import React from "react";

const Homepage = (props) => {
    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <Head title={props.title} />
                {/* ReactJS Navbar Component Start */}
                <Navbar />
                {/* ReactJS Navbar Component Ends Here */}
                <div>
                    {props.news ? (
                        props.news.map((data, i) => {
                            return (
                                <div
                                    key={i}
                                    className="p-4 m-2 bg-white text-black shadow-md rounded-md"
                                >
                                    <p className="text-2xl">{data.title}</p>
                                    <p className="text-sm">
                                        {data.description}
                                    </p>
                                    <i>{data.category}</i>
                                    <i>{data.author}</i>
                                </div>
                            );
                        })
                    ) : (
                        <p>Saat ini berita belum tersedia!</p>
                    )}
                </div>
            </div>
        </>
    );
};
export default Homepage;
