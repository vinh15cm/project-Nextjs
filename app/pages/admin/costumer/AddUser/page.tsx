"use client";

import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext/page';

const AddUser = () => {
    const { addUser } = useContext(UserContext) || {};
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (addUser) {
            const newUser = {
                id: Date.now(), // Giả lập ID duy nhất
                name,
                email,
                isActive: true, // User mặc định được kích hoạt (mở tài khoản)
            };
            addUser(newUser);

            // Reset form
            setName('');
            setEmail('');
        }
    };

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-4">Thêm User</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên"
                    className="border p-2 mb-4 w-full"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2 mb-4 w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
                    Thêm
                </button>
            </form>
        </div>
    );
};

export default AddUser;
