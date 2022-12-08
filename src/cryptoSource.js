
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