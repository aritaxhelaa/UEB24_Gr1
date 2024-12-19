document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const header = document.querySelector("header");
    const foodItems = document.querySelectorAll(".food-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");
           
            foodItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });


            
            if (category === "breakfast") {
                header.style.backgroundImage = "url('../../assets/images/breakfast.jpg')";
            } else if (category === "lunch") {
                header.style.backgroundImage = "url('../../assets/images/lunch.jpeg')";
            } else if (category === "all") {
                header.style.backgroundImage = "url('../../assets/images/all.jpg')";
            } else if (category === "dinner") {
                header.style.backgroundImage = "url('../../assets/images/dinner.jpg')";
            } else if (category === "desserts") {
                header.style.backgroundImage = "url('../../assets/images/dessert.jpg')";
            } else {
                header.style.backgroundImage = "url('../../assets/images/default-header.jpg')";
            }
        });
    });
    
    const allButton = document.querySelector('.filter-btn[data-category="all"]');
    if (allButton) allButton.click();
});
