document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

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

    document.getElementById("logoutButton")?.addEventListener("click", function () {
        dashboard.classList.add("hidden");
        authSection.classList.remove("hidden");
    });

    function populateEnvironmentalData() {
        const tempData = document.getElementById("tempData");
        const humidityData = document.getElementById("humidityData");
        const airQualityData = document.getElementById("airQualityData");
        const waterLevelData = document.getElementById("waterLevelData");
        const motionData = document.getElementById("motionData");
        const soilData = document.getElementById("soilData");
        const lightData = document.getElementById("lightData");

        if (tempData) tempData.textContent = "26.5";
        if (humidityData) humidityData.textContent = "78";
        if (airQualityData) airQualityData.textContent = "42";
        if (waterLevelData) waterLevelData.textContent = "3.1";
        if (motionData) motionData.textContent = "No movement";
        if (soilData) soilData.textContent = "55";
        if (lightData) lightData.textContent = "1200";
    }

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

    randomFactBtn?.addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * facts.length);
        const selectedFact = facts[randomIndex];
        if (factText && factImage) {
            factText.textContent = selectedFact.text;
            factImage.src = selectedFact.image;
            factImage.alt = selectedFact.text;
        }
    });

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
    parks.forEach(park => {
        let option = document.createElement("option");
        option.textContent = park;
        option.value = park;
        parksDropdown?.appendChild(option);
    });

    // 📍 Leaflet Map Setup
    let map;
    const showMapBtn = document.getElementById("showMapBtn");
    showMapBtn?.addEventListener("click", function () {
        const lat = parseFloat(document.getElementById("latitude").value);
        const lng = parseFloat(document.getElementById("longitude").value);

        if (!isNaN(lat) && !isNaN(lng)) {
            if (!map) {
                map = L.map("map").setView([lat, lng], 10);
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                }).addTo(map);
            } else {
                map.setView([lat, lng], 10);
            }

            L.marker([lat, lng]).addTo(map)
                .bindPopup(`Selected Location: [${lat.toFixed(2)}, ${lng.toFixed(2)}]`)
                .openPopup();
        } else {
            alert("Please enter valid latitude and longitude.");
        }
    });
});

    
