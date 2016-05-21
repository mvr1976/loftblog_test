$(function(){
	var status = [];
	$(".course .checkbox_wrap").on("click", function(){
		alert("it works!");
	$(this).css("background-position", "20px");
				$(this).parent(".checkbox").css("background-color", "#E8F1DC");
				$(this).closest(".course").css("background-color", "#ECF4E2");
				$(this).closest(".course").slideUp(function(){
					status = $(".course").filter(":visible");
					if(status.length == 0){
						// $(".report").fadeIn(1000);
						console.log("it's done!");
					}
				});					
			});
		});

		