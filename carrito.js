// Ejemplo de productos en el carrito
const cartItems = [
    { id: 1, name: "fertilizante", price: 49.99, quantity: 1, image: "https://via.placeholder.com/100" },
    { id: 2, name: "semillas", price: 39.99, quantity: 2, image: "https://via.placeholder.com/100" },
    { id: 3, name: "herramientas", price: 129.99, quantity: 1, image: "https://via.placeholder.com/100" }
];

function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        total += item.price * item.quantity;

        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-info">
                <p><strong>${item.name}</strong></p>
                <p>Precio: $${item.price.toFixed(2)}</p>
            </div>
            <div class="item-quantity">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value - ${item.quantity})">
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <div class="item-total">
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });

    document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
}

function updateQuantity(itemId, change) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        renderCart();
    }
}

function checkout() {
    alert("Procediendo al pago...");
    // Aquí puedes añadir la lógica para procesar el pago
}

// Cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', renderCart);
