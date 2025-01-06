$(document).ready(function() {
    const filterButtons = $(".filter-btn");
    const header = $("header");
    const foodItems = $(".food-item");
    const searchInput = $("#search-input");

    const urlParams = new URLSearchParams(window.location.search);
    const filterCategory = urlParams.get('filter');

    function applyFilter(category) {
        for (let i = 0; i < foodItems.length; i++) {
            const item = $(foodItems[i]); 
            if (category === "all" || item.hasClass(category)) {
                item.show(); 
            } else {
                item.hide(); 
            }
        }

        const images = {
            breakfast: "url('../../assets/images/breakfast.jpg')",
            lunch: "url('../../assets/images/lunch.jpg')",
            dinner: "url('../../assets/images/dinner.jpg')",
            desserts: "url('../../assets/images/dessert.jpg')",
            all: "url('../../assets/images/all.jpg')",
            default: "url('../../assets/images/default-header.jpg')",
        };

        header.css("background-image", images[category] || images.default);
    }

    if (filterCategory) {
        applyFilter(filterCategory);
    }

    filterButtons.on("click", function() {
        const category = $(this).data("category");
        applyFilter(category);
    });

    searchInput.on("input", function() {
        const searchQuery = $(this).val().toLowerCase().trim();
        for (let i = 0; i < foodItems.length; i++) {
            const item = $(foodItems[i]);
            const itemName = item.find("h3").text().toLowerCase();
            if (itemName.includes(searchQuery)) {
                item.show(); 
            } else {
                item.hide(); 
            }
        }
    });

    const allButton = $('.filter-btn[data-category="all"]');
    if (allButton.length && !filterCategory) {
        allButton.click();
    }
});
