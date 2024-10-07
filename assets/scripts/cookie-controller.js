document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("cookie-button");
    const banner = document.getElementById("cookie-banner");

    if (button && banner) { // Verificar que ambos elementos existen
        button.addEventListener("click", function(){
            document.cookie = "cookie-consent=true; max-age=31536000";
            banner.remove();

        });
    } else {
        console.error("Button or banner not found in the DOM");
    }
});
