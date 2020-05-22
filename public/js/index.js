


function collectData () {

    fetch('/api/messageSigfox').then(function (response) {

        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {

        // This is the JSON from our response
        document.getElementById("payload").innerHTML = data.data.value === undefined ? "Payload Not Available!" : data.data.value.payload;
        document.getElementById("stamp").innerHTML = data.data.value === undefined ? "00:00 00:00" : data.data.value.time ;
        document.getElementById("lat").innerHTML = data.data.value === undefined ? "x": data.data.value.latitude;
        document.getElementById("lng").innerHTML = data.data.value === undefined ? "y": data.data.value.longitude;
        document.getElementById("temp").innerHTML = data.data.value === undefined ? "room": data.data.value.temperature;
        document.getElementById("hum").innerHTML =  data.data.value === undefined ? "normal" : data.data.value.humidity;
        document.getElementById("dev").innerHTML =  data.data.value === undefined ? "xxxxxx" : data.data.value.device;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);

        document.getElementById("payload").innerHTML = "Payload Not Available" 
        document.getElementById("stamp").innerHTML =  "00:00 00:00" 
        document.getElementById("lat").innerHTML =  "x"
        document.getElementById("lng").innerHTML =  "y"
        document.getElementById("temp").innerHTML = "room"
        document.getElementById("hum").innerHTML =   "normal"
        document.getElementById("dev").innerHTML =   "xxxxxx"
    });
    

}

setInterval(() => {
    collectData()
}, 10000);



