'use client'

import { ScaleLoader } from "react-spinners";

export default  function Loading() {

    return (
        <div className="grid place-content-center bg-violet-600 px-4 py-24 h-screen">
            <Loader />
        </div>
    );
}


const Loader = () => {
    return (
        <div>
            <ScaleLoader />
        </div>
    );
};



