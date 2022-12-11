import axios from "axios";

function searchCryptos(endpoint) {
    return axios.get('https://api.coingecko.com/api/v3/search?query='+endpoint).then(treatHTTPResponseACB)
}

function treatHTTPResponseACB(response) {
    if (response.status !== 200) {
        throw new Error("API Response Time: " + response.status);
    }
    else {
        return response.data;
    }
}

export {searchCryptos}