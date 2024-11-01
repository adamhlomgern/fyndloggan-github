

// Hämtar hamburgermenyn och navigeringslänkarna
const hamburger = document.querySelector('.hamburger'); // Använd querySelector för klasser
const navLinks = document.querySelector('.nav-links');   // Använd querySelector för klasser

// Lyssnar efter klick på hamburgermenyn
if (hamburger) {
    hamburger.addEventListener('click', () => {
        // Växlar mellan att visa och dölja menyn
        navLinks.classList.toggle('open');
    });
} else {
    console.error("Hamburgermenyn kunde inte hittas.");
}

// Visa/dölj meny
const menu = document.getElementById('Menu'); // Kontrollera att detta element finns med ID "Menu"
if (menu) {
    menu.style.display = "none";
    function ShowHide(x) {
        x.classList.toggle("change");
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }
} else {
    console.error("Elementet med ID 'Menu' kunde inte hittas.");
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




//let currentPage = 1;
//const articlesPerPage = 6;

//function displayArticles() {
  //  const articles = document.querySelectorAll('.blog-card');
    //const totalPages = Math.ceil(articles.length / articlesPerPage);

    // Göm alla artiklar först
    //articles.forEach(article => article.style.display = 'none');

    // Visa endast artiklar för aktuell sida
//    const startIndex = (currentPage - 1) * articlesPerPage;
//    const endIndex = startIndex + articlesPerPage;
//    for (let i = startIndex; i < endIndex && i < articles.length; i++) {
  //      articles[i].style.display = 'block';
 //   }

    // Uppdatera sidnumrering
   // document.getElementById('pageNumbers').textContent = ` ${currentPage} / ${totalPages} `;

    // Hantera knapparnas status
    //document.getElementById('prevPage').disabled = currentPage === 1;
   // document.getElementById('nextPage').disabled = currentPage === totalPages;
//}

//function prevPage() {
  //  if (currentPage > 1) {
    //    currentPage--;
      //  displayArticles();
   // }
//}

//function nextPage() {
  //  const totalPages = Math.ceil(document.querySelectorAll('.blog-card').length / articlesPerPage);
    //if (currentPage < totalPages) {
      //  currentPage++;
        //displayArticles();
  //  }
//}

// Kör funktionen vid sidladdning
//window.onload = function() {
 //   displayArticles();
//};

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM content loaded");
  
    if (document.querySelector('.swiper')) {
      console.log("Swiper element found");
  
      var swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 2200,
            disableOnInteraction: false,
        },
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',  // Visa en artikel i taget utan att skala om
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
      });
    } else {
      console.error("Swiper element not found");
    }
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

