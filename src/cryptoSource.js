import axios from "axios";
import {ref, watchEffect} from "vue";

const cryptos = ref([])
const clone = ref([])
//api call data
const getCrypto = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        cryptos.value = response.data
    } catch (error) {
        console.log(error);
    }
}
getCrypto()
//fetch timer do not overextend our limit
setInterval(() => {
    getCrypto();
}, 20000);

watchEffect(() => {
    const dup = cryptos.value.slice(0,100);
    clone.value = dup;
})

function searchCryptos(endpoint) {
    return axios.get('https://api.coingecko.com/api/v3/search?query='+endpoint).then(treatHTTPResponseACB)
}

function treatHTTPResponseACB(response) {
    if (response.status !== 200) {
        throw new Error("API Response Time: " + response.status);
    }
    else {
        return response.json();
    }
}


const BASE_URL = "https://api.coingecko.com/api/v3/coins/";

function myAPICall(){
    return axios.get("https://api.coingecko.com/api/v3/coins/" + "bitcoin").then(treatHTTPResponseACB);
}




export {searchCryptos,clone, myAPICall}