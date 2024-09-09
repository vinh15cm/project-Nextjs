"use client";

import React, { useContext } from 'react';
import { UserContext } from '../UserContext/page';

const UserList = () => {
    const { users, toggleUserStatus } = useContext(UserContext) || {};

    return (
        <div className="bg-white p-4 shadow-md rounded-md mt-4">
            <h3 className="text-xl font-bold mb-4">Danh sách User</h3>
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Tên</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Trạng thái</th>
                        <th className="px-4 py-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => (
                        <tr key={user.id} className="border-t">
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">
                                {user.isActive ? 'Mở' : 'Khóa'}
                            </td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={() => toggleUserStatus && toggleUserStatus(user.id)}
                                    className={`p-2 rounded-md ${user.isActive ? 'bg-red-500' : 'bg-green-500'
                                        } text-white`}
                                >
                                    {user.isActive ? 'Khóa' : 'Mở'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
