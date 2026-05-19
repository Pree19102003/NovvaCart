
function login() {
  window.location.href = "login.html";
}
function register() {
  window.location.href = "register.html";
}
// Paste your large JSON array here
const allProducts = [

  {
    "id": 1,
    "name": "AeroTune Wireless Headphones",
    "category": "electronics",
    "price": 89.99,
    "rating": 4.7,
    "description": "Noise-isolating over-ear headphones with deep bass and 40-hour battery life.",
    "image": "https://loremflickr.com/600/450/wireless-headphones,product?lock=111"
  },
  {
    "id": 2,
    "name": "PulseFit Smart Watch",
    "category": "electronics",
    "price": 129.99,
    "rating": 4.6,
    "description": "Fitness-ready smartwatch with heart tracking, GPS, and water resistance.",
    "image": "https://loremflickr.com/600/450/smartwatch,product?lock=102"
  },
  {
    "id": 3,
    "name": "VoltX Bluetooth Speaker",
    "category": "electronics",
    "price": 54.5,
    "rating": 4.4,
    "description": "Portable waterproof speaker with rich stereo audio and quick pairing.",
    "image": "https://loremflickr.com/600/450/bluetooth-speaker,product?lock=103"
  },
  {
    "id": 4,
    "name": "CoreBook Slim Laptop",
    "category": "electronics",
    "price": 799,
    "rating": 4.8,
    "description": "Lightweight laptop with fast SSD storage, vivid display, and all-day power.",
    "image": "https://loremflickr.com/600/450/laptop,product?lock=104"
  },
  {
    "id": 5,
    "name": "SnapShot Mirrorless Camera",
    "category": "electronics",
    "price": 649,
    "rating": 4.5,
    "description": "Compact camera body built for sharp travel photos and smooth video.",
    "image": "https://loremflickr.com/600/450/camera,product?lock=105"
  },
  {
    "id": 6,
    "name": "RapidCharge Power Bank",
    "category": "electronics",
    "price": 39.95,
    "rating": 4.3,
    "description": "High-capacity power bank with dual USB-C ports and fast charging.",
    "image": "https://loremflickr.com/600/450/power-bank,product?lock=106"
  },
  {
    "id": 7,
    "name": "TypeFlow Mechanical Keyboard",
    "category": "electronics",
    "price": 109.99,
    "rating": 4.7,
    "description": "Hot-swappable keyboard with tactile switches and white backlighting.",
    "image": "https://loremflickr.com/600/450/mechanical-keyboard,product?lock=107"
  },
  {
    "id": 8,
    "name": "GlidePro Wireless Mouse",
    "category": "electronics",
    "price": 44.99,
    "rating": 4.2,
    "description": "Ergonomic mouse with silent clicks, precision tracking, and USB-C charging.",
    "image": "https://loremflickr.com/600/450/wireless-mouse,product?lock=108"
  },
  {
    "id": 9,
    "name": "ViewMax 4K Monitor",
    "category": "electronics",
    "price": 329,
    "rating": 4.6,
    "description": "27-inch 4K monitor with crisp color, slim bezels, and height adjustment.",
    "image": "https://loremflickr.com/600/450/computer-monitor,product?lock=109"
  },
  {
    "id": 10,
    "name": "StreamCam HD Webcam",
    "category": "electronics",
    "price": 69,
    "rating": 4.1,
    "description": "Full HD webcam with autofocus and clear built-in microphone.",
    "image": "https://loremflickr.com/600/450/webcam,product?lock=110"
  },
  {
    "id": 11,
    "name": "UrbanFlex Denim Jacket",
    "category": "fashion",
    "price": 74.99,
    "rating": 4.5,
    "description": "Classic denim jacket with a tailored fit and durable metal buttons.",
    "image": "https://loremflickr.com/600/450/denim-jacket,product?lock=111"
  },
  {
    "id": 12,
    "name": "Essential Cotton T-Shirt",
    "category": "fashion",
    "price": 19.99,
    "rating": 4.2,
    "description": "Soft daily t-shirt made from breathable combed cotton.",
    "image": "https://loremflickr.com/600/450/t-shirt,product?lock=112"
  },
  {
    "id": 13,
    "name": "StrideLite Running Shoes",
    "category": "fashion",
    "price": 99.95,
    "rating": 4.8,
    "description": "Responsive running shoes with cushioned support and breathable mesh.",
    "image": "https://loremflickr.com/600/450/running-shoes,product?lock=113"
  },
  {
    "id": 14,
    "name": "Metro Leather Wallet",
    "category": "fashion",
    "price": 34.5,
    "rating": 4.4,
    "description": "Slim genuine leather wallet with RFID-blocking card slots.",
    "image": "https://loremflickr.com/600/450/leather-wallet,product?lock=114"
  },
  {
    "id": 15,
    "name": "Everyday Canvas Backpack",
    "category": "fashion",
    "price": 58,
    "rating": 4.6,
    "description": "Durable backpack with laptop sleeve and weather-resistant canvas.",
    "image": "https://loremflickr.com/600/450/canvas-backpack,product?lock=115"
  },
  {
    "id": 16,
    "name": "Luxe Round Sunglasses",
    "category": "fashion",
    "price": 42,
    "rating": 4.1,
    "description": "Lightweight sunglasses with polarized lenses and metal frames.",
    "image": "https://loremflickr.com/600/450/sunglasses,product?lock=116"
  },
  {
    "id": 17,
    "name": "Classic Analog Watch",
    "category": "fashion",
    "price": 119,
    "rating": 4.7,
    "description": "Minimal analog watch with stainless case and leather strap.",
    "image": "https://loremflickr.com/600/450/analog-watch,product?lock=117"
  },
  {
    "id": 18,
    "name": "TrailGuard Rain Jacket",
    "category": "fashion",
    "price": 88.75,
    "rating": 4.3,
    "description": "Packable rain jacket with sealed seams and adjustable hood.",
    "image": "https://loremflickr.com/600/450/rain-jacket,product?lock=118"
  },
  {
    "id": 19,
    "name": "SoftKnit Winter Scarf",
    "category": "fashion",
    "price": 24.99,
    "rating": 4.2,
    "description": "Warm knit scarf with a soft hand feel and clean edge finish.",
    "image": "https://loremflickr.com/600/450/winter-scarf,product?lock=119"
  },
  {
    "id": 20,
    "name": "ComfortFit Chinos",
    "category": "fashion",
    "price": 49.99,
    "rating": 4.5,
    "description": "Stretch chinos with a modern cut for office and weekend wear.",
    "image": "https://loremflickr.com/600/450/chinos-pants,product?lock=120"
  },
  {
    "id": 21,
    "name": "BrewCraft Coffee Maker",
    "category": "home",
    "price": 84,
    "rating": 4.6,
    "description": "Programmable coffee maker with thermal carafe and bold brew mode.",
    "image": "https://loremflickr.com/600/450/coffee-maker,product?lock=121"
  },
  {
    "id": 22,
    "name": "PureMist Air Purifier",
    "category": "home",
    "price": 149,
    "rating": 4.7,
    "description": "Quiet purifier with HEPA filtration for bedrooms and workspaces.",
    "image": "https://loremflickr.com/600/450/air-purifier,product?lock=122"
  },
  {
    "id": 23,
    "name": "GlowNest Table Lamp",
    "category": "home",
    "price": 36.99,
    "rating": 4.4,
    "description": "Modern table lamp with warm dimming and compact ceramic base.",
    "image": "https://loremflickr.com/600/450/table-lamp,product?lock=123"
  },
  {
    "id": 24,
    "name": "CloudRest Memory Pillow",
    "category": "home",
    "price": 45.5,
    "rating": 4.3,
    "description": "Contoured memory foam pillow designed for neck support.",
    "image": "https://loremflickr.com/600/450/memory-pillow,product?lock=124"
  },
  {
    "id": 25,
    "name": "ChefLine Knife Set",
    "category": "home",
    "price": 79.95,
    "rating": 4.8,
    "description": "Stainless knife set with block, sharp edges, and balanced handles.",
    "image": "https://loremflickr.com/600/450/kitchen-knife-set,product?lock=125"
  },
  {
    "id": 26,
    "name": "FreshSeal Food Containers",
    "category": "home",
    "price": 29.99,
    "rating": 4.1,
    "description": "Stackable airtight containers for meal prep and pantry storage.",
    "image": "https://loremflickr.com/600/450/food-containers,product?lock=126"
  },
  {
    "id": 27,
    "name": "AquaSteel Water Bottle",
    "category": "home",
    "price": 22.5,
    "rating": 4.6,
    "description": "Insulated stainless bottle that keeps drinks cold for 24 hours.",
    "image": "https://loremflickr.com/600/450/water-bottle,product?lock=127"
  },
  {
    "id": 28,
    "name": "TidyPro Desk Organizer",
    "category": "home",
    "price": 18.99,
    "rating": 4.2,
    "description": "Compact organizer with compartments for stationery and notes.",
    "image": "https://loremflickr.com/600/450/desk-organizer,product?lock=128"
  },
  {
    "id": 29,
    "name": "Woven Cotton Throw",
    "category": "home",
    "price": 39,
    "rating": 4.5,
    "description": "Textured cotton throw blanket for sofas, beds, and reading chairs.",
    "image": "https://loremflickr.com/600/450/throw-blanket,product?lock=129"
  },
  {
    "id": 30,
    "name": "Stoneware Dinner Set",
    "category": "home",
    "price": 96,
    "rating": 4.7,
    "description": "Sixteen-piece stoneware dinner set with dishwasher-safe finish.",
    "image": "https://loremflickr.com/600/450/dinnerware-set,product?lock=130"
  },
  {
    "id": 31,
    "name": "HydraFresh Face Serum",
    "category": "beauty",
    "price": 27.99,
    "rating": 4.4,
    "description": "Hydrating serum with hyaluronic acid for a smooth daily glow.",
    "image": "https://loremflickr.com/600/450/face-serum,product?lock=131"
  },
  {
    "id": 32,
    "name": "Velvet Matte Lipstick",
    "category": "beauty",
    "price": 14.5,
    "rating": 4.2,
    "description": "Long-wear lipstick with rich pigment and comfortable matte finish.",
    "image": "https://loremflickr.com/600/450/lipstick,product?lock=132"
  },
  {
    "id": 33,
    "name": "Botanical Shampoo",
    "category": "beauty",
    "price": 18,
    "rating": 4.3,
    "description": "Gentle shampoo made with botanical extracts for everyday cleansing.",
    "image": "https://loremflickr.com/600/450/shampoo,product?lock=133"
  },
  {
    "id": 34,
    "name": "SilkCare Hair Dryer",
    "category": "beauty",
    "price": 62,
    "rating": 4.5,
    "description": "Lightweight dryer with ionic airflow and multiple heat settings.",
    "image": "https://loremflickr.com/600/450/hair-dryer,product?lock=134"
  },
  {
    "id": 35,
    "name": "CalmWave Diffuser",
    "category": "beauty",
    "price": 32.99,
    "rating": 4.6,
    "description": "Aroma diffuser with quiet mist output and soft ambient light.",
    "image": "https://loremflickr.com/600/450/aroma-diffuser,product?lock=135"
  },
  {
    "id": 36,
    "name": "Mineral Sunscreen SPF 50",
    "category": "beauty",
    "price": 21.99,
    "rating": 4.4,
    "description": "Lightweight mineral sunscreen with broad-spectrum protection.",
    "image": "https://loremflickr.com/600/450/sunscreen,product?lock=136"
  },
  {
    "id": 37,
    "name": "Daily Repair Hand Cream",
    "category": "beauty",
    "price": 11.99,
    "rating": 4.1,
    "description": "Fast-absorbing hand cream with shea butter and vitamin E.",
    "image": "https://loremflickr.com/600/450/hand-cream,product?lock=137"
  },
  {
    "id": 38,
    "name": "Precision Grooming Kit",
    "category": "beauty",
    "price": 48.5,
    "rating": 4.5,
    "description": "Rechargeable grooming kit with multiple trimming attachments.",
    "image": "https://loremflickr.com/600/450/grooming-kit,product?lock=138"
  },
  {
    "id": 39,
    "name": "Rose Clay Face Mask",
    "category": "beauty",
    "price": 16.75,
    "rating": 4.2,
    "description": "Creamy clay mask that refreshes skin without over-drying.",
    "image": "https://loremflickr.com/600/450/face-mask-skincare,product?lock=139"
  },
  {
    "id": 40,
    "name": "Citrus Eau de Parfum",
    "category": "beauty",
    "price": 59,
    "rating": 4.7,
    "description": "Fresh citrus fragrance with warm cedar and amber notes.",
    "image": "https://loremflickr.com/600/450/perfume-bottle,product?lock=140"
  },
  {
    "id": 41,
    "name": "FlexCore Yoga Mat",
    "category": "sports",
    "price": 35,
    "rating": 4.6,
    "description": "Non-slip yoga mat with cushioned support and easy-carry strap.",
    "image": "https://loremflickr.com/600/450/yoga-mat,product?lock=141"
  },
  {
    "id": 42,
    "name": "IronGrip Dumbbell Set",
    "category": "sports",
    "price": 119.99,
    "rating": 4.8,
    "description": "Adjustable dumbbell set for strength training at home.",
    "image": "https://loremflickr.com/600/450/dumbbells,product?lock=142"
  },
  {
    "id": 43,
    "name": "TrailRun Hydration Pack",
    "category": "sports",
    "price": 64,
    "rating": 4.4,
    "description": "Light running pack with water reservoir and secure pockets.",
    "image": "https://loremflickr.com/600/450/hydration-pack,product?lock=143"
  },
  {
    "id": 44,
    "name": "SpinPro Cycling Helmet",
    "category": "sports",
    "price": 72.5,
    "rating": 4.5,
    "description": "Ventilated cycling helmet with adjustable fit dial and visor.",
    "image": "https://loremflickr.com/600/450/cycling-helmet,product?lock=144"
  },
  {
    "id": 45,
    "name": "MatchPoint Tennis Racket",
    "category": "sports",
    "price": 98,
    "rating": 4.3,
    "description": "Balanced tennis racket for controlled swings and confident returns.",
    "image": "https://loremflickr.com/600/450/tennis-racket,product?lock=145"
  },
  {
    "id": 46,
    "name": "WaveRider Swim Goggles",
    "category": "sports",
    "price": 24,
    "rating": 4.1,
    "description": "Anti-fog swim goggles with UV protection and comfortable seal.",
    "image": "https://loremflickr.com/600/450/swim-goggles,product?lock=146"
  },
  {
    "id": 47,
    "name": "CampLite LED Lantern",
    "category": "outdoor",
    "price": 31.99,
    "rating": 4.5,
    "description": "Rechargeable camping lantern with bright output and hanging hook.",
    "image": "https://loremflickr.com/600/450/camping-lantern,product?lock=147"
  },
  {
    "id": 48,
    "name": "Summit Trekking Poles",
    "category": "outdoor",
    "price": 56,
    "rating": 4.4,
    "description": "Collapsible trekking poles with cork grips and carbide tips.",
    "image": "https://loremflickr.com/600/450/trekking-poles,product?lock=148"
  },
  {
    "id": 49,
    "name": "BaseCamp Sleeping Bag",
    "category": "outdoor",
    "price": 87.99,
    "rating": 4.7,
    "description": "Three-season sleeping bag with warm fill and compression sack.",
    "image": "https://loremflickr.com/600/450/sleeping-bag,product?lock=149"
  },
  {
    "id": 50,
    "name": "Rover Stainless Multi Tool",
    "category": "outdoor",
    "price": 38.5,
    "rating": 4.6,
    "description": "Compact stainless multi tool with pliers, drivers, blade, and opener.",
    "image": "https://loremflickr.com/600/450/multi-tool,product?lock=150"
  }
];

