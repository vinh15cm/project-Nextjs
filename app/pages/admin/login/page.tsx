"use client"; // Đảm bảo rằng đây là Client Component

import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
    const { login } = useContext(AuthContext) || {};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login) {
            login(email, password);
            router.push('/admin'); // Điều hướng sang trang admin sau khi đăng nhập
        }
    };
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Đăng nhập</h2>
            <form onSubmit={handleLogin} className="flex flex-col">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="mb-4 p-2 border rounded-md"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    className="mb-4 p-2 border rounded-md"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    Đăng nhập
                </button>
            </form>

            {/* Thêm liên kết sang trang đăng ký */}
            <p className="mt-4">
                Chưa có tài khoản?{' '}
                <Link href="./register" className="text-blue-500 underline">
                    Đăng ký tại đây
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
