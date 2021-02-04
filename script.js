 $( "#search1" ).click(function() {

    $.ajax({
        url: "oceanInfo.php",
        type: 'POST',
        dataType: 'json',
        
        data: {
            lat: $('#latitude1').val(),
            lng: $('#longitude1').val()
            
        },
        success: function(result) {

            console.log(result);

            if(result.status.name == "ok")
            {
            
              $('#oceanName').html(result ['data']['name']);
                
            }
        
        },
        error: function (jqXHR, textStatus, errorThrown) {

            alert("An error occured:" + jqXHR.status + " " + jqXHR.textStatus);
            
        }
    });
}); 

   

$( "#search2" ).click(function() {

    $.ajax({
        url: "countryInfo.php",
        type: 'POST',
        dataType: 'json',
        
        data: {
            lat: $('#latitude2').val(),
            lng: $('#longitude2').val()
            
        },
        success: function(result) {

            console.log(result);

            if(result.status.name == "ok")
            {
            
              $('#countryCode').html(result ['data']);
                
            }
        
        },
        error: function (jqXHR, textStatus, errorThrown) {

            alert("An error occured:" + jqXHR.status + " " + jqXHR.textStatus);
            
        }
    }); 


});

$( "#search3" ).click(function() {

    $.ajax({
        url: "addressInfo.php",
        type: 'POST',
        dataType: 'json',
        
        data: {
            lat: $('#latitude3').val(),
            lng: $('#longitude3').val()
            
        },
        success: function(result) {

            console.log(result);

            if(result.status.name == "ok")
            {
            
              $('#houseNumber').html(result ['data']['houseNumber']);
              $('#locality').html(result ['data']['locality']);
              $('#street').html(result ['data']['street']);
               
            }
        
        },
        error: function (jqXHR, textStatus, errorThrown) {

            alert("An error occured:" + jqXHR.status + " " + jqXHR.textStatus);
            
        }
    }); 


});
