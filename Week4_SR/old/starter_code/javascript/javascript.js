//Make sure document is ready before running any functions
$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();

//When user submits input, save as variable cityPic	
	var cityPic = $('city-type').val();
		$('#city-type').val('');


//If the user picks New York, set body background to New York image.
if (cityPic == "New York" ||
	cityPic == "New York City" ||
	cityPic == "NYC") {
	$('body').attr('class', 'nyc');
}

//If the user picks San Francisco, set body background to SF image.
else if (cityPic == "San Francisco" ||
	cityPic == "SF" ||
	cityPic == "Bay Area") {
	$('body').attr('class', '.sf');
}

//If the user picks Los Angeles, set body background to LA image.
else if (cityPic == "Los Angeles" ||
	cityPic == "LA" ||
	cityPic == "LAX") {
	$('body').attr('class', '.la');
}

//If the user picks Austin, set body background to Austin image.
else if (cityPic == "Austin" ||
	cityPic == "ATX" ||
	$('body').attr('class', '.austin');
}

//If the user picks Sydney, set body background to Sydney image.
else if (cityPic == "Sydney" ||
	cityPic == "SYD" ||
	$('body').attr('class', '.sydney');
};


