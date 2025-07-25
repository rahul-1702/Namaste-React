import Header from "@/components/Header";
import React from "react";

const Body = ({children}: {children: React.ReactNode}) => {
    return <div className={'relative'}>
        <div className="relative w-full h-full flex items-center justify-center">
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
                alt="Netflix"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-60 pointer-events-none" />
            <Header />
            {children}
        </div>
    </div>
}

export default Body;