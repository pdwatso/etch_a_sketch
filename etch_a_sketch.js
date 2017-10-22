$(document).ready(function(){
	// jQuery methods
	
	function setBoard(boxCount) {	

		var squareSize = 600 / boxCount;
		
		$("<div class=container></div>").appendTo("body");

		for (i = 0; i < boxCount; i++) {
		 	$("<div class = 'row'></div>").appendTo(".container");
		} 

		for (i = 0; i < boxCount; i++) {
			$("<div class = square></div>").appendTo(".row");
		}
		
		$(".square").width(squareSize);
		$(".square").height(squareSize);

		$(".square").mouseenter( function() {
			$(this).addClass("squareHovered");
		});
	}
	
	setBoard(16);


	$("button").click(function (){
	  $(".container").remove();
		setBoard(prompt("How many squares per side would you like the grid?"));
	});
	
	
});