// Nigerian states data with sample designers
const statesData = {
  Lagos: {
    lgas: {
      Ikeja: [
        {
          name: "Chidi Okonkwo",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMGRlc2lnbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
          bio: "Award-winning designer known for contemporary African prints. Specializes in women's evening wear and has showcased at Lagos Fashion Week.",
          yearsActive: 8,
          collections: 12,
          stockists: 15,
        },
        {
          name: "Zainab Adeyemi",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
          bio: "Sustainable fashion advocate creating elegant pieces from recycled materials. Focuses on gender-neutral designs.",
          yearsActive: 5,
          collections: 6,
          stockists: 8,
        },
      ],
      "Victoria Island": [
        {
          name: "Tunde Williams",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
          bio: "Luxury menswear designer with international clientele. Known for impeccable tailoring and fusion of traditional and modern elements.",
          yearsActive: 12,
          collections: 18,
          stockists: 22,
        },
      ],
      Lekki: [
        {
          name: "Amara Nwosu",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
          bio: "Contemporary womenswear designer focusing on bold prints and innovative silhouettes. Recently featured in Vogue.",
          yearsActive: 6,
          collections: 9,
          stockists: 14,
        },
      ],
    },
  },
  Abuja: {
    lgas: {
      "Abuja Municipal": [
        {
          name: "Mohammed Ibrahim",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
          bio: "Designer to political elites and celebrities. Specializes in formal wear with intricate embroidery details.",
          yearsActive: 10,
          collections: 15,
          stockists: 20,
        },
      ],
      Gwagwalada: [
        {
          name: "Funke Alabi",
          image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
          bio: "Upcoming designer focusing on affordable everyday wear with traditional Nigerian influences.",
          yearsActive: 3,
          collections: 4,
          stockists: 5,
        },
      ],
    },
  },
  Rivers: {
    lgas: {
      "Port Harcourt": [
        {
          name: "Tamuno Briggs",
          image:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
          bio: "Known for innovative designs that incorporate Kalabari cultural elements with contemporary fashion.",
          yearsActive: 7,
          collections: 10,
          stockists: 12,
        },
      ],
    },
  },
  Ogun: {
    lgas: {
      Abeokuta: [
        {
          name: "Yemi Oke",
          image:
            "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
          bio: "Specializes in Adire-inspired contemporary fashion. Runs a training program for young designers.",
          yearsActive: 9,
          collections: 11,
          stockists: 13,
        },
      ],
    },
  },
  Kano: {
    lgas: {
      "Kano Municipal": [
        {
          name: "Aisha Sani",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
          bio: "Creates modest fashion that blends Northern Nigerian traditions with modern styles.",
          yearsActive: 6,
          collections: 8,
          stockists: 10,
        },
      ],
    },
  },
};

// All Nigerian states and FCT
const allStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  initializeStateTabs();
  setupScrollControls();
});

// Create state tabs
function initializeStateTabs() {
  const tabsContainer = document.getElementById("statesTabs");

  allStates.forEach((state) => {
    const tab = document.createElement("div");
    tab.className = "nds_state_tab_item";
    tab.textContent = state;
    tab.addEventListener("click", () => showDesignersForState(state));
    tabsContainer.appendChild(tab);
  });

  // Set first tab as active
  if (allStates.length > 0) {
    const firstTab = tabsContainer.querySelector(".nds_state_tab_item");
    firstTab.classList.add("active");
    showDesignersForState(allStates[0]);
  }
}

// Setup scroll controls for state tabs
function setupScrollControls() {
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");
  const tabsContainer = document.getElementById("statesTabs");

  scrollLeftBtn.addEventListener("click", () => {
    tabsContainer.scrollBy({ left: -200, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    tabsContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}

// Show designers for selected state
function showDesignersForState(state) {
  // Update active tab
  const tabs = document.querySelectorAll(".nds_state_tab_item");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.textContent === state) {
      tab.classList.add("active");
    }
  });

  const designersContainer = document.getElementById("designersContainer");

  // Check if we have data for this state
  if (statesData[state]) {
    const stateData = statesData[state];
    let html = `<h2 class="nds_state_heading">Designers from ${state}</h2>`;

    // Iterate through LGAs
    for (const lga in stateData.lgas) {
      html += `<div class="nds_lga_group">
                                <h3 class="nds_lga_heading">${lga}</h3>
                                <div class="nds_designers_grid">`;

      // Add designers for this LGA
      stateData.lgas[lga].forEach((designer) => {
        html += createDesignerCard(designer, lga, state);
      });

      html += `</div></div>`;
    }

    designersContainer.innerHTML = html;
  } else {
    // No data available for this state
    designersContainer.innerHTML = `
                    <div class="nds_empty_state">
                        <i class="fas fa-search"></i>
                        <p>No designers found for ${state}. Check back soon!</p>
                    </div>
                `;
  }
}

// Create designer card HTML
function createDesignerCard(designer, lga, state) {
  return `
                <div class="nds_designer_card">
                    <img src="${designer.image}" alt="${
    designer.name
  }" class="nds_designer_image">
                    <div class="nds_designer_details">
                        <h3 class="nds_designer_name">${designer.name}</h3>
                        <p class="nds_designer_location">${lga}, ${state}</p>
                        <div class="nds_designer_stats">
                            <div class="nds_stat_item">
                                <div class="nds_stat_value">${
                                  designer.yearsActive
                                }+</div>
                                <div class="nds_stat_label">Years</div>
                            </div>
                            <div class="nds_stat_item">
                                <div class="nds_stat_value">${
                                  designer.collections
                                }</div>
                                <div class="nds_stat_label">Collections</div>
                            </div>
                            <div class="nds_stat_item">
                                <div class="nds_stat_value">${
                                  designer.stockists
                                }</div>
                                <div class="nds_stat_label">Stockists</div>
                            </div>
                        </div>
                    </div>
                    <div class="nds_designer_hover_panel">
                        <h4 class="nds_hover_title">About ${
                          designer.name.split(" ")[0]
                        }</h4>
                        <p class="nds_designer_bio">${designer.bio}</p>
                        <a href="#" class="nds_profile_button">View Profile</a>
                    </div>
                </div>
            `;
}
