let todo_input = document.querySelector('.todo_input')
let todo_add_button = document.querySelector('.todo_add_button')
let todo_list = document.querySelector('.todo_list')
let switch_light_and_dark_mode_button = document.querySelector('.switch_light_and_dark_mode_button')
let web_css_style = document.querySelector('.web_css_style')
let setting_and_user_button = document.querySelector('.setting_and_user_button')




todo_list.innerHTML = localStorage.getItem('todos') || "";

let todo_input_value = ""

// switch_light_and_dark_mode_button
window.addEventListener('load', function() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todo_list.innerHTML = savedTodos;
    }
    todo_input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            todo_add_button.click();
        }
    });

    let savedMode = localStorage.getItem('theme');

    if (savedMode === 'dark') {
        web_css_style.setAttribute('href', 'assets/css (styles)/style.darkmode.css');
        light_and_dark = 2;
    } else {
        web_css_style.setAttribute('href', 'assets/css (styles)/style1.css');
        light_and_dark = 1;
    }
});

todo_add_button.addEventListener('click' , function(){

    todo_input_value = todo_input.value

    if(todo_input_value.trim() == ""){

        let empty_input_error = document.querySelector('.empty_input_error')
        empty_input_error.textContent = "!!! please fill in this field."

        setTimeout(function(){
            empty_input_error.textContent = ""
        } , 2500)
        todo_input.value = ""
    }else{

        let todo_item = document.createElement('li')
        todo_item.classList.add('pe-1' , 'pt-1' , 'ps-2' , 'mb-2' , 'rounded-4' , 'd-flex' , 'justify-content-between' , 'align-items-start' , 'fs-5' , 'shadow' , 'todo_item')
        todo_item.innerHTML = 
            `<p class="mt-2 todo_item_style mx-2 fs-5 rubic_font">${todo_input.value}</p>
            <div class="d-flex justify-content-center align-items-center me-1 mt-1 rounded-4 border border-2 border-secondary shadow position-relative todo_item_more_buttons_box dm_todo_item_more_buttons_box">
            
                <div class="bg-light p-1 d-none justify-content-center rounded-4 border border-2 border-secondary shadow todo_item_buttons_box position-absolute dm_todo_item_buttons_box">
                    <button class="btn btn-primary px-1 py-0 mx-1 rounded-4 border border-2 border-light shadow" type="button" title=" You are doing itme" onclick="doing_item_button(this)"><i class="ri-play-circle-line fs-5 text-light px-1"></i></button>
                    <button class="btn btn-success px-1 py-0 me-1 rounded-4 border border-2 border-light shadow" type="button" title="You did item" onclick="check_item_button(this)"><i class="ri-checkbox-circle-line fs-5 text-light px-1"></i></button>
                    <button class="btn bg-info px-1 py-0 me-1 rounded-4 border border-2 border-light shadow" type="button" title="Refrech item to first mood" onclick="refresh_item_button(this)"><i class="ri-restart-line fs-5 text-light px-1"></i></button>
                    <button class="btn btn-secondary px-1 py-0 me-1 rounded-4 border border-2 border-light shadow" type="button" title="Edit item" onclick="edit_item_button(this)"><i class="ri-edit-2-line fs-5 text-light px-1"></i></button>
                    <button class="btn btn-danger px-1 py-0 me-1 rounded-4 border border-2 border-light shadow" type="button" title="Delete item" onclick="remove_item_button(this)"><i class="ri-delete-bin-line fs-5 text-light px-1"></i></button>
                </div>
                <button class="btn btn-light btn-outline-secondary border border-2 rounded-4 py-1 px-2 d-flex justify-content-center align-items-center more_box_button dm_more_box_button" type="button" title="More tools" onclick="more_box_button(this)"><i class="ri-more-2-fill"></i></button>
            </div>`
        todo_list.prepend(todo_item)        
        
        todo_input.value = ""

        saveTodos();
    }
})

window.addEventListener('load', function () {
    
});


