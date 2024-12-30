async function loadNavbar() {
    try {
        const response = await fetch('../html/navbar.html');
        const data = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = data;
    } catch (error) {
        console.error('Error loading the navbar:', error);
    }
}


document.addEventListener('DOMContentLoaded', loadNavbar);