document.addEventListener("DOMContentLoaded", () => {
    // 🌿 Authentication Logic
    const user = localStorage.getItem("loggedInUser");
    if (user) {
        document.getElementById("dashboard").classList.remove("hidden");
        document.getElementById("authSection").classList.add("hidden");
    }

    document.getElementById("loginBtn").addEventListener("click", () => {
        const email = document.getElementById("loginEmail").value;
        if (email) {
            localStorage.setItem("loggedInUser", email);
            location.reload();
        }
    });

    document.getElementById("logoutButton").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        location.reload();
    });

    // 🌿 Random Wildlife Facts
    const facts = [
        { text: "Cheetahs can accelerate from 0 to 100 km/h in just 3 seconds.", image: "cheetah.jpg" },
        { text: "The Amazon Rainforest produces 20% of the world's oxygen.", image: "amazon.jpg" },
        { text: "Elephants can recognize themselves in mirrors!", image: "elephant.jpg" }
    ];
    document.getElementById("randomFact").addEventListener("click", () => {
        let randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("factText").innerText = "🔹 " + randomFact.text;
        document.getElementById("factImage").src = randomFact.image;
    });

    // 🌿 Review Navigation
    const reviews = [
        "Amazing research tool for wildlife data!",
        "Very helpful for understanding environmental changes.",
        "The park selection feature is great for tracking conditions."
    ];
    let reviewIndex = 0;
    document.getElementById("nextReview").addEventListener("click", () => {
        reviewIndex = (reviewIndex + 1) % reviews.length;
        document.getElementById("reviewText").innerText = "🌟 " + reviews[reviewIndex];
    });
    document.getElementById("prevReview").addEventListener("click", () => {
        reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
        document.getElementById("reviewText").innerText = "🌟 " + reviews[reviewIndex];
    });

    // 🌿 Simulated Environmental Data
    function generateData() {
        document.getElementById("tempData").textContent = (20 + Math.random() * 15).toFixed(1);
        document.getElementById("humidityData").textContent = (40 + Math.random() * 40).toFixed(1);
        document.getElementById("airQualityData").textContent = Math.floor(50 + Math.random() * 100);
        document.getElementById("waterLevelData").textContent = (0.5 + Math.random() * 2).toFixed(2);
        document.getElementById("motionData").textContent = Math.random() > 0.5 ? "Detected" : "No Motion";
        document.getElementById("soilData").textContent = (20 + Math.random() * 40).toFixed(1);
        document.getElementById("lightData").textContent = Math.floor(300 + Math.random() * 1000);
    }
    setInterval(generateData, 5000);
    generateData();
});
