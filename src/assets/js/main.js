/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    var currentPage = window.location.pathname;

    // Set the active section based on the current page
    setActiveSection(currentPage);
});

function setActiveSection(currentPage) {
    // Get all the navigation links
    var navLinks = document.querySelectorAll(".navbar-nav a");

    // Iterate through each link and check if it corresponds to the current page
    navLinks.forEach(function (link) {
        // Remove the 'active' class from all links
        link.classList.remove("active");

        // Check if the link's href attribute matches the current page
        if (link.getAttribute("href") === currentPage) {
            // Add the 'active' class to the matching link
            link.classList.add("active");
        }
    });
}
