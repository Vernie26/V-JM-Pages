

$(window).on("load",function(){
    
   // home section slideshow
   let slideIndex = $(".slide.active").index();
   const slidelen = $(".slide").length;
   function slideShow(){
    console.log(slideIndex)
    $(".slide").removeClass("active").eq(slideIndex)
    .addClass("active");
    if(slideShow==slidelen-1){
        slidelen = 0;
    }
    else{
        slideIndex++;
    }
    setTimeout(slideShow,5000);
   }
   slideShow();
})

$(document).ready(function(){

    // people filter
    peopleFilter($(".filter-btn.active").attr("data-target"))
    function peopleFilter(target){
        console.log(target)
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='"+target+"']").fadeIn();
    }
})