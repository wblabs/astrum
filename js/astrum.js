function toggleCompactHeader() {
    document.body.classList.toggle(
        'compact-header',
        window.scrollY > 50);
}

// toggle  Mobile menu
function mobilemenu() {
    document.getElementById("mobnav").classList.toggle("mobnav--active");
    document.getElementById("main-nav").classList.toggle("main-nav--active");
}

function onReady() {
    toggleCompactHeader()
}

window.onLoad = onReady;
window.addEventListener('scroll', toggleCompactHeader);


//tabs

let tab = function() {
    let tabNav = document.querySelectorAll(".header-center-nav__item"),
        tabContent = document.querySelectorAll(".sp-tab"),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-sp-tab-name');
        selectTabContent(tabName);
    };

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        });
    };
};
tab();