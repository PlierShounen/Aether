document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    // Toggle Login/Signup
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const authSection = document.getElementById("authSection");
    const dashboard = document.getElementById("dashboard");

    document.getElementById("showSignup")?.addEventListener("click", function () {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    document.getElementById("showLogin")?.addEventListener("click", function () {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Login
    document.getElementById("loginBtn")?.addEventListener("click", function () {
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email && password) {
            authSection.classList.add("hidden");
            dashboard.classList.remove("hidden");
            populateEnvironmentalData();
        } else {
            alert("Please enter email and password.");
        }
    });

    // Signup
    document.getElementById("signupBtn")?.addEventListener("click", function () {
        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        if (name && email && password) {
            authSection.classList.add("hidden");
            dashboard.classList.remove("hidden");
            populateEnvironmentalData();
        } else {
            alert("Please fill all fields.");
        }
    });

    // Logout
    document.getElementById("logoutButton")?.addEventListener("click", function () {
        dashboard.classList.add("hidden");
        authSection.classList.remove("hidden");
    });

    // Populate Environmental Data (mock)
    function populateEnvironmentalData() {
        const tempEl = document.getElementById("tempData");
        const humidityEl = document.getElementById("humidityData");
        const airEl = document.getElementById("airQualityData");
        const waterEl = document.getElementById("waterLevelData");
        const motionEl = document.getElementById("motionData");
        const soilEl = document.getElementById("soilData");
        const lightEl = document.getElementById("lightData");

        if (tempEl) tempEl.textContent = "26.5";
        if (humidityEl) humidityEl.textContent = "78";
        if (airEl) airEl.textContent = "42";
        if (waterEl) waterEl.textContent = "3.1";
        if (motionEl) motionEl.textContent = "No movement";
        if (soilEl) soilEl.textContent = "55";
        if (lightEl) lightEl.textContent = "1200";
    }

    // Wildlife Fun Facts
    const facts = [
        { text: "🔹 Pangolins are the only mammals covered in scales.", image: "pangolin.jpg" },
        { text: "🔹 A group of flamingos is called a 'flamboyance'.", image: "flamingo.jpg" },
        { text: "🔹 Octopuses have three hearts!", image: "octopus.jpg" },
        { text: "🔹 Cows have best friends and get stressed when separated.", image: "cow.jpg" },
        { text: "🔹 Giraffes only need 5 to 30 minutes of sleep in a 24-hour period.", image: "giraffe.jpg" },
        { text: "🔹 Male seahorses carry the babies.", image: "seahorse.jpg" }
    ];

    const factText = document.getElementById("factText");
    const factImage = document.getElementById("factImage");
    const randomFactBtn = document.getElementById("randomFact");

    if (randomFactBtn && factText && factImage) {
        randomFactBtn.addEventListener("click", function () {
            const randomIndex = Math.floor(Math.random() * facts.length);
            const selectedFact = facts[randomIndex];
            factText.textContent = selectedFact.text;
            factImage.src = selectedFact.image;
            factImage.alt = selectedFact.text;
        });
    }

    // User Reviews Carousel
    const reviews = [
        "🌟 This site is great for wildlife research!",
        "🦅 Amazing tool for monitoring ecosystems!",
        "🐘 Love the wildlife facts!",
        "🌱 Useful for environmental tracking!"
    ];
    let reviewIndex = 0;
    const reviewText = document.getElementById("reviewText");

    document.getElementById("prevReview")?.addEventListener("click", function () {
        reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
        if (reviewText) reviewText.textContent = reviews[reviewIndex];
    });

    document.getElementById("nextReview")?.addEventListener("click", function () {
        reviewIndex = (reviewIndex + 1) % reviews.length;
        if (reviewText) reviewText.textContent = reviews[reviewIndex];
    });

    // Wildlife Parks Dropdown
    const parksDropdown = document.getElementById("wildlifeParks");
    const parks = [
        "Yellowstone National Park",
        "Kruger National Park",
        "Serengeti National Park",
        "Sundarbans",
        "Jim Corbett National Park",
        "Banff National Park",
        "Yala National Park"
    ];
    if (parksDropdown) {
        parks.forEach(park => {
            let option = document.createElement("option");
            option.textContent = park;
            option.value = park;
            parksDropdown.appendChild(option);
        });
    }
});
