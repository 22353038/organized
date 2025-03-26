document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Product data (should match what's in main.js)
    const products = {
        '1': {
            title: "Canon EOS R6 Mirrorless Camera",
            price: "$195/day",
            description: "Professional mirrorless camera with 20MP sensor, 4K video, and advanced autofocus system.",
            specs: [
                "20.1MP Full-Frame CMOS Sensor",
                "4K UHD Video at 60fps",
                "Dual Pixel CMOS AF II",
                "5-axis In-body Stabilization",
                "Weather-sealed body"
            ],
            image: "../assets/images/CAMER.webp"
        },
        '2': {
            title: "Sony PlayStation 5",
            price: "$85/day",
            description: "Next-gen gaming console with ultra-high speed SSD and 4K graphics.",
            specs: [
                "4K UHD Resolution",
                "120Hz Refresh Rate",
                "825GB SSD Storage",
                "Ray Tracing Support",
                "DualSense Controller"
            ],
            image: "../assets/images/CONSOLE.webp"
        },
        // Add other products...
    };

    // Display product details
    if (productId && products[productId]) {
        const product = products[productId];
        const container = document.querySelector('.product-details-container');
        
        container.innerHTML = `
            <div class="product-details-modal">
                <div class="product-details-content">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <h2>${product.title}</h2>
                        <div class="product-price">${product.price}</div>
                        <p class="product-description">${product.description}</p>
                        <h3>Specifications:</h3>
                        <ul class="product-specs">
                            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                        <div class="product-actions">
                            <button class="btn rent-now">Rent Now</button>
                            <button class="btn add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Product not found
        document.querySelector('.product-details-container').innerHTML = `
            <div class="error-message">
                <h2>Product not found</h2>
                <a href="../index.html" class="btn">Back to Home</a>
            </div>
        `;
    }
});