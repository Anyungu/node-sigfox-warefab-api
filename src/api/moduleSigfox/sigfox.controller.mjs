
import {cacheData,
    getCacheData
} from '../../services/cache.service.mjs';
import {decodeData} from '../../services/warefabPareser.mjs';


export async function postMetric(req, res) {

    try {

        //decode payload
        const decoded = await decodeData(req.body.data, req.body.device);

     
        //store
        const cacheResponse = await cacheData(decoded.value);

     
        if (cacheResponse && cacheResponse.error) {

            return res.status(200).send({error: cacheResponse.error});

        }


        return res.send({ message: "Value recorded"});

    } catch(err) {

        return res.status(500).send({error: err.message});
    }
}


export async function getMetric(req, res) {

    try {
    
        //fetch data in the cache
        const cacheResponse = await getCacheData();


        if (cacheResponse && cacheResponse.error) {

            return res.status(200).send({error: cacheResponse.error});

        }

        return res.send({ message: "Values Found!", data: cacheResponse});
    }
    catch(err) {
        return res.status(500).send({error: err.message});
    }

}
