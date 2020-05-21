


function collectData () {

    fetch('/api/messageSigfox').then(function (response) {

        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {

        // This is the JSON from our response
        document.getElementById("payload").innerHTML = data.value === undefined ? "Payload Not Available!" : data.value.payload;
        document.getElementById("stamp").innerHTML = data.value === undefined ? "00:00 00:00" : data.value.time ;
        document.getElementById("lat").innerHTML = data.value === undefined ? "x": data.value.latitude;
        document.getElementById("lng").innerHTML = data.value === undefined ? "y": data.value.longitude;
        document.getElementById("temp").innerHTML = data.value === undefined ? "room": data.value.temperature;
        document.getElementById("hum").innerHTML =  data.value === undefined ? "normal" : data.value.humidity;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);

        document.getElementById("payload").innerHTML = "Payload Not Available" 
        document.getElementById("stamp").innerHTML =  "00:00 00:00" 
        document.getElementById("lat").innerHTML =  "x"
        document.getElementById("lng").innerHTML =  "y"
        document.getElementById("temp").innerHTML = "room"
        document.getElementById("hum").innerHTML =   "normal"
    });
    

}

setInterval(() => {
    collectData()
}, 10000);



