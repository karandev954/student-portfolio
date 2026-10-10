
let cart = [];

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function updateCartUI() {
    const cartCountElement = document.getElementById('cartCount');
    const cartTotalElement = document.getElementById('cartTotal');
    const cartTotalDisplayElement = document.getElementById('cartTotalDisplay');
    const cartItemsList = document.getElementById('cartItemsList');

    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });

    cartCountElement.textContent = cart.length;
    cartTotalElement.textContent = total;
    cartTotalDisplayElement.textContent = total;

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li class="empty-msg">Your cart is currently empty.</li>';
    } else {

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.name}</span> <strong>$${item.price}</strong>`;
            cartItemsList.appendChild(li);
        });
    }
}