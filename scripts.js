// scripts.js
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to subjects page
        window.location.href = "subjects.html";
        return false;
    } else {
        document.getElementById('loginError').style.display = 'block';
        return false;
    }
}
