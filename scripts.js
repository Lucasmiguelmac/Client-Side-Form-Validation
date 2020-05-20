// Conseguimos todos los elementos que querramos escuchar
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    // Prevenimos que se submitée el form uando el user haga click (primero queremos chequear que esté todo ok)
    e.preventDefault();
    // Chequeamos que esté todo ok
    checkInputs();
});

// Función que se fija que todos los inputs estén ok
function checkInputs(){
    // Obtenemos los valores del input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // username: mostramos la clase success/error según los resultados de la validación
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } else {
        // mostramos que se ingresó bien
        setSuccessFor(username)
    };

    // email: mostramos la clase success/error según los resultados de la validación
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Enter a valid email');
    } else {
        setSuccessFor(email); // está todo joya
    };
    
    // password: mostramos la clase success/error según los resultados de la validación
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        
        // mostramos que se ingresó bien
        setSuccessFor(password)
    };

    // password2: mostramos la clase success/error según los resultados de la validación
    if (password2Value === '') {
        setErrorFor(password2, 'Confirm your password')
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'Passwords don\'t match')
    } else {
        // mostramos que se ingresó bien
        setSuccessFor(password2)
    };
};

function setErrorFor(input, message){
    // Mostramos los errores en texto rojo
    const formControl = input.parentElement; // Obtenemos el .form-control que rodea al input
    const small = formControl.querySelector('small');
    small.innerText = message;

    // Insertamos nuestra class error que tuneamos en CSS
    formControl.className = 'form-control error'
};

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

function isEmail(emai){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};