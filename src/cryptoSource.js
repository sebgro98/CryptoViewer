/*import home from './views/HomeView.vue'
let p = '';
function api(){
    let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
    let stockPrice = home.getElementById('testData');
    ws.onmessage = (event) =>{
        let stockObject = JSON.parse(event.data);
        p = stockObject;
        stockPrice.innerText = stockObject.p;
        console.log(stockObject.p);
        return stockObject.p;
    }
    return 'not working';
}

export default {api}*/

let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let stockPriceElement = document.getElementById('stock-price');
ws.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data);
    stockPriceElement.innerText = stockObject.p;
    console.log(stockPriceElement);
    console.log(stockObject.p);
};

export default {
    name: "CryptoSource"
}