let filteredItems = [...allProducts];
let cart = [];
let currentPage = 1;
const limit = 10;

const productGrid = document.getElementById('product-grid');
const paginationContainer = document.getElementById('pagination');

// --- 1. INITIAL RENDER ---
function init() {
  renderGrid();
}

// --- 2. RENDER THE PRODUCT GRID ---
function renderGrid() {
  const start = (currentPage - 1) * limit;
  const end = start + limit;
  const slice = filteredItems.slice(start, end);

  productGrid.innerHTML = slice.map(p => `
        <div class="card">
            <img src="${p.image}" alt="${p.name}">
            <div class="tag-row">
                <span class="tag">${p.category}</span>
                <span class="rating">⭐ ${p.rating}</span>
            </div>
            <h3>${p.name}</h3>
            
            <p class="product-desc">${p.description.slice(0, 85)}...</p>
            
            <div class="price-row">
                <span class="price">$${p.price.toFixed(2)}</span>
                <button class="add-btn" onclick="addToCart(${p.id})">
                    <i class="fa-solid fa-bag-shopping"></i> Add
                </button>
            </div>
        </div>
    `).join('');

  renderPagination();

  // Update the "Showing X-Y of Z" text
  const showingText = document.getElementById('showing-text');
  if (showingText) {
    showingText.innerText = `Showing ${start + 1}-${Math.min(end, filteredItems.length)} of ${filteredItems.length} products`;
  }
}

