$(document).ready(function() {

  setTimeout(function(){ 
    alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);


  $('#psyche').click(function() {
        $("body").css( "background", '#f953c6' );
        $("#soft").css( "display", 'block' );
        $("#psyche").css( "display", 'none' );
        $("p").css( "color", 'blue' );
        $("p").css( "font-family", 'Source Sans Pro' );
        $("h1,h2,h3").css( "color", 'green' );
        $("h1,h2,h3").css( "font-family", 'Lora' );
        $("a").css( "color", 'white' );
    });

  $('#soft').click(function() {
        $("body").css( "background", '' );
        $("#soft").css( "display", '' );
        $("#psyche").css( "display", '' );
        $("p").css( "color", '' );
        $("p").css( "font-family", '' );
        $("h1,h2,h3").css( "color", '' );
        $("h1,h2,h3").css( "font-family", '' );
    });





});
