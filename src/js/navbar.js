$(document).ready(function() {
    const navbarHTML = `
        <nav class="background">
            <div class="logo">
                <p id="logoo"><b id="homee">Home</b><span id="logostyle">Cooking</span></p>
            </div>
            <div id="list">
                <ul class="list">
                    <li><a href="home.html">HOME</a></li>
                    <li><a href="recipes.html">RECIPES</a></li>
                    <li><a href="book.html">BOOK</a></li>
                    <li><a href="about_us.html">ABOUT US</a></li>
                    <li><a href="healthandwellnes.html">HEALTH & WELLNESS</a></li>
                </ul>
            </div>
        </nav>
        <hr id="hr1">
    `;
    
    $('#navbar-placeholder').html(navbarHTML);

    // Example callbacks for navigation interactions
    $('.list a').on('click', function(e) {
        console.log('Navigating to:', $(this).attr('href'));
    });

    $('#logoo').on('click', function() {
        $(this).fadeOut(200).fadeIn(200);
    });
});