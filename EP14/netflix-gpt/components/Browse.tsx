"use client";

import React, { useRef } from "react";
import Header from "@/components/Header";

const data = [
    { id: 1, image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg" }, // Stranger Things
    { id: 2, image: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg" }, // Breaking Bad
    { id: 3, image: "https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_SY679_.jpg" }, // The Mandalorian
    { id: 4, image: "https://occ-0-2464-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABU73BvQjJgydQFEJ-vZZw9QtO8fL6lIxc71x9tOqxgDWh_BHokCWPIbGC5AxJjDk0D_sIH5KhmmYm9HLr3DKUXg8eo6nzF0rtSI.webp?r=d95" },
    { id: 5, image: "https://occ-0-2464-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaW57jWqw0Gs9gqgmW816THwyNfPqphIiruQRFy9KXtt9PTPJpB4kzDKriPcpNjPKCj0itu1Yfjl-CR8rGEokBHPKE4O9lZQHXHRRpUHEelwoKk8lOf4gqlws-HnR2iZeSk4.webp?r=609" },
    { id: 6, image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY679_.jpg" },
];

const Browse = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const scrollAmount = 320;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-cyan-950 via-60% text-white">
            <div className="flex justify-center pt-6">
                <Header />
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-6xl flex flex-col items-center gap-4 p-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-2 bg-clip-text text-transparent drop-shadow-lg tracking-wide mb-2">
                        Trending Now
                    </h1>
                    <div className="relative w-full">
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 bg-white/80 text-black rounded-full p-2 shadow hover:bg-white h-20"
                            aria-label="Previous"
                        >
                            &#8592;
                        </button>
                        <div
                            ref={scrollRef}
                            className="flex gap-12 overflow-x-auto overflow-y-hidden scrollbar-none px-12 py-4"
                            style={{ scrollBehavior: "smooth" }}
                        >
                            {data.map((item, idx) => (
                                <div key={item.id} className="relative flex flex-col items-center min-w-[200px]">
                                    <span
                                        className="absolute left-[-30px] top-4/5 -translate-y-1/2 font-bold text-black drop-shadow-[0_0_4px_white] select-none pointer-events-none z-10"
                                        style={{
                                            WebkitTextStroke: "2px white",
                                            fontSize: "8rem",
                                        }}
                                    >
                                        {idx + 1}
                                    </span>
                                    <img
                                        src={item.image}
                                        alt={`Trending Web Series ${idx + 1}`}
                                        className="w-[200px] h-[300px] rounded-2xl object-cover transition-transform duration-300 shadow-lg hover:scale-105 hover:shadow-2xl hover:brightness-110"
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 h-20 bg-white/80 text-black rounded-full p-2 shadow hover:bg-white"
                            aria-label="Next"
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Browse;