document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            if (currentScroll > lastScroll) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, productName, productPrice) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification('Товар добавлен в корзину!');
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    updateCartCounter();
}

function updateCartCounter() {
    const counter = document.getElementById('cart-counter');
    if (counter) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        counter.textContent = totalItems;
        counter.style.display = totalItems > 0 ? 'inline' : 'none';
    }
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </td>
                <td>${item.price} грн</td>
                <td>${itemTotal} грн</td>
                <td><button onclick="removeFromCart(${item.id})" class="btn btn-primary">Удалить</button></td>
            `;
            cartItems.appendChild(row);
        });
        
        if (cartTotal) {
            cartTotal.textContent = total + ' грн';
        }
    }
}

function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function filterProducts() {
    const category = document.getElementById('category-filter')?.value;
    const brand = document.getElementById('brand-filter')?.value;
    
    console.log('Filter by:', { category, brand });
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    
    const name = document.getElementById('customer-name')?.value;
    const phone = document.getElementById('customer-phone')?.value;
    const address = document.getElementById('customer-address')?.value;
    
    if (!name || !phone || !address) {
        alert('Заполните все поля!');
        return;
    }
    
    alert('Заказ оформлен! С вами свяжутся для подтверждения.');
    cart = [];
    updateCart();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCounter();
    updateCartUI();
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});