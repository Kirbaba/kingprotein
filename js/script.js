$( document ).ready(function() {
    $(".content__sidebar-left--toggle").click(function(e) {
        e.preventDefault();
        $(".content__sidebar-left--catalog").slideToggle("slow");
    });
});