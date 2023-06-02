document.querySelector(".school-solved").addEventListener("click", () => {
    document.querySelector(".school-solved").classList.toggle("open");
    document.querySelector("nav .nav-wrap-one ul").classList.toggle("open");
    document.querySelector("nav div:last-child").classList.toggle("open");
  });