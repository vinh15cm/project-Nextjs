"use client";

import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterPage = () => {
    const { register } = useContext(AuthContext) || {};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (register) {
            register(email, password);
            router.push('/login'); // Điều hướng sang trang đăng nhập sau khi đăng ký thành công
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Đăng ký</h2>
            <form onSubmit={handleRegister} className="flex flex-col">
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
                    Đăng ký
                </button>
            </form>

            {/* Thêm liên kết sang trang đăng nhập */}
            <p className="mt-4">
                Đã có tài khoản?{' '}
                <Link href="/login" className="text-blue-500 underline">
                    Đăng nhập tại đây
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