switch_light_and_dark_mode_button.addEventListener('click', function () {
    if (light_and_dark == 1) {
        web_css_style.setAttribute('href', 'assets/css (styles)/style.darkmode.css');
        light_and_dark = 2;
        localStorage.setItem('theme', 'dark');
    } else {
        web_css_style.setAttribute('href', 'assets/css (styles)/style1.css');
        light_and_dark = 1;
        localStorage.setItem('theme', 'light');
    }
});


//remove_item_button
function remove_item_button(button){
    let item = button.closest('li')
    item.remove()
    
    saveTodos();
}

//check_item_button
function check_item_button(button){
    let item = button.closest('li')
    item.classList.remove('bg-light' , 'border-secondary-subtle' , 'bg-success-subtle' , 'border-success' , 'text-success')
    item.classList.add('bg-success-subtle' , 'border-success' , 'text-success')

    item.querySelector('p').classList.add('text-decoration-line-through')

    let buttons_box = item.querySelector('.todo_item_buttons_box');
    buttons_box.classList.remove('d-flex');
    buttons_box.classList.add('d-none');
    
    saveTodos();    
}

//doing_item_button
function doing_item_button(button){
    let item = button.closest('li')
    item.classList.remove('bg-light' , 'border-secondary-subtle' , 'bg-success-subtle' , 'border-success' , 'text-success')
    item.classList.add('bg-primary-subtle' , 'border-primary' , 'text-primary')
    item.querySelector('p').classList.remove('text-decoration-line-through')

    let buttons_box = item.querySelector('.todo_item_buttons_box');
    buttons_box.classList.remove('d-flex');
    buttons_box.classList.add('d-none');

    saveTodos();
}

//edit_item_button
function edit_item_button(button){
    let item = button.closest('li');
    let item_text = item.querySelector('p');
    let new_text = prompt('Please write your new text', item_text.textContent);

    if (new_text && new_text.trim() !== "") {
        item_text.textContent = new_text;

        let buttons_box = item.querySelector('.todo_item_buttons_box');
        buttons_box.classList.remove('d-flex');
        buttons_box.classList.add('d-none');

        saveTodos();
    }
}

//refresh_item_button
function refresh_item_button(button){
    let item = button.closest('li')
    item.classList.remove('bg-success-subtle' , 'border-success' , 'text-success' , 'bg-primary-subtle' , 'border-primary' , 'text-primary')
    item.classList.add('border-secondary-subtle')
    item.querySelector('p').classList.remove('text-decoration-line-through')
    
    let buttons_box = item.querySelector('.todo_item_buttons_box');
    buttons_box.classList.remove('d-flex');
    buttons_box.classList.add('d-none');

    saveTodos();  
}


// todo_clear_button

function todo_clear_button(){
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success mx-1",
        cancelButton: "btn btn-danger mx-1",
    },
    buttonsStyling: false
});
swalWithBootstrapButtons.fire({
    width : '350px',
    timer : '5000',
    timerProgressBar : 'true',
    color : '#0044ff77',
    iconColor : '#0044ff77',
    background : '#e1e9ffff',
    title: "Are you sure to delete all items?",
    text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete all",
    cancelButtonText: "No, cancel",
    reverseButtons: true
}).then((result) => {
    if (result.isConfirmed) {
        todo_list.textContent = ''
    }
    saveTodos();
});

}

    

// more_box_button
function more_box_button(button) {
    let item = button.closest('li');
    let buttons_box = item.querySelector('.todo_item_buttons_box');

    if (buttons_box.classList.contains('d-none')) {
        
        buttons_box.classList.remove('d-none');
        buttons_box.classList.add('d-flex');
    } else {
        
        buttons_box.classList.remove('d-flex');
        buttons_box.classList.add('d-none');
    }

    saveTodos();
}


function saveTodos(){
    localStorage.setItem('todos', todo_list.innerHTML);
}

// setting_and_user_button
setting_and_user_button.addEventListener('click' , function(){
    window.location.href = "personal-dashboard-page.html";
})