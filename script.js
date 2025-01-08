'use strict';

// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(element => element.classList.add('start'));
});

// Utility function to toggle an element's class
const toggleClass = (element, className = 'active') => {
    element.classList.toggle(className);
};

// Sidebar toggle functionality
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener('click', () => toggleClass(sidebar));
}

// Custom select functionality
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

if (select && selectItems && selectValue) {
    selectItems.forEach(item => {
        item.addEventListener('click', () => {
            const selectedValue = item.innerText.toLowerCase();
            selectValue.innerText = item.innerText;
            toggleClass(select);
            filterItemsByCategory(selectedValue);
        });
    });
}

// Filter functionality
const filterItemsByCategory = selectedValue => {
    filterItems.forEach(item => {
        if (selectedValue === 'all' || selectedValue === item.dataset.category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

if (filterBtns) {
    let lastClickedBtn = filterBtns[0];
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedValue = btn.innerText.toLowerCase();
            selectValue.innerText = btn.innerText;
            filterItemsByCategory(selectedValue);

            lastClickedBtn.classList.remove('active');
            btn.classList.add('active');
            lastClickedBtn = btn;
        });
    });
}

// Contact form validation
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formInputs && formBtn) {
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (form.checkValidity()) {
                formBtn.removeAttribute('disabled');
            } else {
                formBtn.setAttribute('disabled', '');
            }
        });
    });
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

if (navigationLinks && pages) {
    navigationLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            pages.forEach(page => page.classList.remove('active'));
            navigationLinks.forEach(nav => nav.classList.remove('active'));

            pages[index].classList.add('active');
            link.classList.add('active');
            window.scrollTo(0, 0);
        });
    });
}
