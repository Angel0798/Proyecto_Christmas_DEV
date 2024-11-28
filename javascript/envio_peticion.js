
//fetch('https://srv-ochodemo.eyspsasrv.com/MultiParkingWS/Service.svc/test/aloha/')
/*fetch('http://localhost:2424/MultiParkingWS/Service.svc/test/aloha/')
.then(response =>{
    console.log(response)
})*/
//http://localhost:2424/MultiparkingWS/Service.svc/test/aloha/
//bibliote.json
//fetch('https://api.mercadolibre.com/sites/MLA/search?q=malabares')
//.then(res => res.json())
//.then(res => console.log(res));

console.log("godl,");
if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
    });   
}
$.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
    console.log(data);
  })