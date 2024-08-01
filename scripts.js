// scripts.js

function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function register() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    if (localStorage.getItem(username)) {
        document.getElementById('registerError').style.display = 'block';
        document.getElementById('registerSuccess').style.display = 'none';
    } else {
        localStorage.setItem(username, password);
        document.getElementById('registerError').style.display = 'none';
        document.getElementById('registerSuccess').style.display = 'block';
    }
    return false;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        window.location.href = "subjects.html";
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split('/').pop().split('.').shift();
    showPage(currentPage);
});
