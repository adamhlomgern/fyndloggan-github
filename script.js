

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


function filterPosts() {
    const selectedCategory = document.getElementById('category-filter').value;
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (selectedCategory === 'all' || category === selectedCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}




let currentPage = 1;
const articlesPerPage = 6;

function displayArticles() {
    const articles = document.querySelectorAll('.blog-card');
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    // Göm alla artiklar först
    articles.forEach(article => article.style.display = 'none');

    // Visa endast artiklar för aktuell sida
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    for (let i = startIndex; i < endIndex && i < articles.length; i++) {
        articles[i].style.display = 'block';
    }

    // Uppdatera sidnumrering
    document.getElementById('pageNumbers').textContent = ` ${currentPage} / ${totalPages} `;

    // Hantera knapparnas status
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayArticles();
    }
}

function nextPage() {
    const totalPages = Math.ceil(document.querySelectorAll('.blog-card').length / articlesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayArticles();
    }
}

// Kör funktionen vid sidladdning
window.onload = function() {
    displayArticles();
};




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

