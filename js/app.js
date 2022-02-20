const loginForm = document.getElementById("login-form");
const loginInput= loginForm.querySelector("input");
const greeting= document.querySelector("#greeting");
const todoform=document.querySelector("#todo-form");

const HIDDEN_CLASS_NAME="hidden"

const link= document.querySelector("a");
const savedUsername=localStorage.getItem("username");
const USERNAME_KEY="username"

function onLoginSubmit(tomato){
    tomato.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    
    paintGreetings(username);
}

function handleLinkClick(event){
    
    event.preventDefault();
    console.dir(event);
}

function onExsistName(){
    if (savedUsername!==null){
        paintGreetings(savedUsername);
    } else{
        loginForm.classList.remove(HIDDEN_CLASS_NAME);
    }
}

function paintGreetings(username){
    greeting.textContent= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
    todoform.classList.remove(HIDDEN_CLASS_NAME);
}

function clickLogout(){
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

window.addEventListener("load", onExsistName);
loginForm.addEventListener("submit", onLoginSubmit);
