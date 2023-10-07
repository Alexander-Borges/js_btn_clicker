console.log("page loaded...");

function message(){
    alert("Ninja was liked");
}

function login(element) {
    console.log("hello", element);
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    element.remove();
}