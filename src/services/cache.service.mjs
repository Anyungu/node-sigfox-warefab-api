

export async function cacheData(value) {


    try {

        var x = globalThis.nodeCacheInstance;

        let success =  x.set( "dataV", value, 604800);

        if (success !== true) {
            return { error: "Failed to save to Cache" };
        }

        return {value: true}

    }catch(err) {
        return { error: err.message };
    }

}


export async function getCacheData() {

    try {

        var x = globalThis.nodeCacheInstance;

        let res = x.get("dataV");

        if (res === undefined) {
            return { error: "Data Not Found"};
        }

        return {value: res};
        
    } catch (error) {

        return { error: error.message };
    }
  
}