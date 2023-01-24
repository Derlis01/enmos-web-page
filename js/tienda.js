const ths1 = document.getElementById('ths1')
const ths2 = document.getElementById('ths2')
const ths4 = document.getElementById('ths4')
const ths5 = document.getElementById('ths5')
const precio1 = document.getElementById('precio1')
const precio2 = document.getElementById('precio2')
const precio3 = document.getElementById('precio3')
const precio4 = document.getElementById('precio4')
const precio5 = document.getElementById('precio5')


let preciosActualizados;
const url = 'https://docs.google.com/spreadsheets/d/1a4GBDzNEMoVtn86ikEOH_qx9uxkp6yKkCcE3Y-YXRrg/gviz/tq?tqx=out%3Ajson&gid=0'

fetch(url)
.then((response) => response.text())
.then((data) =>
{
    let json_string = data.substring(47).slice(0, -2);
    let finalJson = JSON.parse(json_string)
    preciosActualizados = finalJson
    setPricesInitial()
});


function setPrices() {
    console.log(preciosActualizados.table.rows[0].c[0].f)
}


function setPricesInitial() {
    precio1.innerHTML = `${preciosActualizados.table.rows[0].c[0].f}$`
}




// function alerta() {
//     swal("Garantia en Paraguay", "Sin necesidad de enviar tu equipo a China", "success");

// }

// function alertaPrest() {
//     swal("Requisitos:", "•Mínimo una semana de préstamo, Si el precio fluctúa a menos del valor recibido tenes 72hs para pagar la diferencia sino tu btc será vendido.");

// }

ths1.addEventListener('change', () => {
    let valorOpcion = ths1.value;
    
    if (valorOpcion == 's19-96') {
        precio1.innerHTML = '2.400$'
    }else {
        precio1.innerHTML = '2.300$'
    }
})

ths2.addEventListener('change', () => {
    let valorOpcion = ths2.value;
    
    if (valorOpcion == 's19pro-100') {
        precio2.innerHTML = '2.650$'
    }else {
        precio2.innerHTML = '3.250$'
    }
})

ths3.addEventListener('change', () => {
    let valorOpcion = ths3.value;
    
    if (valorOpcion == 's19-134') {
        precio3.innerHTML = '5.650$'
    }else {
        precio3.innerHTML = '6.300$'
    }
})

ths4.addEventListener('change', () => {
    let valorOpcion = ths4.value;
    
    if (valorOpcion == '90') {
        precio4.innerHTML = '2.100$'
    }else {
        precio4.innerHTML = '2.300$'
    }
})



window.addEventListener('load',alerta);