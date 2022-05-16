$(document).ready(function() {
    $("#form-sub").submit(function(event) { 
        performSearch(event); });
  });

  function performSearch(event) {
    var request;
    event.preventDefault();
    $("#city-name").text("Searching ...");
  
    // Send the request  
   
    request = $.ajax({
        url: 'https://apilayer.net/api/validate',
        type: "GET",
        data: {  
          access_key:'1fd83af9dea643ebd5eeb1f4ef098b90',
          number:$("#city").val(),
          country_code:'IN',
          format:'1',
       }
    });
  
    // Callback handler for success
    request.done(function (response){
        formatSearchResults(response);
    });
    
    // Callback handler for failure
    request.fail(function (){
        $("#city-name").text("Please try again, incorrect input!");
        $("#city-temp").text("");
        $("img").attr('src', "");
        $("#city-weather").text("");
    });
  
  }

  function formatSearchResults(jsonObject) {  
    var city_name = jsonObject.carrier; 
    $("#city-name").text(city_name); 
  }




