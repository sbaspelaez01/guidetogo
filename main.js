route ();

authGuard();



function route(){
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");

}

function logOut() {
    localStorage.removeItem("login");
    location.href = "login.html";
  }
  
  function authGuard() {
    if (localStorage.getItem("login") != "user") {
      location.href = "login.html";
    }
  }
  