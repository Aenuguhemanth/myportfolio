'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Get all the elements with the "typewriter" class
    var typewriter = document.querySelectorAll('.typewriter');
    // Loop through each element and add the "start" class to trigger the animation
    for (var i = 0; i < typewriter.length; i++) {
        var currentElement = typewriter[i];
        currentElement.classList.add('start');
    }
});

// element toggle function
const elementToggleFunc = function(elem) {
    elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function() {
    elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function() {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function(selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function() {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// EmailJS initialization
emailjs.init("TEHZzYV-2k_b53bem"); // Replace with your public key

// Add event to form submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_p1m8x7b', 'template_sdowgqn', form)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('Success:', response);
            form.reset(); // Reset the form fields after submission
            formBtn.setAttribute("disabled", ""); // Disable the button again
        })
        .catch(function(error) {
            alert('Failed to send the message. Please try again.');
            console.error('Error:', error);
        });
});

// Add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function() {
        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links and pages
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    // Function to handle page switching
    const handlePageSwitch = function() {
        const targetPage = this.innerText.trim().toLowerCase();  // Get the target page name
        for (let i = 0; i < pages.length; i++) {
            const pageName = pages[i].dataset.page;
            if (targetPage === pageName) {
                // Show the target page and highlight the link
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
            } else {
                // Hide other pages and remove highlight from other links
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    // Attach event listener to each navigation link
    navigationLinks.forEach(link => {
        link.addEventListener("click", handlePageSwitch);
    });
});
