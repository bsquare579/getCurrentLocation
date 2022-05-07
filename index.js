      function getAddress() {
        var lat = parseFloat(document.getElementById('lat').value);
        var lng = parseFloat(document.getElementById('lng').value);
        alert(lat + ',' + lng);
      }
      window.onload = getAddress;      
      function getLocation(){
        if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
              console.log("The Browser Does not Support Geolocation");
            }
      }
      function showError(error) {
            if(error.PERMISSION_DENIED){
                console.log("The User have denied the request for Geolocation.");
            }
          }
      function showPosition(position){
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        document.getElementById('lat').value = lat;
        document.getElementById('lng').value = lng;
        
      }
      
      getLocation();
      
