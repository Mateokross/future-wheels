$(window).on("load", function () {
  /* ==========================================================================
   Preloader
   ========================================================================== */
  $(".preloader-circle").css("display", "none");
  $(".preloader").fadeOut(400);
  $("body").removeClass("loading");


  /* ==========================================================================
      Materialize - materializecss.com
      ========================================================================== */
    $('.dropdown-trigger').dropdown({
      hover:true,
      constrainWidth:false,
      coverTrigger:false,
      inDuration:400,
      outDuration:400
    });
  /* ==========================================================================
    Auto-updating year (footer)
    ========================================================================== */
  $("span.year").text(new Date().getFullYear());
});