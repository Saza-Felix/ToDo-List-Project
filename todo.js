//Check Off Specific Todo By Clicking
$("li").Click(function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Togo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function());
       $(this).remove();
});

$("input[type='text']").keypress(function(){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeOut();
});
