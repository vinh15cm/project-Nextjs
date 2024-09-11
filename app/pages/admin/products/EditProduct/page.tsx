import React, { useState, useEffect } from 'react';
import { getProductById, updateProduct } from '../ProductServices'; // Giả sử có service để xử lý API
import { useRouter } from 'next/router';

const EditProduct = ({ params }) => {
    const [product, setProduct] = useState({ name: '', price: '', category: '' });
    const router = useRouter();

    useEffect(() => {
        async function fetchProduct() {
            const productData = await getProductById(params.id); // Lấy sản phẩm hiện tại qua id
            setProduct(productData);
        }
        fetchProduct();
    }, [params.id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateProduct(product);  // Cập nhật sản phẩm qua API
        router.push('/admin/products');  // Điều hướng lại trang danh sách sản phẩm
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Chỉnh sửa sản phẩm</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Giá</label>
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Danh mục</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                    Lưu thay đổi
                </button>
            </form>
        </div>
    );
};

export default EditProduct;
