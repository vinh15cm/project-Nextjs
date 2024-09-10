"use client";

import React, { useState, useContext } from 'react';
import { CategoryContext } from '../category/page';

const CategoryList = () => {
    const { categories, updateCategory, deleteCategory } = useContext(CategoryContext) || {};
    const [editingId, setEditingId] = useState<number | null>(null); // ID danh mục đang chỉnh sửa
    const [newName, setNewName] = useState(''); // Tên mới khi chỉnh sửa

    const handleEdit = (category: { id: number; name: string }) => {
        setEditingId(category.id);
        setNewName(category.name);
    };

    const handleUpdate = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        if (updateCategory) {
            updateCategory(id, newName);
            setEditingId(null); // Kết thúc chế độ chỉnh sửa
        }
    };

    return (
        <div className="bg-white p-4 shadow-md rounded-md mt-4">
            <h3 className="text-xl font-bold mb-4">Danh sách Danh Mục</h3>
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Tên danh mục</th>
                        <th className="px-4 py-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {categories && categories.map(category => (
                        <tr key={category.id} className="border-t">
                            <td className="px-4 py-2">{category.id}</td>
                            <td className="px-4 py-2">
                                {editingId === category.id ? (
                                    <form onSubmit={(e) => handleUpdate(e, category.id)}>
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                            className="border p-1"
                                            required
                                        />
                                        <button type="submit" className="ml-2 bg-green-500 text-white px-2 py-1 rounded">
                                            Lưu
                                        </button>
                                    </form>
                                ) : (
                                    category.name
                                )}
                            </td>
                            <td className="px-4 py-2">
                                {editingId === category.id ? null : (
                                    <>
                                        <button
                                            onClick={() => handleEdit(category)}
                                            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            onClick={() => deleteCategory && deleteCategory(category.id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                        >
                                            Xóa
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;
