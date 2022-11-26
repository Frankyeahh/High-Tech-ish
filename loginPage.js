
document.addEventListener("DOMContentLoaded",() =>{

    const loginForm = document.getElementById("login");

    const createAccountForm = document.getElementById("createAccount");

    document.getElementById("linkCreate").addEventListener("click",e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.getElementById("linkLogin").addEventListener("click",e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});

function signup(e){
    event.preventDefault();
    var username = document.getElementById('createUsername').value;
    var password= document.getElementById('createPassword').value;

    var user = {
        username: username,
        password: password,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("successfully registered!");

}

function loginfunc(e){
    event.preventDefault();

    var username = document.getElementById("Username").value;
    var password= document.getElementById("Password").value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);
    
  
     if(user == null){
        alert("wrong username or password")
    }
    else if(username== data.username && password == data.password){
        window.location.href="welcomePage.html";
    }
    else(
        alert("wrong username or password")
    )
}


