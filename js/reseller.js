// Reseller data organized by categories
const rsResellerData = {
  all: {
    title: "All Resellers",
    resellers: [
      {
        name: "Elite Fashion House",
        verified: true,
        location: "Victoria Island, Lagos",
        image:
          "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvdXRpcXVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "We specialize in authentic luxury fashion pieces from top international designers. All items are carefully authenticated and in perfect condition.",
        specialties: ["Luxury", "Designer", "Authentic"],
        rating: 4.9,
        items: 250,
        positive: 98,
      },
      {
        name: "AfroChic Boutique",
        verified: true,
        location: "Gwarinpa, Abuja",
        image:
          "https://images.unsplash.com/photo-1592301933927-35b597393c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvdXRpcXVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "We celebrate African heritage through fashion, offering contemporary pieces that blend traditional elements with modern design.",
        specialties: ["African", "Contemporary", "Handmade"],
        rating: 4.7,
        items: 180,
        positive: 95,
      },
      {
        name: "Urban Threads",
        verified: false,
        location: "Ikeja, Lagos",
        image:
          "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0b3JlJTIwZnJvbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
        bio: "Your destination for streetwear and urban fashion. We source limited edition pieces from around the world to keep your style fresh.",
        specialties: ["Streetwear", "Limited Edition", "Urban"],
        rating: 4.5,
        items: 120,
        positive: 92,
      },
      {
        name: "Vintage Vault",
        verified: true,
        location: "Port Harcourt, Rivers",
        image:
          "https://images.unsplash.com/photo-1556906781-2f0520405b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHN0b3JlJTIwZnJvbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
        bio: "We specialize in carefully curated vintage pieces from past decades. Each item is restored to excellent condition while maintaining its authentic character.",
        specialties: ["Vintage", "Retro", "Curated"],
        rating: 4.8,
        items: 95,
        positive: 97,
      },
      {
        name: "Moda Essentials",
        verified: false,
        location: "Ibadan, Oyo",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
        bio: "We focus on high-quality everyday essentials that form the foundation of a modern Nigerian wardrobe. Quality and comfort are our priorities.",
        specialties: ["Essentials", "Everyday", "Quality"],
        rating: 4.6,
        items: 200,
        positive: 94,
      },
      {
        name: "Haute Heritage",
        verified: true,
        location: "Kano",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvdXRpcXVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "We specialize in modern interpretations of Northern Nigerian traditional attire, creating pieces that honor heritage while embracing contemporary style.",
        specialties: ["Traditional", "Modern", "Cultural"],
        rating: 4.9,
        items: 85,
        positive: 99,
      },
    ],
  },
  lagos: {
    title: "Lagos Resellers",
    resellers: [
      {
        name: "Elite Fashion House",
        verified: true,
        location: "Victoria Island, Lagos",
        image:
          "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvdXRpcXVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "We specialize in authentic luxury fashion pieces from top international designers. All items are carefully authenticated and in perfect condition.",
        specialties: ["Luxury", "Designer", "Authentic"],
        rating: 4.9,
        items: 250,
        positive: 98,
      },
      {
        name: "Urban Threads",
        verified: false,
        location: "Ikeja, Lagos",
        image:
          "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0b3JlJTIwZnJvbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
        bio: "Your destination for streetwear and urban fashion. We source limited edition pieces from around the world to keep your style fresh.",
        specialties: ["Streetwear", "Limited Edition", "Urban"],
        rating: 4.5,
        items: 120,
        positive: 92,
      },
    ],
  },
  abuja: {
    title: "Abuja Resellers",
    resellers: [
      {
        name: "AfroChic Boutique",
        verified: true,
        location: "Gwarinpa, Abuja",
        image:
          "https://images.unsplash.com/photo-1592301933927-35b597393c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvdXRpcXVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "We celebrate African heritage through fashion, offering contemporary pieces that blend traditional elements with modern design.",
        specialties: ["African", "Contemporary", "Handmade"],
        rating: 4.7,
        items: 180,
        positive: 95,
      },
    ],
  },
  "port-harcourt": {
    title: "Port Harcourt Resellers",
    resellers: [
      {
        name: "Vintage Vault",
        verified: true,
        location: "Port Harcourt, Rivers",
        image:
          "https://images.unsplash.com/photo-1556906781-2f0520405b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHN0b3JlJTIwZnJvbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
        bio: "We specialize in carefully curated vintage pieces from past decades. Each item is restored to excellent condition while maintaining its authentic character.",
        specialties: ["Vintage", "Retro", "Curated"],
        rating: 4.8,
        items: 95,
        positive: 97,
      },
    ],
  },
  ibadan: {
    title: "Ibadan Resellers",
    resellers: [
      {
        name: "Moda Essentials",
        verified: false,
        location: "Ibadan, Oyo",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
        bio: "We focus on high-quality everyday essentials that form the foundation of a modern Nigerian wardrobe. Quality and comfort are our priorities.",
        specialties: ["Essentials", "Everyday", "Quality"],
        rating: 4.6,
        items: 200,
        positive: 94,
      },
    ],
  },
  kano: {
    title: "Kano Resellers",
    resellers: [
      {
        name: "Haute Heritage",
        verified: true,
        location: "Kano",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvdXRpcXVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "We specialize in modern interpretations of Northern Nigerian traditional attire, creating pieces that honor heritage while embracing contemporary style.",
        specialties: ["Traditional", "Modern", "Cultural"],
        rating: 4.9,
        items: 85,
        positive: 99,
      },
    ],
  },
  online: {
    title: "Online Stores",
    resellers: [
      {
        name: "FashionNet NG",
        verified: true,
        location: "Online Store",
        image:
          "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG9ubGluZSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "Nigeria's premier online fashion destination with nationwide delivery. We offer a wide selection of clothing, accessories, and footwear.",
        specialties: ["Online", "Nationwide Delivery", "Wide Selection"],
        rating: 4.8,
        items: 500,
        positive: 97,
      },
      {
        name: "StyleHub Africa",
        verified: true,
        location: "Online Store",
        image:
          "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG9ubGluZSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "Curated African fashion marketplace connecting designers with fashion lovers across the continent and diaspora.",
        specialties: ["African", "Marketplace", "Curated"],
        rating: 4.7,
        items: 320,
        positive: 96,
      },
    ],
  },
  boutiques: {
    title: "Boutiques",
    resellers: [
      {
        name: "Chic Avenue",
        verified: true,
        location: "Lekki, Lagos",
        image:
          "https://images.unsplash.com/photo-1595425970377-2f8ded7c7b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJvdXRpcXVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
        bio: "Upscale boutique offering exclusive designer pieces and personalized styling services for the discerning fashion enthusiast.",
        specialties: ["Exclusive", "Personal Styling", "Upscale"],
        rating: 4.9,
        items: 150,
        positive: 99,
      },
      {
        name: "The Style Loft",
        verified: false,
        location: "Wuse II, Abuja",
        image:
          "https://images.unsplash.com/photo-1595425972660-a6df4b4363f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        bio: "A boutique offering a curated selection of trendy and timeless fashion pieces for the modern professional.",
        specialties: ["Trendy", "Timeless", "Professional"],
        rating: 4.6,
        items: 130,
        positive: 93,
      },
    ],
  },
};

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  initializeResellerTabs();
  setupScrollControls();
});

