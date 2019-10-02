$(document).foundation();  
$(document).ready(function(){
    $(".standard").click(function(){
        $(".advanced, .info").removeClass("selected");
        $("#advanced_options, #info_options").fadeOut(1000, function(){
            $(".standard").addClass("selected");
            $("#standard_options").fadeIn(500)
        });
    });  
    $(".advanced").click(function(){
        $(".standard, .info").removeClass("selected");
        $("#standard_options, #info_options").fadeOut(1000, function(){
            $(".advanced").addClass("selected");
            $("#advanced_options").fadeIn(500)
        });
    });  
    $(".info").click(function(){
       $(".standard, .info").removeClass("selected");
        $("#standard_options, #info_options").fadeOut(1000, function(){
            $(".info").addClass("selected");
            $("#info_options").fadeIn(500)
        });
    }); 
});