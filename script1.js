// script1.js

// Function to handle the add to cart action
function addToCart(productName, productPrice) {
    alert(`${productName} has been added to your cart! Price: $${productPrice}`);
}

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listeners to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the product name and price from the card
        const productCard = button.parentElement;
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = productCard.querySelector('p').innerText.replace('$', '');

        // Call the addToCart function
        addToCart(productName, productPrice);
    });
});
