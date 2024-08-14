// Basic interactivity for adding products to the cart
let cartCount = 0;

document.querySelectorAll('.product-item .btn').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart').textContent = `Cart (${cartCount})`;
        showNotification('Product added to cart!');
    });
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Quick View Modal
document.querySelectorAll('.product-hover .btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const productItem = button.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        const productImageSrc = productItem.querySelector('img').src;
        const productPrice = productItem.querySelector('p').textContent;

        openQuickView(productName, productImageSrc, productPrice);
    });
});

function openQuickView(name, imageSrc, price) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${imageSrc}" alt="${name}">
            <h2>${name}</h2>
            <p>${price}</p>
            <button class="btn primary-btn">Add to Cart</button>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}
