 
 $(function() {
	var tableBody;
	tableBody = $( "#create-table-html" ).html();
   
	
	$( "#create-table" ).on("click", function(e){
		e.preventDefault();
		createTable();
		//createCurve();
	});
    
	$(document).on( "click",".edit_table_click", function(e) {
		
		$(this).closest('tr').next().next('.edit-table').toggle();
	});
	$(document).on( "click",".save-edit-table", function(e) {
		var table_name = $(this).prevAll('input').val();
		var table_comment = $(this).prevAll('textarea').val();
		var title_cmt_obj = $(this).parent()   // Finds the closest row <tr> 
                     .parent()     // Gets a descendent with class="nr"
                     .parent()
					 .parent();
					
		title_cmt_obj.find(".table_name").html(table_name); // Append table name 
		if( table_comment != '' )
		{
			title_cmt_obj.find(".table-comment").html(table_comment); // Append table comment
			title_cmt_obj.find(".comment").show(); // Show the table comment 
		}
		
		
	});
	function createTable()
	{
		$( "#graph" ).after(tableBody);
		$( ".entity-table" ).draggable({
				cursor: 'move',
				stop: function(){
						var offset = $(this).offset();
						var xPos = offset.left;
						var yPos = offset.top;
						createCurve(xPos,yPos)
                }
		 });
	}
	
	/**
	 * Function to create a beizer create
	 **/
	 function createCurve(xPos,yPos)
	 {
		canvas = document.getElementById("graph");
		ctx = canvas.getContext("2d")
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#333";
		ctx.beginPath();
        ctx.moveTo(xPos,yPos+50);
		ctx.bezierCurveTo(150, 100, 350, 100, 400, 250);
        ctx.stroke();
		
	 }
  
  });