//search
// 1. Toggle Search Input visibility
function toggleSearch() {
  const container = document.getElementById('search-input-container');
  const input = document.getElementById('search-input');

  container.classList.toggle('active');

  if (container.classList.contains('active')) {
    input.focus(); // Automatically place cursor in box
  } else {
    input.value = ""; // Clear text when closing
    handleSearch();   // Reset grid to show all
  }
}

// 2. Filter logic combining Search + Category
// function handleSearch() {
//   const searchTerm = document.getElementById('search-input').value.toLowerCase();
//   const selectedCategory = document.getElementById('category-filter').value.toLowerCase();

//   filteredItems = allProducts.filter(product => {
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm);
//     const matchesCategory = (selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory);

//     return matchesSearch && matchesCategory;
//   });

//   currentPage = 1; // Always reset to first page when filtering
//   renderGrid();
// }

function handleSearch() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const selectedCategory = document.getElementById('category-filter').value.toLowerCase();
  const sortBy = document.getElementById('sort-filter').value;

  // Step 1: Filter by Search Term and Category first
  let tempProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = (selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  // Step 2: Sort the filtered array based on the dropdown selection
  if (sortBy === 'low-high') {
    // Sort array by price ascending
    tempProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-low') {
    // Sort array by price descending
    tempProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'featured') {
    // Optional: Reset to standard default arrangement (e.g., sorted by ID)
    tempProducts.sort((a, b) => a.id - b.id);
  }

  // Step 3: Assign the perfectly sorted & filtered items back to your global display variable
  filteredItems = tempProducts;

  currentPage = 1; // Always reset to the first page when filters or sorts change
  renderGrid();    // Update the UI card container
}

