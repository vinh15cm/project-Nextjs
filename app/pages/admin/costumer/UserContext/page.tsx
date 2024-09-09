"use client"; // Đánh dấu đây là Client Component

import React, { createContext, useState, ReactNode } from 'react';

// Kiểu dữ liệu của một user
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean; // Trạng thái tài khoản (mở hoặc khóa)
}

// Kiểu dữ liệu cho context
interface UserContextType {
    users: User[];
    addUser: (user: User) => void;
    toggleUserStatus: (id: number) => void;
}

// Tạo UserContext
export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [users, setUsers] = useState<User[]>([]);

    // Thêm user mới
    const addUser = (user: User) => {
        setUsers([...users, user]);
    };

    // Bật/tắt trạng thái mở/khóa của tài khoản
    const toggleUserStatus = (id: number) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, isActive: !user.isActive } : user
        ));
    };

    return (
        <UserContext.Provider value={{ users, addUser, toggleUserStatus }}>
            {children}
        </UserContext.Provider>
    );
};
