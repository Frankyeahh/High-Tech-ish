function journalPageSwitch(){
    window.location.href="journalPage.html";
}
function loginPage(){
    window.location.href="loginPage.html";

}

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    } 

   function myFunction(){
      var p =document.getElementById("mydata");
      p.innerHTML =getDate();
    }

    function getDate(){
      var months=['Jan.','Feb.','Mar.','Aprl.','May.','Jun.','Jul.','Aug.','Sept.','Nov.','Dec.'];
      var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      var d= new Date()
      
      var result="Today's Date: "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+"("+days[d.getDay()]+").";
      return result;
    }
    
    function changeTheme(){

    }