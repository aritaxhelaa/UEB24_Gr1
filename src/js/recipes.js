document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const header = document.querySelector("header");
    const foodItems = document.querySelectorAll(".food-item");
    const searchInput = document.getElementById("search-input");

  
    const urlParams = new URLSearchParams(window.location.search);
    const filterCategory = urlParams.get('filter');


    function applyFilter(category) {
        foodItems.forEach(item => {
            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        const images = {
            breakfast: "url('../../assets/images/breakfast.jpg')",
            lunch: "url('../../assets/images/lunch.jpg')",
            dinner: "url('../../assets/images/dinner.jpg')",
            desserts: "url('../../assets/images/dessert.jpg')",
            all: "url('../../assets/images/all.jpg')",
            default: "url('../../assets/images/default-header.jpg')",
        };
        header.style.backgroundImage = images[category] || images.default;
    }


    if (filterCategory) {
        applyFilter(filterCategory);
    }


    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");
            applyFilter(category);
        });
    });

 
    searchInput.addEventListener("input", function() {
        const searchQuery = searchInput.value.toLowerCase().trim();
        foodItems.forEach(item => {
            const itemName = item.querySelector("h3").textContent.toLowerCase();
            if (itemName.includes(searchQuery)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

  
    const allButton = document.querySelector('.filter-btn[data-category="all"]');
    if (allButton && !filterCategory) allButton.click();
});
