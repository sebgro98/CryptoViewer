import axios from "axios";
import {ref, watchEffect} from "vue";

const cryptos = ref([])
const clone = ref([])
const cryptoChart = ref([])
//api call data
const getCrypto = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        clone.value = response.data
    } catch (error) {
        console.log(error);
    }
}

getCrypto()
//fetch timer do not overextend our limit
setInterval(() => {
    getCrypto()
}, 20000);

watchEffect(() => {
    const dup = cryptos.value.slice(0,100);
    clone.value = dup;
})

const getCryptoChart = async (endpoint) => {
    try {
        const params1 = 'https://api.coingecko.com/api/v3/coins/'
        const params2 = '/market_chart?vs_currency=usd&days=365'
        const response = await axios.get(params1 + endpoint + params2)

        if (response.data) {
            const coinChartData = response.data.prices.map(value => ({time: value[0]/1000, price: parseFloat(value[1].toFixed(2))}));
            cryptoChart.value = coinChartData
        }
    } catch(error){
        console.log(error);
    }

}

function getCryptoDetails(endpoint) {
    const params1 = "https://api.coingecko.com/api/v3/coins/"
    const params2 = "?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true"
    return axios.get(params1 + endpoint + params2).then(treatHTTPResponseACB)
}

function treatHTTPResponseACB(response) {
    if (response.status !== 200) {
        throw new Error("API Response Time: " + response.status);
    }
    else {
        return response.data;
    }
}

export {clone, getCryptoDetails, cryptos, getCryptoChart,cryptoChart}