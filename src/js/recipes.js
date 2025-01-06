$(document).ready(function() {
    const filterButtons = $(".filter-btn");
    const header = $("header");
    const foodItems = $(".food-item");
    const searchInput = $("#search-input");

    const urlParams = new URLSearchParams(window.location.search);
    const filterCategory = urlParams.get('filter');

    function applyFilter(category) {
        foodItems.each(function() {
            if (category === "all" || $(this).hasClass(category)) {
                $(this).show();
            } else {
                $(this).hide();
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
        foodItems.each(function() {
            const itemName = $(this).find("h3").text().toLowerCase();
            if (itemName.includes(searchQuery)) {
                $(this).show(); 
            } else {
                $(this).hide();
            }
        });
    });

    const allButton = $('.filter-btn[data-category="all"]');
    if (allButton.length && !filterCategory) {
        allButton.click();
    }
});
