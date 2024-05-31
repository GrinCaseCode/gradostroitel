$(document).ready(function() {

		/*input file*/
		$("input[type='file']").change(function(){
			var filename_text = $(this).parent().siblings(".name-upload");
			var filename = $(this).val().replace(/.*\\/, "");
			filename_text.html(filename);
		});

		$(".input-phone").mask("+7 (999) 999-99-99");


});

