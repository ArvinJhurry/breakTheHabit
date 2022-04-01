const protocol = window.location.protocol;
const host = window.location.host;

const loginSubmitButton = document.querySelector("#loginSubmitButton");
const loginUser = document.querySelector("#loginUser");
const loginPass = document.querySelector("#loginPass");
const loginForm = document.querySelector('#loginForm');

const registerSubmitButton=document.querySelector("#registerSubmitButton")
const regUser=document.querySelector('#registerUser');
const regPass=document.querySelector('#registerPass')
const regForm=document.querySelector('#registerForm');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
})

regForm.addEventListener('submit', e => {
    e.preventDefault();
})

let err=document.getElementById('error')
let err2=document.getElementById('regerror')
loginSubmitButton.addEventListener("click", () => {
    fetch(`${protocol}//${host}/login`, {
        "method": 'POST',
        "headers": {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify({username: loginUser.value, password: loginPass.value})
    })
    .then(resp => {
        console.log(`Our res code is ${resp.status}`)
        if (resp.status == 200) { 
            err.innerHTML=""
            localStorage.setItem('username', loginUser.value);
            localStorage.setItem('password', loginPass.value);
            window.location.href="/"
            document.querySelector('#checkUserLog').innerHTML = `You are logged in as ${loginUser.value}`
        }
        else if (resp.status == 403) {
            err.innerHTML="Wrong password"
        }
        else if (resp.status == 401) {
            err.innerHTML = `User ${loginUser.value} does not exist. Please create an account`
        }
    
    })
});

registerSubmitButton.addEventListener("click", () => {
    fetch(`${protocol}//${host}/register`, {
        "method": 'POST',
        "headers": {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify({username: regUser.value, password: regPass.value})})
    .then(resp => {
        console.log(`Our res code is ${resp.status}`)
        if (resp.status == 200) { 
            console.log(`User ${regUser.value} has registered`)
            err2.innerHTML=""
            localStorage.setItem('username', regUser.value);
            localStorage.setItem('password', regPass.value);
            window.location.href="/"
        } else if (resp.status ==401) {
            err2.innerHTML=`Username ${regUser.value} already exists. Choose a unique one`
        }
    })
});
