

const color = [
    {
        name:'orange',
        code:'#ff4500',
        url:'orange.css'
    },
    {
        name:'light blue',
        code:'#3e99f4',
        url:'light-blue.css'
    },
    {
        name:'light green',
        code:'#0dcdbd',
        url:'light-green.css'
    },
    {
        name:'red',
        code:'#cc3b3b',
        url:'red.css'
    },
    {
        name:'yellow',
        code:'#ff9801',
        url:'yellow.css'
    }

]

$(document).ready(function () {
    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++){
            const span = document.createElement("span");
            span.style.backgroundColor = color[i].code;
            $(".colors").append(span);
        }
    }

    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate-style").attr("href",color[index].url);
    });
    // theme light and dark mode
    $(".theme-mode").change(function(){
        if($(this).val() == "light"){
            $("body").removeClass("dark")
        }
        else{
            $("body").addClass("dark")
        }
    })

    // toggle setting box
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    })
})




