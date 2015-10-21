//Check to make sure document is ready
$(document).ready(function() {
        
//Prevent form submission
      $('#submit-btn').click(function(){
        event.preventDefault();


//Save input as variable when user submits

var cityPic = $('#city-type').val();
	$('#city-type').val('');


//this next commented part is something I was fooling around with earlier and I'm just 
//keeping it here for my own reference
/*$(document).ready(function() {
    $('#submit-btn').click(function() {
    	var cityPic = $('#city-type').val('');    
        });
    });*/

//If/Else Statements

//If the user picks New York, set body background to New York image.
if (cityPic == 'New York' ||
	cityPic == 'New York City' ||
	cityPic == 'NYC') {
	$('body').attr('class', 'nyc');
}

//If the user picks San Francisco, set body background to SF image.
else if (cityPic == 'San Francisco' ||
	cityPic == 'SF' ||
	cityPic == 'Bay Area') {
	$('body').attr('class', 'sf');
}

//If the user picks Los Angeles, set body background to LA image.
else if (cityPic == 'Los Angeles' ||
	cityPic == 'LA' ||
	cityPic == 'LAX') {
	$('body').attr('class', 'la');
}

//If the user picks Austin, set body background to Austin image.
else if (cityPic == 'Austin' ||
	cityPic == 'ATX') {
	$('body').attr('class', 'austin');
}

//If the user picks Sydney, set body background to Sydney image.
else if (cityPic == 'Sydney' ||
	cityPic == 'SYD') {
	$('body').attr('class', 'sydney');
   }
  });
});