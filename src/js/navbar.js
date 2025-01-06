$(document).ready(function () {
    const links = [
        { href: "home.html", text: "HOME" },
        { href: "recipes.html", text: "RECIPES" },
        { href: "book.html", text: "BOOK" },
        { href: "about_us.html", text: "ABOUT US" },
        { href: "healthandwellnes.html", text: "HEALTH & WELLNESS" }
    ];

   
    const navbarHTML = `
        <nav class="background">
            <div class="logo">
                <p id="logoo">
                    <b id="homee">Home</b>
                    <span id="logostyle">Cooking</span>
                </p>
            </div>
            <div id="list">
                <ul class="list">
                    ${links
                        .map(link => `<li><a href="${link.href}">${link.text}</a></li>`)
                        .reduce((acc, item) => acc + item, "")}
                </ul>
            </div>
        </nav>
        <hr id="hr1">
    `;

   
    $('#navbar-placeholder').html(navbarHTML);

   
    $('.list a').on('click', function (e) {
        const clickedLink = links.filter(link => link.href === $(this).attr('href'));
        console.log('Navigating to:', clickedLink[0]?.href || "Unknown link");
    });

    
    $('#logoo').on('click', function () {
        $(this).fadeOut(200).fadeIn(200);
    });
});
