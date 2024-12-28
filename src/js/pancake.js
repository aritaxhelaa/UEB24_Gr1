function toggleNutrition() {
    const table = document.getElementById('nutritionTable');
    const toggleLink = document.querySelector('.nutrition-toggle');

    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'block'; // Shfaq tabelën
        toggleLink.textContent = 'Fshih tabelën ushqyese';
    } else {
        table.style.display = 'none'; // Fshih tabelën
        toggleLink.textContent = 'Shfaq tabelën ushqyese';
    }
}
