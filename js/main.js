$(window).on("load", function () {
  /* ==========================================================================
   Preloader
   ========================================================================== */
  $(".preloader-circle").css("display", "none");
  $(".preloader").fadeOut(400);
  $("body").removeClass("loading");

  /* ==========================================================================
   Vehicle specs
   ========================================================================== */
   //get window width
   var w = window.innerWidth;

   if (w > 400){
   //update window width
   window.addEventListener("resize", function() {
        w = window.innerWidth;
    });
   }


  $(".specs").click(function(){
    var idNum = $(this).attr('id').slice(-1);
    var specs = "#vehicle-"+idNum+" .pic .info-container";
    

    if (w > 1200){ //on big screens

      $(specs).toggleClass('opacity');

    }else if ($(this).hasClass("open")){//on mobile opened
      $(this).html("Ver Especificaciones");//update text

      $("#vehicle-"+idNum+" .texts .col.table").remove()
      $(this).removeClass("open");//set state class

      
    }else{//on mobile closed

      $(this).html("Esconder Especificaciones");//update text

      var toBeRemoved = '</tbody></table></div><div class="col table"><table><tbody>'//to unify tables
      var html = $(specs).html().replace(/\>\s+\</g, "><").replace(toBeRemoved, "").replace(toBeRemoved, ""); //prepare new table
      $("#vehicle-"+idNum+" .texts").append(html); //append the table

      $(this).addClass("open");//set state class
      
    }
  });
  





  /* ==========================================================================
    Auto-updating year (footer)
    ========================================================================== */
  $("span.year").text(new Date().getFullYear());





});