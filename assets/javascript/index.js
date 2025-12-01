let password_input = document.querySelector('.password_input')
let enter_button = document.querySelector('#enter_button')
let error_password_box = document.querySelector('.error_password_box')
let reset_password_button = document.querySelector('.reset_password_button')
let reset_password_input_box = document.querySelector('.reset_password_input_box')
let reset_password_input = document.querySelector('.reset_password_input')
let check_reset_password_button = document.querySelector('.check_reset_password_button')
let close_reset_box = document.querySelector('.close_reset_box')



password_input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        enter_button.click();
    }
});

reset_password_input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        check_reset_password_button.click();
    }
});

enter_button.addEventListener('click', function() {
    let password_input_value = password_input.value.trim();
    if (password_input_value === 'todo') {
        window.location.href = "home-page.html";
    } else {
        error_password_box.textContent = "The password is incorrect !";
        error_password_box.style.color = "red";

        setTimeout(function(){
            error_password_box.textContent = ""
        } , 3000)
    }
});

reset_password_button.addEventListener('click', function() {
    reset_password_input_box.classList.remove('d-none')
    reset_password_input_box.classList.add('d-flex')
})

check_reset_password_button.addEventListener('click' , function(){
    let reset_password_input_value = reset_password_input.value.trim();
    if (reset_password_input_value === 'todo') {
        reset_password_input_value = "."
        window.location.href = "home-page.html";
    } else {
        error_password_box.textContent = "The password is incorrect !";
        error_password_box.style.color = "red";

        setTimeout(function(){
            error_password_box.textContent = ""
        } , 3000)
    }
})

close_reset_box.addEventListener('click' , function(){
    reset_password_input_box.classList.remove('d-flex')
    reset_password_input_box.classList.add('d-none')
})