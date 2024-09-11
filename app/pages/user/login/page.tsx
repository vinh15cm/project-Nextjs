"use client";

import React, { useState } from 'react';
import { googleSignIn, facebookSignIn, emailSignIn } from '../authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    // Hàm validate email
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        let validationErrors: { email?: string; password?: string } = {};

        // Validate email
        if (!email) {
            validationErrors.email = "Email không được để trống";
        } else if (!validateEmail(email)) {
            validationErrors.email = "Email không hợp lệ";
        }

        // Validate mật khẩu
        if (!password) {
            validationErrors.password = "Mật khẩu không được để trống";
        } else if (password.length < 6) {
            validationErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const user = await emailSignIn(email, password);
            console.log('User signed in with Email:', user);
        } catch (error) {
            console.error('Email sign-in failed:', error);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Đăng Nhập</h1>

            <button onClick={googleSignIn} className="bg-red-500 text-white p-2 rounded-md mb-4">
                Đăng nhập với Google
            </button>
            <button onClick={facebookSignIn} className="bg-blue-500 text-white p-2 rounded-md mb-4 ml-4">
                Đăng nhập với Facebook
            </button>

            <form onSubmit={handleEmailSignIn} className="mt-6">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2 mb-4 w-full"
                    required
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border p-2 mb-4 w-full"
                    required
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}

                <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-full">
                    Đăng nhập với Email
                </button>
            </form>
        </div>
    );
};

export default Login;