// 3. Make sure your category dropdown also triggers the combined search
function filterProducts() {
  handleSearch();
}
// --- 3. PAGINATION CONTROLS ---
function renderPagination() {
  const totalPages = Math.ceil(filteredItems.length / limit);
  let btns = `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Prev</button>`;

  for (let i = 1; i <= totalPages; i++) {
    btns += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
  }

  btns += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>`;
  paginationContainer.innerHTML = btns;
}

function changePage(p) {
  currentPage = p;
  renderGrid();
  window.scrollTo({ top: 500, behavior: 'smooth' });
}

// --- 4. CATEGORY FILTERING ---
function filterProducts() {
  const selectedCategory = document.getElementById('category-filter').value;

  if (selectedCategory === 'all') {
    filteredItems = [...allProducts];
  } else {
    filteredItems = allProducts.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
  }

  currentPage = 1; // Reset to page 1 whenever filter changes
  renderGrid();
}

// --- 5. CART LOGIC ---
function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('open');
  document.getElementById('cart-overlay').classList.toggle('show');
}

function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  const inCart = cart.find(item => item.id === id);

  if (inCart) {
    inCart.qty++;
  } else {
    // Use .name because your new API uses "name" instead of "title"
    cart.push({ ...product, title: product.name, qty: 1 });
  }

  updateCartUI();

  // Open sidebar automatically on first add
  const sidebar = document.getElementById('cart-sidebar');
  if (!sidebar.classList.contains('open')) toggleCart();
}

function updateCartUI() {
  const list = document.getElementById('cart-list');
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);

  document.getElementById('cart-count-val').innerText = totalCount;
  document.getElementById('item-qty-text').innerText = `${totalCount} items`;

  list.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}">
            <div class="item-info">
                <h4>${item.title}</h4>
                <div class="qty-wrap">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <strong>$${(item.price * item.qty).toFixed(2)}</strong>
             <button class="delete-item" onclick="deleteItem(${item.id})">
            <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>
    `).join('');


  const sub = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = sub > 0 ? 8.50 : 0;

  document.getElementById('sub-total').innerText = `$${sub.toFixed(2)}`;
  document.getElementById('shipping-total').innerText = `$${shipping.toFixed(2)}`;
  document.getElementById('final-total').innerText = `$${(sub + shipping).toFixed(2)}`;

  // Disable checkout if cart is empty
  document.getElementById('checkout-btn').disabled = cart.length === 0;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty < 1) {
      cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
  }
}
  function deleteItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
  }
function clearcart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCartUI();
}

// Start the application
init();