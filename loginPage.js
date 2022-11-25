
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
//This is just fun trying to store username and password into local storage,
//My intention was to use tools like php or sql, but since it's not allowed so I give up.
function createButton(){
    var userInfo =[];
    

    localStorage.setItem('userCredentials',JSON.stringify(userInfo));
}