// Create reseller tabs
function initializeResellerTabs() {
  const tabsContainer = document.getElementById("rsTabs");
  const categories = Object.keys(rsResellerData);

  categories.forEach((category) => {
    const tab = document.createElement("div");
    tab.className = "rs-tab";
    tab.textContent = rsResellerData[category].title;
    tab.dataset.category = category;
    tab.addEventListener("click", () => showResellersForCategory(category));
    tabsContainer.appendChild(tab);
  });

  // Set first tab as active
  if (categories.length > 0) {
    const firstTab = tabsContainer.querySelector(".rs-tab");
    firstTab.classList.add("rs-tab-active");
    showResellersForCategory(categories[0]);
  }
}

// Setup scroll controls for reseller tabs
function setupScrollControls() {
  const scrollLeftBtn = document.getElementById("rsScrollLeft");
  const scrollRightBtn = document.getElementById("rsScrollRight");
  const tabsContainer = document.getElementById("rsTabs");

  scrollLeftBtn.addEventListener("click", () => {
    tabsContainer.scrollBy({ left: -200, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    tabsContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}

// Show resellers for selected category
function showResellersForCategory(category) {
  // Update active tab
  const tabs = document.querySelectorAll(".rs-tab");
  tabs.forEach((tab) => {
    tab.classList.remove("rs-tab-active");
    if (tab.dataset.category === category) {
      tab.classList.add("rs-tab-active");
    }
  });

  const resellersContainer = document.getElementById("rsResellersContainer");

  // Check if we have data for this category
  if (rsResellerData[category]) {
    const categoryData = rsResellerData[category];
    let html = `<h2 class="rs-category-title">${categoryData.title}</h2>`;
    html += `<div class="rs-resellers-grid">`;

    // Add resellers for this category
    categoryData.resellers.forEach((reseller) => {
      html += createResellerCard(reseller);
    });

    html += `</div>`;
    resellersContainer.innerHTML = html;
  } else {
    // No data available for this category
    resellersContainer.innerHTML = `
                    <div class="rs-empty-state">
                        <i class="rs-empty-state-icon fas fa-store"></i>
                        <p>No resellers found for ${categoryData.title}. Check back soon!</p>
                    </div>
                `;
  }
}

// Create reseller card HTML
function createResellerCard(reseller) {
  const verifiedBadge = reseller.verified
    ? `<span class="rs-verified-badge">Verified</span>`
    : "";
  const specialties = reseller.specialties
    .map((specialty) => `<span class="rs-specialty">${specialty}</span>`)
    .join("");
  return `
                <div class="rs-reseller-card">
                    <img src="${reseller.image}" alt="${reseller.name}" class="rs-reseller-image">
                    <div class="rs-reseller-info">
                        <h3 class="rs-reseller-name">${reseller.name}${verifiedBadge}</h3>
                        <p class="rs-reseller-location"><i class="fas fa-map-marker-alt"></i>${reseller.location}</p>
                        <div class="rs-reseller-stats">
                            <div class="rs-stat">
                                <div class="rs-stat-value">${reseller.rating}</div>
                                <div class="rs-stat-label">Rating</div>
                            </div>
                            <div class="rs-stat">
                                <div class="rs-stat-value">${reseller.items}</div>
                                <div class="rs-stat-label">Items</div>
                            </div>
                            <div class="rs-stat">
                                <div class="rs-stat-value">${reseller.positive}%</div>
                                <div class="rs-stat-label">Positive</div>
                            </div>
                        </div>
                    </div>
                    <div class="rs-reseller-hover-card">
                        <h4 class="rs-hover-card-title">About ${reseller.name}</h4>
                        <p class="rs-reseller-bio">${reseller.bio}</p>
                        <div class="rs-reseller-specialties">${specialties}</div>
                        <a href="#" class="rs-view-profile-btn">View Profile</a>
                    </div>
                </div>
            `;
}
