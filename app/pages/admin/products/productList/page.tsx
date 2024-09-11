import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../ProductServices'; // Giả sử bạn có service để xử lý API

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // Load danh sách sản phẩm từ API
    useEffect(() => {
        async function fetchProducts() {
            const productList = await getProducts();
            setProducts(productList);
        }
        fetchProducts();
    }, []);

    // Hàm xóa sản phẩm
    const handleDelete = async (productId: string) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            await deleteProduct(productId);  // Xóa sản phẩm qua API
            setProducts(products.filter((product) => product.id !== productId)); // Cập nhật danh sách sản phẩm
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Danh sách sản phẩm</h1>

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Tên sản phẩm</th>
                        <th className="border px-4 py-2">Giá</th>
                        <th className="border px-4 py-2">Danh mục</th>
                        <th className="border px-4 py-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="border px-4 py-2">{product.name}</td>
                            <td className="border px-4 py-2">{product.price}</td>
                            <td className="border px-4 py-2">{product.category}</td>
                            <td className="border px-4 py-2">
                                {/* Nút sửa */}
                                <button
                                    onClick={() => window.location.href = `/admin/edit-product/${product.id}`}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                                >
                                    Sửa
                                </button>

                                {/* Nút xóa */}
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
