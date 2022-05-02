// JavaScript source code

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Hide element on scroll down, show element on scroll up
var lastScrollTop; // This Varibale will store the top position

navbarHeader = document.getElementById('navbarHeader'); // Get The NavBar Header Text
navbar = document.getElementById('navbar'); // Get the NavBar

window.addEventListener('scroll', function () {
    //on every scroll this funtion will be called

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //This line will get the location on scroll

    if (scrollTop > lastScrollTop) { //if it will be greater than the previous
        navbarHeader.style.top = '-100';
        navbarHeader.style.position = 'sticky';
        navbar.style.top = '-100';
        navbar.style.position = 'sticky';

        //set the value to the negetive of height of navbar 
    }

    else {
        navbarHeader.style.top = '0';
        navbarHeader.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.position = 'fixed'
    }

    lastScrollTop = scrollTop; //New Position Stored
});
//window.addEventListener('scroll', effects);
//window.addEventListener('scroll', scrollFunction);
