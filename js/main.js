const btcPriceSpan = document.getElementById('btcPrice');
const ethPriceSpan = document.getElementById('ethPrice');
 

let btcPrice
let ethPrice

function alertaPrest() {
    Swal.fire({
        title: 'Requisitos',
        text: '• Mínimo una semana de préstamo.• Si el precio fluctúa a menos del valor recibido tenes 72hs para pagar la diferencia sino tu btc será vendido. • El porcentaje de interés sería 1% semanal.'
    })
}


fetch(`https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT`)
    .then(response => response.json())
    .then(response => {
        coinBtc = response
        btcPrice = coinBtc.price
        SetCoinPrices()
    })
    .catch(err => console.error(err));

fetch(`https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT`)
        .then(response => response.json())
        .then(response => {
            coinEth = response
            ethPrice = coinEth.price
            SetCoinPrices()
        })
    .catch(err => console.error(err));


function agregarSeparadorMiles(numero) {
    let partesNumero = numero.toString().split('.');

    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return partesNumero.join('.');
}


function SetCoinPrices() {
    btcPrice = Math.trunc(btcPrice)
    ethPrice = Math.trunc(ethPrice)

    btcPriceSpan.innerHTML = agregarSeparadorMiles(btcPrice)
    ethPriceSpan.innerHTML = agregarSeparadorMiles(ethPrice)
}

