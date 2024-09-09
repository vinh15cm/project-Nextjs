"use client"
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const authContext = useContext(AuthContext); // Lấy context
    const navigate = useNavigate();

    // Kiểm tra nếu context tồn tại và có thuộc tính logout
    const handleLogout = () => {
        if (authContext && authContext.logout) {
            authContext.logout();
            navigate('/login'); // Điều hướng về trang đăng nhập sau khi đăng xuất
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Trang quản trị Admin</h2>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white p-2 rounded-md"
            >
                Đăng xuất
            </button>
        </div>
    );
};

export default AdminPage;
