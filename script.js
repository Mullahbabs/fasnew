document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");

  const prevButton = document.querySelector(".prev-button");

  const nextButton = document.querySelector(".next-button");

  const indicatorsContainer = document.querySelector(".carousel-indicators");

  const slides = [
    {
      title: "Discover Your Signature Style",

      subtitle: "Unleash your creativity with our diverse collections.",

      image: "images/bg.png",
    },

    {
      title: "Connect with Local Artisans",

      subtitle: "Find the perfect tailor or designer for your next project.",

      image: "images/bg2.jpg",
    },

    {
      title: "Experience Virtual Fashion Shows",

      subtitle: "Front-row seats to the latest runway trends.",

      image: "images/bg3.jpg",
    },
  ];

  let currentSlide = 0;

  let autoPlayInterval; // Function to render carousel slides and indicators

  function renderSlides() {
    carouselInner.innerHTML = "";

    indicatorsContainer.innerHTML = "";

    slides.forEach((slide, index) => {
      const slideItem = document.createElement("div");

      slideItem.classList.add("carousel-item");

      if (index === currentSlide) {
        slideItem.classList.add("active");
      }

      slideItem.style.backgroundImage = `url('${slide.image}')`;

      slideItem.innerHTML = `

        <div class="carousel-content">

          <h1>${slide.title}</h1>

          <p>${slide.subtitle}</p>

        </div>

      `;

      carouselInner.appendChild(slideItem);

      const indicator = document.createElement("span");

      indicator.classList.add("indicator");

      if (index === currentSlide) {
        indicator.classList.add("active");
      }

      indicator.addEventListener("click", () => {
        goToSlide(index);

        stopAutoPlay();
      });

      indicatorsContainer.appendChild(indicator);
    });
  } // Function to update carousel position

  function updateCarousel() {
    const items = document.querySelectorAll(".carousel-item");

    const indicators = document.querySelectorAll(".indicator");

    items.forEach((item, index) => {
      item.classList.remove("active");

      if (index === currentSlide) {
        setTimeout(() => {
          item.classList.add("active");
        }, 10);
      }
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide);
    });
  } // Function to go to a specific slide

  function goToSlide(index) {
    currentSlide = index;

    updateCarousel();
  } // Autoplay functionality

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;

      updateCarousel();
    }, 5000); // Change slide every 5 seconds
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  } // Event listeners for carousel controls

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;

    updateCarousel();

    stopAutoPlay();
  });

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    updateCarousel();

    stopAutoPlay();
  }); // Pause on hover

  carouselInner.addEventListener("mouseenter", stopAutoPlay);

  carouselInner.addEventListener("mouseleave", startAutoPlay); // Initial render and start autoplay

  renderSlides();

  startAutoPlay(); // Dark Mode Toggle (existing code, unchanged)

  const darkModeToggle = document.getElementById("dark-mode-toggle");

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");

      darkModeToggle.textContent = "🌙";
    } else {
      localStorage.setItem("theme", "light");

      darkModeToggle.textContent = "💡";
    }
  });

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    darkModeToggle.textContent = "🌙";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".nav-mobile");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll(".nav-item a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      if (
        !e.target.closest(".nav-mobile") &&
        !e.target.closest(".mobile-menu-toggle")
      ) {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize wishlist and cart
  const wishlist = [];
  const cart = [];

  //product data in Naira (₦)
  const products = {
    men: [
      {
        id: "m1",
        name: "Men's Classic T-Shirt",
        price: 12500,
        image: "images/menstee.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description:
          "Premium quality cotton t-shirt with a classic fit. Available in multiple colors.",
        category: "men",
      },
      {
        id: "m2",
        name: "Slim Fit Jeans",
        price: 29999,
        image: "images/slimfit.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description:
          "Stylish slim fit jeans with stretch technology for comfort.",
        category: "men",
      },
      {
        id: "m3",
        name: "Casual Blazer",
        price: 45000,
        image: "images/blazer.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description:
          "Lightweight blazer perfect for casual and semi-formal occasions.",
        category: "men",
      },
      {
        id: "m4",
        name: "Running Shoes",
        price: 39999,
        image: "images/shoes.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "High-performance running shoes with cushioned soles.",
        category: "men",
      },
      {
        id: "m5",
        name: "Leather Belt",
        price: 9999,
        image: "images/belt.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Pure Italian Leather Belt In 5 colors.",
        category: "men",
      },
      {
        id: "m6",
        name: "Classic Long Sleeve Shirt",
        price: 28000,
        image: "images/long.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "High-quality long sleeve shirts.",
        category: "men",
      },
    ],
    women: [
      {
        id: "w1",
        name: "Women's Summer Dress",
        price: 22999,
        image: "images/womendress.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Light and airy summer dress with floral pattern.",
        category: "women",
      },
      {
        id: "w2",
        name: "High-Waisted Jeans",
        price: 25000,
        image: "images/highwaist.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Comfortable high-waisted jeans with a flattering fit.",
        category: "women",
      },
      {
        id: "w3",
        name: "Knit Sweater",
        price: 19999,
        image: "images/knit.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Cozy knit sweater perfect for cooler days.",
        category: "women",
      },
      {
        id: "w4",
        name: "Ankle Boots",
        price: 34999,
        image: "images/womenboots.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Stylish ankle boots with a comfortable heel.",
        category: "women",
      },
      {
        id: "w5",
        name: "Floral Blouse",
        price: 34999,
        image: "images/floral.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Stylish blouse with a comfortable cotton.",
        category: "women",
      },
      {
        id: "w6",
        name: "Ankle Boots",
        price: 34999,
        image: "images/womenboots.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Stylish ankle boots with a comfortable heel.",
        category: "women",
      },
    ],
    accessories: [
      {
        id: "a1",
        name: "Leather Wallet",
        price: 15000,
        image: "images/wallet.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Genuine leather wallet with multiple card slots.",
        category: "accessories",
      },
      {
        id: "a2",
        name: "Aviator Sunglasses",
        price: 18000,
        image: "images/sunglasses.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Classic aviator sunglasses with UV protection.",
        category: "accessories",
      },
      {
        id: "a3",
        name: "Smart Watch",
        price: 65000,
        image: "images/smartwatch.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Feature-packed smartwatch with fitness tracking.",
        category: "accessories",
      },
      {
        id: "a4",
        name: "Canvas Backpack",
        price: 24999,
        image: "images/backpack.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Durable canvas backpack with laptop compartment.",
        category: "accessories",
      },
      {
        id: "a5",
        name: "Ray-Ban Sunglasses",
        price: 24999,
        image: "images/rayban.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Spotlight rayban fire.",
        category: "accessories",
      },
      {
        id: "a6",
        name: "Ball Pearl Earrings",
        price: 24999,
        image: "images/earring.jpg",
        vendor: "Premium Apparel Co.",
        rating: 4.5,
        reviewCount: 128,
        description: "Multipurpose ball earrings.",
        category: "accessories",
      },
    ],
    femalefashion: [
      {
        id: "wf4",
        name: "African Print Jumpsuit",
        price: 18990, // ₦18,990
        image: "images/women-jumpsuit.jpg",
        vendor: "AfroChic",
        rating: 4.8,
        reviewCount: 156,
        description: "Vibrant Ankara print jumpsuit with adjustable waist tie.",
        category: "women",
      },
      {
        id: "wf5",
        name: "Silk Camisole Top",
        price: 8990, // ₦8,990
        image: "images/women-top.jpg",
        vendor: "Luxe Styles NG",
        rating: 4.3,
        reviewCount: 98,
        description: "Luxurious silk camisole with delicate lace trim.",
        category: "women",
      },
      {
        id: "wf6",
        name: "Pleated Midi Skirt",
        price: 11990, // ₦11,990
        image: "images/women-skirt.jpg",
        vendor: "Urban Trends",
        rating: 4.4,
        reviewCount: 201,
        description: "Versatile pleated skirt that pairs well with any top.",
        category: "women",
      },
      {
        id: "wf7",
        name: "Kaftan Dress",
        price: 14990, // ₦14,990
        image: "images/women-kaftan.jpg",
        vendor: "AfroChic",
        rating: 4.7,
        reviewCount: 187,
        description:
          "Breathable cotton kaftan with intricate embroidery details.",
        category: "women",
      },
      {
        id: "wf8",
        name: "Leather Crossbody Bag",
        price: 17990, // ₦17,990
        image: "images/women-bag.jpg",
        vendor: "Accessory Haven",
        rating: 4.6,
        reviewCount: 276,
        description:
          "Genuine leather bag with adjustable strap and multiple compartments.",
        category: "women",
      },
      {
        id: "wf9",
        name: "Block Heel Sandals",
        price: 15990, // ₦15,990
        image: "images/women-shoes.jpeg",
        vendor: "Sole Comfort",
        rating: 4.5,
        reviewCount: 312,
        description: "Comfortable 3-inch block heels with cushioned footbed.",
        category: "women",
      },
      {
        id: "wf10",
        name: "Wrap Dress",
        price: 13990, // ₦13,990
        image: "images/women-wrap-dress.jpg",
        vendor: "Luxe Styles NG",
        rating: 4.8,
        reviewCount: 224,
        description: "Flattering wrap dress that suits all body types.",
        category: "women",
      },
      {
        id: "wf11",
        name: "Turtleneck Sweater",
        price: 12990, // ₦12,990
        image: "images/women-sweater.jpg",
        vendor: "Winter Comfort",
        rating: 4.4,
        reviewCount: 143,
        description: "Warm knit sweater with ribbed detailing.",
        category: "women",
      },
      {
        id: "wf12",
        name: "Palazzo Pants",
        price: 11990, // ₦11,990
        image: "images/women-pants.jpeg",
        vendor: "Urban Trends",
        rating: 4.3,
        reviewCount: 167,
        description: "Lightweight wide-leg pants for ultimate comfort.",
        category: "women",
      },
    ],
    trending: [
      {
        id: "t1",
        name: "Oversized Denim Jacket",
        price: 18999,
        image: "images/denim-jacket.jpg",
        vendor: "Streetwear Essentials",
        rating: 4.7,
        reviewCount: 342,
        description: "The must-have oversized fit for a layered look.",
        category: "trending",
      },
      {
        id: "t2",
        name: "Platform Hiking Boots",
        price: 22000,
        image: "images/hiking-boots.jpg",
        vendor: "TerraFootwear",
        rating: 4.6,
        reviewCount: 215,
        description: "Chunky sole boots that are both stylish and functional.",
        category: "trending",
      },
      {
        id: "t3",
        name: "Quilted Crossbody Bag",
        price: 32000,
        image: "images/crossbody-bag.jpg",
        vendor: "The Luxe Label",
        rating: 4.8,
        reviewCount: 198,
        description: "A designer-inspired quilted bag with chain strap.",
        category: "trending",
      },
      {
        id: "t4",
        name: "Cargo Pants",
        price: 17500,
        image: "images/cargo-pants.jpg",
        vendor: "Urban Utility",
        rating: 4.4,
        reviewCount: 287,
        description:
          "Utilitarian pants with multiple pockets for a practical yet trendy look.",
        category: "trending",
      },
      {
        id: "t5",
        name: "Wireless Earbuds Pro",
        price: 28999,
        image: "images/earbuds.jpg",
        vendor: "AudioTech",
        rating: 4.9,
        reviewCount: 512,
        description: "Noise-cancelling earbuds with crystal clear sound.",
        category: "trending",
      },
      {
        id: "t6",
        name: "Vintage Graphic Tee",
        price: 8999,
        image: "images/graphic-tee.jpg",
        vendor: "Retro Threads",
        rating: 4.3,
        reviewCount: 156,
        description: "Soft, washed cotton tee with a vintage band print.",
        category: "trending",
      },
    ],
    summer: [
      {
        id: "s1",
        name: "Linen Button-Down Shirt",
        price: 14500,
        image: "images/linen-shirt.jpg",
        vendor: "Coastal Breeze",
        rating: 4.6,
        reviewCount: 231,
        description: "Breathable linen shirt perfect for hot summer days.",
        category: "summer",
      },
      {
        id: "s2",
        name: "Cat-Eye Sunglasses",
        price: 16500,
        image: "images/cateye-sunglasses.jpg",
        vendor: "SunSational",
        rating: 4.5,
        reviewCount: 178,
        description: "Chic cat-eye frames with 100% UV protection.",
        category: "summer",
      },
      {
        id: "s3",
        name: "Straw Fedora Hat",
        price: 12500,
        image: "images/fedora.jpg",
        vendor: "Island Life",
        rating: 4.2,
        reviewCount: 95,
        description: "A stylish and sun-protective wide-brim fedora.",
        category: "summer",
      },
      {
        id: "s4",
        name: "Slide Sandals",
        price: 11000,
        image: "images/slide-sandals.jpg",
        vendor: "Beach Walk",
        rating: 4.4,
        reviewCount: 204,
        description: "Comfortable and easy-to-wear cushioned slide sandals.",
        category: "summer",
      },
      {
        id: "s5",
        name: "Beach Tote Bag",
        price: 13999,
        image: "images/beach-tote.jpg",
        vendor: "Seaside",
        rating: 4.7,
        reviewCount: 121,
        description: "Spacious and durable tote for all your beach essentials.",
        category: "summer",
      },
      {
        id: "s6",
        name: "High-Waisted Bikini Set",
        price: 15999,
        image: "images/bikini.jpg",
        vendor: "Aqua Blue",
        rating: 4.8,
        reviewCount: 187,
        description: "A flattering high-waisted bikini in a tropical print.",
        category: "summer",
      },
    ],
    urban: [
      {
        id: "u1",
        name: "Bomber Jacket",
        price: 27500,
        image: "images/bomber-jacket.jpg",
        vendor: "Metro Wear",
        rating: 4.7,
        reviewCount: 302,
        description: "A classic ribbed-collar bomber for a sleek city look.",
        category: "urban",
      },
      {
        id: "u2",
        name: "Minimalist Sneakers",
        price: 23500,
        image: "images/minimalist-sneakers.jpg",
        vendor: "Concrete",
        rating: 4.9,
        reviewCount: 445,
        description:
          "Clean, all-white leather sneakers that go with everything.",
        category: "urban",
      },
      {
        id: "u3",
        name: "Messenger Bag",
        price: 29999,
        image: "images/messenger-bag.jpg",
        vendor: "City Slicker",
        rating: 4.5,
        reviewCount: 176,
        description:
          "Durable, water-resistant messenger bag with a laptop sleeve.",
        category: "urban",
      },
      {
        id: "u4",
        name: "Hardcover Moleskine Notebook",
        price: 8500,
        image: "images/notebook.jpg",
        vendor: "Urban Creative",
        rating: 4.8,
        reviewCount: 289,
        description: "The essential notebook for sketches and ideas on the go.",
        category: "urban",
      },
      {
        id: "u5",
        name: "Smartphone Grip Ring",
        price: 4999,
        image: "images/phone-grip.jpg",
        vendor: "GripTech",
        rating: 4.1,
        reviewCount: 412,
        description:
          "A pop-out ring for a secure grip and phone stand functionality.",
        category: "urban",
      },
      {
        id: "u6",
        name: "Oversized Hoodie",
        price: 21999,
        image: "images/hoodie.jpg",
        vendor: "Avenue Apparel",
        rating: 4.6,
        reviewCount: 398,
        description: "A comfortable, heavyweight hoodie for streetwear style.",
        category: "urban",
      },
    ],
  };

  // DOM Elements
  const navWishlistBtn = document.querySelector(
    ".wishlist-btn:not(.product-actions .wishlist-btn)"
  );
  const navWishlistCount = document.querySelector(
    ".wishlist-btn:not(.product-actions .wishlist-btn) .wishlist-count"
  );
  const navCartBtn = document.querySelector(".cart-btn");
  const navCartCount = document.querySelector(".cart-count");
  const cartModal = document.querySelector(".cart-modal-container");
  const wishlistModal = document.querySelector(".wishlist-modal-container");
  const quickViewModal = document.querySelector(".quick-view-modal-container");

  // Tab Elements
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // Utility function to format price
  function formatPrice(price) {
    return `₦${price.toLocaleString("en-NG", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`;
  }

  // Initialize product carousels
  function initializeProductCarousels() {
    for (const category in products) {
      const carousel = document.getElementById(`${category}-carousel`);
      if (carousel) {
        carousel.innerHTML = "";
        products[category].forEach((product) => {
          const productCard = createProductCard(product);
          carousel.appendChild(productCard);
        });
      }
    }
  }

  // Create product card HTML
  function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.dataset.id = product.id;
    productCard.dataset.category = product.category;

    productCard.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <button class="quick-view-btn" data-id="${
          product.id
        }" title="Quick View">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <span class="product-vendor">${product.vendor || "FashHub"}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">
            ${'<svg class="star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'.repeat(
              Math.floor(product.rating || 0)
            )}
            ${'<svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'.repeat(
              5 - Math.floor(product.rating || 0)
            )}
          </div>
          <span class="rating-count">(${product.reviewCount || 0})</span>
        </div>
        <p class="product-price">${formatPrice(product.price)}</p>
        <div class="product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="wishlist-btn">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    return productCard;
  }

  // Initialize the product carousels
  initializeProductCarousels();

  // Tab Switching Functionality
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Hide all tab panes
      tabPanes.forEach((pane) => pane.classList.remove("active"));
      // Show the selected pane
      const tabId = this.dataset.tab;
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Event Delegation for Product Cards (since they're dynamically loaded)
  document.addEventListener("click", function (e) {
    // Wishlist button click
    if (e.target.closest(".product-actions .wishlist-btn")) {
      const btn = e.target.closest(".product-actions .wishlist-btn");
      handleWishlistClick(btn);
    }

    // Add to cart button click
    if (e.target.closest(".add-to-cart")) {
      const btn = e.target.closest(".add-to-cart");
      handleAddToCart(btn);
    }

    // Quick view button click
    if (e.target.closest(".quick-view-btn")) {
      const btn = e.target.closest(".quick-view-btn");
      const productId = btn.dataset.id;
      openQuickViewModal(productId);
    }
  });

  // Quick View Modal Functions
  function openQuickViewModal(productId) {
    // Find the product in any category
    let product = null;
    for (const category in products) {
      const foundProduct = products[category].find((p) => p.id === productId);
      if (foundProduct) {
        product = foundProduct;
        break;
      }
    }

    if (!product) return;

    // Populate the quick view modal
    const quickViewContent = document.querySelector(".quick-view-content");
    quickViewContent.innerHTML = `
      <img src="${product.image}" alt="${
      product.name
    }" class="quick-view-image">
      <div class="quick-view-details">
        <h2>${product.name}</h2>
        <p class="quick-view-price">${formatPrice(product.price)}</p>
        <p class="quick-view-description">${product.description}</p>
        <div class="quick-view-actions">
          <button class="add-to-cart" data-id="${
            product.id
          }">Add to Cart</button>
          <button class="wishlist-btn" data-id="${product.id}">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Check if product is in wishlist and update button
    const isInWishlist = wishlist.some((item) => item.id === productId);
    const wishlistBtn = quickViewContent.querySelector(".wishlist-btn");
    if (isInWishlist) {
      wishlistBtn.classList.add("active");
      wishlistBtn.querySelector(".heart-icon").style.fill = "red";
    }

    // Show the modal
    quickViewModal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeQuickViewModal() {
    quickViewModal.style.display = "none";
    document.body.style.overflow = "";
  }

  // Close quick view modal when clicking close button or overlay
  document
    .querySelector(".close-quick-view-modal")
    .addEventListener("click", closeQuickViewModal);
  document
    .querySelector(".quick-view-modal-overlay")
    .addEventListener("click", closeQuickViewModal);

  // Close quick view modal when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeQuickViewModal();
    }
  });

  // Existing functions from your original code (with slight modifications)
  function handleWishlistClick(btn) {
    const productCard = btn.closest(".product-card");
    const productId = productCard.dataset.id;
    // Find the product data from the 'products' object
    let product = null;
    for (const category in products) {
      const foundProduct = products[category].find((p) => p.id === productId);
      if (foundProduct) {
        product = foundProduct;
        break;
      }
    }
    if (!product) return;

    const index = wishlist.findIndex((item) => item.id === productId);

    if (index === -1) {
      wishlist.push(product);
      btn.classList.add("active");
      const heartIcon = btn.querySelector(".heart-icon");
      if (heartIcon) heartIcon.style.fill = "red";
    } else {
      wishlist.splice(index, 1);
      btn.classList.remove("active");
      const heartIcon = btn.querySelector(".heart-icon");
      if (heartIcon) heartIcon.style.fill = "";
    }

    updateWishlistCount();
  }

  function handleAddToCart(btn) {
    const productCard = btn.closest(".product-card");
    const productId = btn.dataset.id || productCard.dataset.id;
    // Find the product data from the 'products' object
    let product = null;
    for (const category in products) {
      const foundProduct = products[category].find((p) => p.id === productId);
      if (foundProduct) {
        product = foundProduct;
        break;
      }
    }
    if (!product) return;

    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateCartModal();
    updateCartCount();

    // Show added to cart notification
    showNotification(`${product.name} added to cart`);
  }

  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("fade-out");
      setTimeout(() => notification.remove(), 500);
    }, 2000);
  }

  function updateWishlistCount() {
    navWishlistCount.textContent = wishlist.length;
  }

  function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    navCartCount.textContent = totalItems;
  }

  // Initialize wishlist and cart modal
  function openWishlistModal() {
    updateWishlistModal();
    wishlistModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeWishlistModal() {
    wishlistModal.style.display = "none";
    document.body.style.overflow = "";
  }

  function openCartModal() {
    updateCartModal();
    cartModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeCartModal() {
    cartModal.style.display = "none";
    document.body.style.overflow = "";
  }

  function updateWishlistModal() {
    const wishlistItemsContainer = document.querySelector(".wishlist-items");
    wishlistItemsContainer.innerHTML = "";

    if (wishlist.length === 0) {
      wishlistItemsContainer.innerHTML = "<p>Your wishlist is empty.</p>";
      return;
    }

    wishlist.forEach((item) => {
      const wishlistItem = document.createElement("div");
      wishlistItem.className = "wishlist-item";
      wishlistItem.innerHTML = `
        <div style="display: flex; align-items: center;">
          <img src="${item.image}" alt="${
        item.name
      }" style="width: 50px; height: 50px; object-fit: cover; margin-right: 1rem;">
          <div>
            <h4>${item.name}</h4>
            <p>${formatPrice(item.price)}</p>
          </div>
        </div>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      wishlistItemsContainer.appendChild(wishlistItem);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll(".wishlist-items .remove-item").forEach((btn) => {
      btn.addEventListener("click", function () {
        const productId = this.dataset.id;
        const index = wishlist.findIndex((item) => item.id === productId);

        if (index !== -1) {
          wishlist.splice(index, 1);
          updateWishlistModal();
          updateWishlistCount();

          // Update the heart icon on the product card
          const productCard = document.querySelector(
            `.product-card[data-id="${productId}"]`
          );
          if (productCard) {
            const wishlistBtn = productCard.querySelector(".wishlist-btn");
            if (wishlistBtn) {
              wishlistBtn.classList.remove("active");
              const heartIcon = wishlistBtn.querySelector(".heart-icon");
              if (heartIcon) heartIcon.style.fill = "";
            }
          }
        }
      });
    });
  }

  function updateCartModal() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".total-amount");
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotal.textContent = formatPrice(0);
      return;
    }

    let total = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <div style="display: flex; align-items: center;">
          <img src="${item.image}" alt="${
        item.name
      }" style="width: 50px; height: 50px; object-fit: cover; margin-right: 1rem;">
          <div>
            <h4>${item.name}</h4>
            <p>${formatPrice(item.price)}</p>
          </div>
        </div>
        <div>
          <div class="cart-item-quantity">
            <button class="decrement-quantity" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="increment-quantity" data-id="${item.id}">+</button>
          </div>
          <p class="cart-item-price">${formatPrice(itemTotal)}</p>
        </div>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = formatPrice(total);

    // Add event listeners to quantity buttons
    document.querySelectorAll(".increment-quantity").forEach((btn) => {
      btn.addEventListener("click", function () {
        const productId = this.dataset.id;
        const item = cart.find((item) => item.id === productId);
        if (item) {
          item.quantity += 1;
          updateCartModal();
          updateCartCount();
        }
      });
    });

    document.querySelectorAll(".decrement-quantity").forEach((btn) => {
      btn.addEventListener("click", function () {
        const productId = this.dataset.id;
        const item = cart.find((item) => item.id === productId);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          updateCartModal();
          updateCartCount();
        }
      });
    });

    document.querySelectorAll(".cart-items .remove-item").forEach((btn) => {
      btn.addEventListener("click", function () {
        const productId = this.dataset.id;
        const index = cart.findIndex((item) => item.id === productId);

        if (index !== -1) {
          cart.splice(index, 1);
          updateCartModal();
          updateCartCount();
        }
      });
    });
  }

  // Initialize counts
  updateWishlistCount();
  updateCartCount();
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other open FAQs
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Optional: Open first FAQ by default
  // faqItems[0].classList.add('active');
});
