import home from './views/HomeView.vue'
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

export default {p}