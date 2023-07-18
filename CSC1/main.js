// Variables 
var loadingaz = document.getElementById("ezz");
const submit = document.getElementById("submit");
const name = document.getElementById("name");
const username = document.getElementById("username");
const phone = document.getElementById("phonenumber");
const password = document.getElementById("password");
const loginPass = document.getElementById("loginpassword");
const loginName = document.getElementById("loginname");

// Local Storage items when sign up (backend.js haha)
function local(){
    localStorage.setItem("name",""+name.value+"");
    localStorage.setItem("username",""+username.value+"");
    localStorage.setItem("password",""+password.value+"");
    localStorage.setItem("phone",""+phone.value+"");
    localStorage.setItem('login','0')
}

// Match login values with sign up values if matched go home page if not display error message
function match(){
    if(loginName.value == localStorage.getItem("name") && loginPass.value == localStorage.getItem("password")){
        window.location  = '/src/pages/home.html'
        localStorage.setItem("login","1")
    }else{
        error.innerHTML = "!! Username or Password invalid";
    }
}

// When loged In go to Home page directly 
if(localStorage.getItem("login") == "1"){
    window.location = '/src/pages/home.html'
}
if(localStorage.getItem("") == ""){
    window.location = '/index.html'
}
if(localStorage.getItem("login") == "0"){
    window.location = '/src/pages/login.html'
}
w
// Loading page animation
function loadinga(){
    loadingaz.style.display = "none";
}