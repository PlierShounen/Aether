function initMap() {
    console.log("Google Maps Loaded Successfully!");

    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 }, // Default location (India)
        zoom: 5
    });

    var parkCoordinates = {
        "JimCorbett": { lat: 29.5300, lng: 78.7740 },
        "Kaziranga": { lat: 26.5775, lng: 93.1711 },
        "Ranthambore": { lat: 26.0173, lng: 76.5026 }
    };

    var parksDropdown = document.getElementById("wildlifeParks");
    if (parksDropdown) {
        parksDropdown.addEventListener("change", function () {
            var selectedPark = parksDropdown.value;
            if (parkCoordinates[selectedPark]) {
                map.setCenter(parkCoordinates[selectedPark]);
                map.setZoom(10);
            }
        });
    }
}

// Ensure DOM is loaded before running script
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded Successfully!");

    // Logout Button Functionality
    var logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            alert("Logged out successfully!");
            window.location.href = "home.html";
        });
    }

    // Review Section
    var reviews = [
        "Amazing experience at Jim Corbett!",
        "Kaziranga has stunning wildlife.",
        "Ranthambore is a must-visit."
    ];
    var reviewIndex = 0;
    var reviewText = document.getElementById("reviewText");

    var changeReviewButton = document.getElementById("changeReview");
    if (changeReviewButton && reviewText) {
        changeReviewButton.addEventListener("click", function () {
            reviewIndex = (reviewIndex + 1) % reviews.length;
            reviewText.textContent = reviews[reviewIndex];
        });
    }

    // Photo Upload
    var uploadInput = document.getElementById("uploadPhoto");
    var reviewAvatar = document.getElementById("reviewAvatar");

    if (uploadInput && reviewAvatar) {
        uploadInput.addEventListener("change", function (event) {
            var file = event.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    reviewAvatar.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
});


