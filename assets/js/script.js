$(document).ready(function(){
    $(window).on('scroll', function(){
      if ($(window).scrollTop()) {
        $("header").addClass('bgc-dark');
      }else{
        $("header").removeClass('bgc-dark');
    }
    });
  });



  const barOuter = document.querySelector(".bar-outer");
  const options = document.querySelectorAll(".bar-grey .option");
  let current = 1;
  
  
  options.forEach((option, i) => (option.index = i + 1));
  options.forEach(option => option.addEventListener("click", function() {
      barOuter.className = "bar-outer";
      barOuter.classList.add("pos"+option.index);
  
      if (option.index > current) {
          barOuter.classList.add("right");
      } else if (option.index < current) {
          barOuter.classList.add("left");
      }
      current = option.index;
      currentm = option.index;
  
      if(current === 1){
        //document.getElementById("main-title").scrollIntoView({behavior: 'smooth'});
        //$(window).scrollTop({top: 0, behavior: 'smooth'});
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
      if(current === 2){
        //document.getElementById("works").scrollIntoView({behavior: 'smooth'});
      }
      if(current === 3){
        //document.getElementById("contacts").scrollIntoView({behavior: 'smooth'});
      }
  
  }));