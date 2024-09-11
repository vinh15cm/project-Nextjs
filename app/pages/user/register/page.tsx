"use client";

import React, { useState } from 'react';
import { googleSignIn, facebookSignIn, emailSignUp } from '../authService';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string }>({});

    // Hàm validate email
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        let validationErrors: { email?: string; password?: string; confirmPassword?: string } = {};

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

        // Kiểm tra mật khẩu và xác nhận mật khẩu
        if (password !== confirmPassword) {
            validationErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const user = await emailSignUp(email, password);
            console.log('User signed up with Email:', user);
        } catch (error) {
            console.error('Email sign-up failed:', error);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Đăng Ký</h1>

            <button onClick={googleSignIn} className="bg-red-500 text-white p-2 rounded-md mb-4">
                Đăng ký với Google
            </button>
            <button onClick={facebookSignIn} className="bg-blue-500 text-white p-2 rounded-md mb-4 ml-4">
                Đăng ký với Facebook
            </button>

            <form onSubmit={handleEmailSignUp} className="mt-6">
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

                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="border p-2 mb-4 w-full"
                    required
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}

                <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-full">
                    Đăng ký với Email
                </button>
            </form>
        </div>
    );
};

export default SignUp;
