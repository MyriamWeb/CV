function darkMode() {
    var element = document.body;
    element.classList.toggle("darkmode");

    var sections = document.getElementsByTagName("section");
      for (var section of sections){
        section.classList.toggle("darkmode")
      
      }

}