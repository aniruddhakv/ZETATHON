// Retrieve cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add product to cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1,
    };

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if product is already in the cart
    } else {
        cart.push(product);
    }

    // Save the updated cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart UI
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');

    // Clear the previous cart items
    cartItemsContainer.innerHTML = '';

    // Display the updated cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Quantity: ${item.quantity} - Price: ${item.price * item.quantity} Rs`;
        cartItemsContainer.appendChild(listItem);
    });
}

// Function to add product to cart when Buy Now is clicked
function buyNow(productName, productPrice) {
    addToCart(productName, productPrice);
    alert('Product added to cart!');
}

// Initialize the cart UI
updateCartUI();
