function openNav() 
{
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() 
{
  document.getElementById("mySidenav").style.width = "0";
}

/*window.onscroll = function() {myFunction()};*/



function myFunction() {
  var header = document.getElementById("home");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}