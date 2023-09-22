window.history.pushState(null, null, "index.html");
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate authentication (replace with actual logic)
    if (username === "admin" && password === "admin123") {
        window.location.href = "admin.html";
    } else if (username === "employee" && password === "employee123") {
        window.location.href="user.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}