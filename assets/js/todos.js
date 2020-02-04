// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation(); //stop the bubbling of other elements
});


//Adding a new todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing the new todo from input
        let todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});