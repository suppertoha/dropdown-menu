window.addEventListener('load', function () {


  //! accordion
  document.querySelectorAll(".accordion-start-js").forEach((el) => {
    el.addEventListener("click", () => {
      const content = el.nextElementSibling;
      let nextAccordion = el.nextElementSibling;
      
      while (nextAccordion && !nextAccordion.classList.contains("accordion-start-js")) {
        nextAccordion = nextAccordion.nextElementSibling;
      }
      
      el.classList.toggle("open");
      content.classList.toggle("open");
      
      if (nextAccordion && nextAccordion.classList.contains("accordion-content-js")) {
        nextAccordion.classList.remove("open");
      }
    });
  });

  

});

//document.querySelectorAll(".accordion-start-js").forEach((el) => {
//  el.addEventListener("click", () => {
//    const content = el.nextElementSibling;
//    const accordions = document.querySelectorAll(".accordion-content-js");

//    accordions.forEach((elem) => {
//      if (elem !== content) { // закрыть все аккордеоны, кроме текущего
//        elem.classList.remove("open");
//      }
//    });

//    el.classList.toggle("open");
//    content.classList.toggle("open"); // переключить класс open текущего аккордеона
//  });
//});
