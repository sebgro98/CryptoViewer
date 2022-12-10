import axios from "axios";
import {ref, watchEffect} from "vue";


let cryptos = ref([])
let clone = ref([])
//api call
const getCrypto = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        cryptos.value = response.data
    } catch (error) {
        //console.log(error);
    }
};
//fetch timer do not overextend our limit
setInterval(() => {
    getCrypto();
}, 8000);

watchEffect(() => {
    const dup = cryptos.value.slice(0,100);
    clone.value = dup;
})


export {clone}