import React from "react";

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/path/to/your/banner-image.jpg')" }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <h2 className="text-white text-5xl font-bold">Thời trang mới nhất 2024</h2>
            </div>
        </div>
    );
};

export default Banner;
