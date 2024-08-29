const arr = [{
    brand: 'Samsung',
    model: 'A10',
    ram: 3,
    rom: 31,
    camera: '25 megapixel',
    price: 19500,
    image: 'https://images.priceoye.pk/samsung-galaxy-a10-pakistan-priceoye-xnil8-500x500.webp'
}, 
{
    brand: 'Samsung',
    model: 'S20',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000,
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-1.jpg'
},
{
    brand: 'Xiomi',
    model: 'note10',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000,
    image: 'https://images.priceoye.pk/xiaomi-redmi-note-10-pro-pakistan-priceoye-t3r83-500x500.webp'
},
{
    brand: 'Infinix',
    model: 'z10',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000,
    image: 'https://gsm.ma/wp-content/uploads/2023/12/infinix-hot-40-1-1.jpg'
},
{
    brand: 'Iphone',
    model: '14',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000,
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg'
},
{
    brand: 'Oppo',
    model: 'F11',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000,
    image: 'https://media.pakprice.pk/740/Lx1xxNvkjE544xs94KWWV92Wr2m757KDc8i21CRE.jpeg'
},
{
    brand: 'Vivo',
    model: 'y20',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000,
    image: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y20-2021-1.jpg'
},
{
    brand: 'Samsung',
    model: 'a50',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000,
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50s-1.jpg'
}];

let cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
const cart = document.querySelector("#cart");

function renderCart() {
    cart.innerHTML = ''; 
    let totalAmount = 0; 

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        totalAmount += item.price * item.quantity; 

        cart.innerHTML += `
        <div class="card bg-dark text-light border-light mb-3" style="padding: 20px;">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center mb-3 mb-md-0">
                    <img src="${item.image}" class="img-fluid" alt="${item.brand} ${item.model}" style="max-height: 200px;">
                </div>
                <div class="col-12 col-md-8 col-lg-9">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1.5rem;">${item.brand} ${item.model}</h5>
                        <p class="d-flex align-items-center" style="font-size: 1.25rem;">
                            <span>Quantity:</span> 
                            <span class="btn btn-primary mx-2" onclick="updateQuantity(${i}, 'increment')">+</span> 
                            <span>${item.quantity}</span>
                            <span class="btn btn-danger mx-2" onclick="updateQuantity(${i}, 'decrement')">-</span>
                        </p>
                        <h5 class="card-title h6" style="font-size: 1.5rem;">Rs: ${item.price}</h5>
                        <button class="btn btn-danger mt-2" onclick="clearCart(${i})">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    cart.innerHTML += `
    <h1 class="card-title" style="font-size: 1.5rem; text-align: center;">Total Amount = Rs ${totalAmount}</h1> </br></br>
    `;
}


function clearCart(i) {
    cartItems.splice(i, 1); 
    localStorage.setItem("cartItem", JSON.stringify(cartItems)); 
    renderCart(); 
}

function updateQuantity(index, action) {
    if (action === 'increment') {
        cartItems[index].quantity += 1;
    } else if (action === 'decrement' && cartItems[index].quantity > 0) {
        cartItems[index].quantity -= 1;
    }
    localStorage.setItem("cartItem", JSON.stringify(cartItems)); // Update localStorage
    renderCart(); // Re-render the cart to reflect changes
}

renderCart();
