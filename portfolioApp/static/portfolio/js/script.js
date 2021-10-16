const themeMode = document.getElementsByClassName('theme-mode');
const defaultMode = 'dark';
const inputName = document.getElementById('input-name');
const inputSubject = document.getElementById('input-subject');
const inputEmail = document.getElementById('input-email');
const inputMessage = document.getElementById('input-message');
const getInTouchForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

const backdrop = document.getElementById('backdrop');
const djangoModelsUpper = document.querySelectorAll('.projectModel-upper');

// THEME //
let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme(defaultMode);
    localStorage.setItem('theme', defaultMode);
    theme = defaultMode;
} else {
    setTheme(theme);
}

for (let i = 0; i < themeMode.length; i++) {
    themeMode[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme').href = static + "/style.css";
    }

    if (mode == 'dark') {
        document.getElementById('theme').href = static + "/dark.css";
    }

    localStorage.setItem('theme', mode);
}


// FORM VALIDATION //
const showError = (input, textContent) => {
    const formDiv = input.parentElement; // .form-div
    const small = formDiv.querySelector('small');
    small.innerText = textContent;
    small.className = 'invalid-input-small visible';
}


const hideError = (input) => {
    const formDiv = input.parentElement;
    const small = formDiv.querySelector('small');
    small.className = 'invalid-input-small invisible';
}


const checkInputs = () => {
    const inputNameValue = inputName.value.trim();
    const inputSubjectValue = inputSubject.value.trim();
    const inputEmailValue = inputEmail.value.trim();
    const inputMessageValue = inputMessage.value.trim();
    
    let validInputs = true;

    if (inputNameValue === null || inputNameValue === '') {
        showError(inputName, 'Please enter valid name');
        validInputs = false;
    } else {
        hideError(inputName);
    }

    if (inputSubjectValue === null || inputSubjectValue === '') {
        showError(inputSubject, 'Please enter valid subject');
        validInputs = false;
    } else {
        hideError(inputSubject);
    }

    if (inputEmailValue === null || inputEmailValue === '') {
        showError(inputEmail, 'Please enter valid email');
        validInputs = false;
    } else {
        hideError(inputEmail);
    }

    if (inputMessageValue === null || inputMessageValue === '') {
        showError(inputMessage, 'Please enter valid message');
        validInputs = false;
    } else {
        hideError(inputMessage);
    }

    return validInputs
}


getInTouchForm.addEventListener('submit', (e) => {
    const validInputs = checkInputs();
    
    if (!validInputs) {
        e.preventDefault();
    }
});


// MODAL AND BACKDROP //
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};


const showModalHandler = (indx) => {
    const modal = document.getElementById('add-modal'+indx);
    modal.classList.add('visible');
    toggleBackdrop();
}

const closeModal = () => {
    const modal = document.querySelectorAll('.my-modal.visible').item(0);
    modal.classList.remove('visible');
    toggleBackdrop();
}


const backdropClickHandler = () => {
    closeModal();
}


for (let i=0; i < djangoModelsUpper.length; i++) {
    djangoModelsUpper[i].addEventListener('click', showModalHandler.bind(this, i));
}


backdrop.addEventListener('click', backdropClickHandler);


