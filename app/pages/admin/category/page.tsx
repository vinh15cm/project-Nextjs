"use client"; // Đảm bảo đây là Client Component

import React, { createContext, useState, ReactNode } from 'react';

// Kiểu dữ liệu cho một danh mục
interface Category {
  id: number;
  name: string;
}

// Kiểu dữ liệu cho context
interface CategoryContextType {
  categories: Category[];
  addCategory: (category: Category) => void;
  updateCategory: (id: number, newName: string) => void;
  deleteCategory: (id: number) => void;
}

// Tạo CategoryContext
export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  // Thêm danh mục mới
  const addCategory = (category: Category) => {
    setCategories([...categories, category]);
  };

  // Sửa tên danh mục
  const updateCategory = (id: number, newName: string) => {
    setCategories(categories.map(category =>
      category.id === id ? { ...category, name: newName } : category
    ));
  };

  // Xóa danh mục
  const deleteCategory = (id: number) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory, updateCategory, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
