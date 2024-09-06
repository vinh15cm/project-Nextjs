import React, { createContext, useState } from 'react';

// Xác định kiểu dữ liệu cho AuthContext
interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    register: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email: string, password: string) => {
        if (email === "admin@example.com" && password === "password") {
            setIsAuthenticated(true);
            localStorage.setItem('auth', 'true'); // Lưu trạng thái đăng nhập
        } else {
            alert('Sai email hoặc mật khẩu!');
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('auth');
    };

    const register = (email: string, password: string) => {
        alert(`Đăng ký thành công! Email: ${email}`);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
