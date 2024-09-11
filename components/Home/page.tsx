import React from "react";
import Header from "./header/page";
import Footer from "./footer/page";
import Banner from "./banner/page";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Banner */}
            <Banner />

            {/* Nội dung trang chủ */}
            <div className="flex-grow bg-gray-100 py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Chào mừng đến với cửa hàng thời trang của chúng tôi!</h1>
                    <p className="mt-4 text-xl">Khám phá bộ sưu tập thời trang mới nhất ngay hôm nay.</p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
