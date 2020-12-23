$(document).ready(function () {

      /* ==========================================================================
      Materialize - materializecss.com
      ========================================================================== */
    $('.sidenav').sidenav({
        edge: 'right'
    });

    $('.dropdown-trigger').dropdown({
        hover:true,
        constrainWidth:false,
        coverTrigger:false,
        inDuration:400,
        outDuration:400
      });
    $('.modal').modal();
});