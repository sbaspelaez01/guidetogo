validateLogin();


function validateLogin(){
    if(localStorage.getItem("login") == "user"){
        location.href = "index.html";
    }
}
function login() {
    if(localStorage.setItem("login", "user"));
    location.href = "index.html";
  }


