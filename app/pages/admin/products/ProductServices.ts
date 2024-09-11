export async function getProducts() {
    // Gửi yêu cầu lấy danh sách sản phẩm từ API
    const response = await fetch('/api/products');
    const products = await response.json();
    return products;
}

export async function getProductById(id: string) {
    // Gửi yêu cầu lấy thông tin sản phẩm theo id
    const response = await fetch(`/api/products/${id}`);
    const product = await response.json();
    return product;
}

export async function updateProduct(product: any) {
    // Gửi yêu cầu cập nhật sản phẩm
    await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
}

export async function deleteProduct(id: string) {
    // Gửi yêu cầu xóa sản phẩm
    await fetch(`/api/products/${id}`, {
        method: 'DELETE',
    });
}
