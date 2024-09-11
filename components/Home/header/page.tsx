import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">ShopQuầnÁo</div>

                {/* Thanh tìm kiếm */}
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        className="border rounded-l-lg p-2"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                        Tìm kiếm
                    </button>
                </div>

                {/* Menu đa cấp */}
                <nav className="space-x-4 hidden md:flex">
                    <div className="relative group">
                        <button className="font-semibold">Quần áo Nam</button>
                        {/* Menu cấp 2 */}
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-200">Áo</li>
                                <li className="px-4 py-2 hover:bg-gray-200">Quần</li>
                                <li className="px-4 py-2 hover:bg-gray-200">Phụ kiện</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="font-semibold">Quần áo Nữ</button>
                        {/* Menu cấp 2 */}
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-200">Áo</li>
                                <li className="px-4 py-2 hover:bg-gray-200">Váy</li>
                                <li className="px-4 py-2 hover:bg-gray-200">Phụ kiện</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="font-semibold">Giày dép</button>
                        {/* Menu cấp 2 */}
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-200">Nam</li>
                                <li className="px-4 py-2 hover:bg-gray-200">Nữ</li>
                                <li className="px-4 py-2 hover:bg-gray-200">Trẻ em</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
