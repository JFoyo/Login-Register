// Login popup script//
let logInPopUp = document.getElementById('logInPopUp');

function openPopUp() {
    logInPopUp.classList.add('open-popup');
}

function closePopUp(){
    logInPopUp.classList.remove('open-popup');
}


// Registration popup script//

let registrationPopUp = document.getElementById('registrationPopUp');

function registration(){
    registrationPopUp.classList.add('open-popup');
}

function closeRegistration(){
    registrationPopUp.classList.remove('open-popup');
}

//Show password//

let PasswordField1 = document.getElementById('PasswordField1');
let eyeIconField1 = document.getElementById('eyeIconField1');

eyeIconField1.onclick = function () {
    if (PasswordField1.type == 'password'){
        PasswordField1.type = 'text';
        eyeIconField1.src='eye-open.png';
    }
    else {
        PasswordField1.type = 'password';
        eyeIconField1.src='eye-close.png';
    }
}

let PasswordField2 = document.getElementById('PasswordField2');
let eyeIconField2 = document.getElementById('eyeIconField2');

eyeIconField2.onclick = function () {
    if (PasswordField2.type == 'password'){
        PasswordField2.type = 'text';
        eyeIconField2.src='eye-open.png';
    }
    else {
        PasswordField2.type = 'password';
        eyeIconField2.src='eye-close.png';
    }
}

let PasswordField3 = document.getElementById('PasswordField3');
let eyeIconField3 = document.getElementById('eyeIconField3');

eyeIconField3.onclick = function () {
    if (PasswordField3.type == 'password'){
        PasswordField3.type = 'text';
        eyeIconField3.src='eye-open.png';
    }
    else {
        PasswordField3.type = 'password';
        eyeIconField3.src='eye-close.png';
    }
}

// login //

let logInForm = document.getElementById('logInForm');
let userInfo = document.getElementById('userInfo');

logInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let userNameL = document.getElementById('userNameL');
    let PasswordField1 = document.getElementById('PasswordField1');

    let logIn = {
        userNameL: userNameL.value,
        PasswordField1: PasswordField1.value
    }

    let logInFotmat = `Username: ${logIn.userNameL}\nPassword: ${logIn.PasswordField1}`;

    console.log(logIn);

    userInfo.textContent = logInFotmat;
    alert('LogIn successfuly')

})


// Registration //

let registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let userNameR = document.getElementById('userNameR');
    let PasswordField2 = document.getElementById('PasswordField2'),
    PasswordField3 = document.getElementById('PasswordField3');

    let Register = {
        userNameR: userNameR.value,
        PasswordField2: PasswordField2.value,
        PasswordField3: PasswordField3.value
    }

    let RegisterFormat = `Username: ${Register.userNameR}\nPassword: ${PasswordField2.value}`;

    if (Register.PasswordField2 === Register.PasswordField3) {
        console.log(RegisterFormat);
        userInfo.textContent = RegisterFormat;
        alert('Congratulations! You are now registered.');
    } else {
        alert('Passwords did not match.');
        registration();
    }
})