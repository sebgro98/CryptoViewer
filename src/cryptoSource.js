import axios from "axios";

function searchCryptos() {
    return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(treatHTTPResponseACB)
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