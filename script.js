document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded Successfully!");

    // ==================== LOGIN & SIGNUP FUNCTIONALITY ==================== //
    const authSection = document.getElementById("authSection");
    const dashboard = document.getElementById("dashboard");

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");

    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const logoutButton = document.getElementById("logoutButton");

    // Switch between Login & Signup
    showSignup.addEventListener("click", function () {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    showLogin.addEventListener("click", function () {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Check if user is already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "home.html"; // Redirect if already logged in
    }

    // Login Function
    loginBtn.addEventListener("click", function () {
        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email && password) {
            localStorage.setItem("loggedInUser", email); // Store user session
            window.location.href = "home.html"; // Redirect to the dashboard
        } else {
            alert("Please enter valid credentials!");
        }
    });

    // Signup Function
    signupBtn.addEventListener("click", function () {
        let name = document.getElementById("signupName").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;

        if (name && email && password) {
            localStorage.setItem("loggedInUser", email); // Store user session
            window.location.href = "home.html"; // Redirect to the dashboard
        } else {
            alert("Please fill all fields!");
        }
    });

    // Logout Function
    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser"); // Clear session
        window.location.href = "index.html"; // Redirect to login
    });

    // ==================== USER REVIEW SECTION ==================== //
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

    // ==================== PHOTO UPLOAD ==================== //
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

