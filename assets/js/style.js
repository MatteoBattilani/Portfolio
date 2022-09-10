
function toggleMenu() {
   var menuBox = document.getElementById('menu-box');    
   if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
     menuBox.style.display = "none";
   }
   else { // if is menuBox hidden, display it
     menuBox.style.display = "block";
   }
 }

 // Function that calculates my years of work at every page refresh 
 window.onload = function getYearsOfWork(){
    var startYearWork= 2020;
    var currentYear= new Date().getFullYear();
    var yearsOfWork= currentYear - startYearWork;
    document.getElementById("years").innerHTML = yearsOfWork;
 }