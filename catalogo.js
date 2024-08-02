// catalog.js

// Función para agregar un producto al carrito
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Producto añadido al carrito");
    } else {
        alert("El producto ya está en el carrito");
    }
}

// Puedes agregar más funciones relacionadas con el catálogo aquí
