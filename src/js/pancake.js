function toggleNutrition() {
    const table = document.getElementById('nutritionTable');
    const toggleLink = document.querySelector('.nutrition-toggle');

    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'block'; 
        toggleLink.textContent = 'Hide Nutrition Table';
    } else {
        table.style.display = 'none'; 
        toggleLink.textContent = 'Show Nutrition Table';
    }
}
