import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h3 className="font-bold text-xl">ShopQuầnÁo</h3>
                </div>

                <ul className="space-x-4 inline-block">
                    <li className="inline-block"><a href="#" className="hover:underline">Về chúng tôi</a></li>
                    <li className="inline-block"><a href="#" className="hover:underline">Chính sách bảo mật</a></li>
                    <li className="inline-block"><a href="#" className="hover:underline">Điều khoản dịch vụ</a></li>
                </ul>

                <div className="mt-4">
                    <p>&copy; 2024 ShopQuầnÁo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
