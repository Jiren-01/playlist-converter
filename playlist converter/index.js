document.addEventListener("DOMContentLoaded", function () {
    const navList = document.getElementById("navList");
    const hamburgerIcon = document.getElementById("hamburgerIcon");
  
    hamburgerIcon.addEventListener("click", function () {
      navList.classList.toggle("show");
    });
  });
  