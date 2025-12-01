let switchBtn = document.querySelector('.switch_light_and_dark_mode_button');
let cssLink = document.querySelector('.web_css_style');

let back_to_home_page_button = document.querySelector('.back_to_home_page_button')


window.addEventListener('load', function () {
    let savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

// switch_light_and_dark_mode_button
function applyTheme(mode) {
    if (!cssLink) return;

    if (mode === 'dark') {
        cssLink.setAttribute('href', 'assets/css (styles)/style.darkmode.css');
    } else {
        cssLink.setAttribute('href', 'assets/css (styles)/style1.css');
    }
}

if (switchBtn) {
    switchBtn.addEventListener('click', function () {
        let currentTheme = localStorage.getItem('theme') || 'light';
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';

        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}

// back_to_home_page_button
back_to_home_page_button.addEventListener('click' , function(){
    window.location.href = "home-page.html";
})