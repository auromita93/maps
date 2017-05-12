function gmap() {
    //map API updates based on lat/long/zoom entries
    'use strict'
    var lat = $("#latitude").val();
    var long = $("#longitude").val();
    var zoom = $("#zoom").val();
    var updated = "https://maps.googleapis.com/maps/api/staticmap?center="+lat+","+long+"&zoom="+zoom+"&size=600x400&maptype=roadmap"
    console.log(updated);
    
    //update image source
    $('#map').attr("src", updated);
    
    event.preventDefault();
}

function locationSel (){
    //map API updates based on location selection
   var value = $(this).val();
    
    $(document).ready(function(){
        switch (value){
                
            case '1':
                console.log('https://maps.googleapis.com/maps/api/staticmap?center=38.360674,+-75.599369&zoom=13&size=600x400&maptype=roadmap');
                break;
            case '2':
                console.log('https://maps.googleapis.com/maps/api/staticmap?center=38.322063,-75.620203&zoom=13&size=600x400&maptype=roadmap');
                break;
            case '3':
                console.log('https://maps.googleapis.com/maps/api/staticmap?center=38.346042,-75.643881&zoom=13&size=600x400&maptype=roadmap');
                break;
                
        }
    }
   
}
