import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var moment = require('moment-timezone');

export async function decodeData(payload) {

    try {

      


        let lat_1, lng_1, latitude, longitute, temperature, humidity;

        lat_1 = parseInt(payload.data.slice(0, 6), 16);
        latitude = (-1 * lat_1) / 10000; // LAT = (LAT/100000)-90
        lng_1 = parseInt(payload.data.slice(7, 14), 16);
        longitute = lng_1 / 10000; // LON = (LON/100000)-180
        temperature = parseInt(payload.data.slice(18, 20), 16);
        humidity = parseInt(payload.data.slice(20, 22), 16);

        let payloaddecoded = {
            latitude: latitude,
            longitude: longitute,
            temperature: temperature,
            humidity: humidity,
            payload: payload,
            time: moment().tz("Africa/Nairobi").format(),
            device: payload.device
        };

        return { value: payloaddecoded};

    }catch(err) {
        return { error: err.message };
    }

}