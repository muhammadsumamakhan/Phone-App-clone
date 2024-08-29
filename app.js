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
}]

const div = document.querySelector("#phones");
for (let i = 0; i < arr.length; i++) {
    div.innerHTML += `

        <div class="card bg-dark text-light border-light" style="width: 18rem;">
             <img style="width: 18rem; height: 22rem;" src="${arr[i].image}" class="card-img-top" alt="${arr[i].brand} ${arr[i].model}">
            <div class="card-body">
                <h5 class="card-title">${arr[i].brand} ${arr[i].model}</h5>
                <h5 class="card-title h6">Rs: ${arr[i].price}</h5>
                <button class="btn btn-primary mt-2" onclick="addToCart(${i})">Add to cart</button>
            </div>
       </div>
    
    `
}



let cartItems = [];
function addToCart(index) {
    if (cartItems.includes(arr[index])) {
        arr[index].quantity += 1;
    }
    else {
        arr[index].quantity = 1
        cartItems.push(arr[index]);
    }
    console.log(cartItems);
}



const checkoutBtn = document.querySelector("#checkout-btn");
checkoutBtn.addEventListener("click", function() {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
    window.location = "checkout.html";
});
