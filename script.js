

// Hämtar hamburgermenyn och navigeringslänkarna
const hamburger = document.getElementById('.hamburger');
const navLinks = document.getElementById('.nav-links');

// Lyssnar efter klick på hamburgarmenyn
hamburger.addEventListener('click', () => {
    // Växlar mellan att visa och dölja menyn
    navLinks.classList.toggle('open');
});


Menu.style.display = "none";
function ShowHide(x) {
  x.classList.toggle("change");
  var Menu = document.getElementById("Menu");
  if (Menu.style.display === "none") {
    Menu.style.display = "block";
  } else {
    Menu.style.display = "none";
  }
}


document.getElementById('category-filter').addEventListener('change', function () {
    const selectedCategory = this.value;
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'block'; // Visa inlägg om kategorin matchar
        } else {
            card.style.display = 'none'; // Dölj inlägg om kategorin inte matchar
        }
    });
});




// Cookie Consent by TermsFeed
document.addEventListener('DOMContentLoaded', function () {
    cookieconsent.run({
        "notice_banner_type": "simple",
        "consent_type": "express",
        "palette": "light",
        "language": "sv",
        "page_load_consent_levels": ["strictly-necessary"],
        "notice_banner_reject_button_hide": false,
        "preferences_center_close_button_hide": false,
        "page_refresh_confirmation_buttons": false,
        "website_name": "www.fyndloggan.se",
        "callbacks": {
            "scripts_specific_loaded": (level) => {
                if (level === 'targeting') {
                    gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted',
                        'analytics_storage': 'granted'
                    });
                }
            }
        }
    });
});

