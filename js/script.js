// functionality when screen size reduces

document.addEventListener("DOMContentLoaded", function () {
    // Save the original parent of .dropdown
    const Dropdown = document.querySelector(".dropdown");
    const Blog = document.querySelector(".blog");
    const Logo = document.querySelector(".logo");
    const Cart = document.querySelector(".cart");


    const Parent1 = Dropdown.parentElement;
    const Parent2 = Blog.parentElement;
    const Parent3 = Logo.parentElement;
    const Parent4 = Cart.parentElement;

    function checkWidth() {

        // >>>>>>>>>>  blog
        if (window.innerWidth < 786) {
            // Move dropdown to navbar_top if not already there
            const navbarTop = document.querySelector(".navlinks");
            if (!navbarTop.contains(Blog)) {
                navbarTop.appendChild(Blog);
            }
        } else {
            // Move it back to original parent if screen is wider
            if (!Parent2.contains(Blog)) {
                Parent2.appendChild(Blog);
            }
        }

        ////////////////
        // dropdown

        if (window.innerWidth < 786) {
            // Move dropdown to navbar_top if not already there
            const navbarTop = document.querySelector(".navlinks");
            if (!navbarTop.contains(Dropdown)) {
                navbarTop.appendChild(Dropdown);
            }
        } else {
            // Move it back to original parent if screen is wider
            if (!Parent1.contains(Dropdown)) {
                Parent1.appendChild(Dropdown);
            }
        }

        // logo
        if (window.innerWidth < 786) {
            // Move dropdown to navbar_top if not already there
            const navbarTop = document.querySelector(".navbar_top");
            if (!navbarTop.contains(Logo)) {
                navbarTop.appendChild(Logo);
            }
        } else {
            // Move it back to original parent if screen is wider
            if (!Parent3.contains(Logo)) {
                Parent3.appendChild(Logo);
            }
        }

        // cart_icon &

        if (window.innerWidth < 786) {
            // Move dropdown to navbar_top if not already there
            const navbarTop = document.querySelector(".navbar_top");
            if (!navbarTop.contains(Cart)) {
                navbarTop.appendChild(Cart);

            }
        } else {
            // Move it back to original parent if screen is wider
            if (!Parent4.contains(Cart)) {
                Parent4.appendChild(Cart);
            }
        }

    }
    // Run on page load
    checkWidth();

    // Run on resize
    window.addEventListener("resize", checkWidth);
});
//////////////////////////////////////////////////////////////////////

// hamburger function

$(document).ready(function () {
    // hamburger dropdown
    $(".hamburger").click(function () {
        $(".navlinks").slideToggle("slow");
    });

    // dropdown toggle on click (mobile friendly)
    $(".dropdown > a").click(function (e) {
        e.preventDefault(); // stop the link from navigating
        $(this).parent().toggleClass("open");
    });



});

////////////////////////////////////////////////////////////////////////////////

// AOS link
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic'
});

////////////////////////////////////////////////////////////////////////////////
// swiper

// Swiper Init
var swiper = new Swiper(".mySwiper", {
    loop: true, // allows continuous sliding
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

///////////////////////////////////////////////////////////////////////

// cart function

$(document).ready(function () {
    var cartValue = 0;

    $(".btn_atc").click(function () {
        cartValue++;
        $(".cart_counter").text(cartValue);
    });
});

//////////////////////////////

// / < !--jquery validation-- >
$(document).ready(function () {
    $(".validateForm").each(function () {
        $(this).validate({
            rules: {
                first_name: {
                    required: true,
                    minlength: 3
                },
                last_name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                phoneNumber: {
                    required: true,
                    minlength: 11
                }
            },
            messages: {
                first_name: {
                    required: "First name is required",
                    minlength: "Name should be at least 3 characters long"
                },
                last_name: {
                    required: "Last name is required",
                    minlength: "Name should be at least 3 characters long"
                },
                email: {
                    required: "Email must be provided",
                    email: "Please enter a valid email address"
                },
                phoneNumber: {
                    required: "Phone number cannot be empty",
                    minlength: "Number cannot be less than 11 digits"
                }
            },
             errorClass: "error", 
        });
    });
});
