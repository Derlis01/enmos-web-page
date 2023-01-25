// Nombres de maquinas
const nameMachine1 = document.getElementById('machineName1')
const nameMachine2 = document.getElementById('machineName2')
const nameMachine3 = document.getElementById('machineName3')
const nameMachine4 = document.getElementById('machineName4')
const nameMachine5 = document.getElementById('machineName5')
const nameMachine6 = document.getElementById('machineName6')
const nameMachine7 = document.getElementById('machineName7')
const nameMachine8 = document.getElementById('machineName8')
const nameMachine9 = document.getElementById('machineName9')
const nameMachine10 = document.getElementById('machineName10')
const nameMachine11 = document.getElementById('machineName11')
const nameMachine12 = document.getElementById('machineName12')

// Precio de maquinas
const priceMachine1 = document.getElementById('precio1')
const priceMachine2 = document.getElementById('precio2')
const priceMachine3 = document.getElementById('precio3')
const priceMachine4 = document.getElementById('precio4')
const priceMachine5 = document.getElementById('precio5')
const priceMachine6 = document.getElementById('precio6')
const priceMachine7 = document.getElementById('precio7')
const priceMachine8 = document.getElementById('precio8')
const priceMachine9 = document.getElementById('precio9')
const priceMachine10 = document.getElementById('precio10')
const priceMachine11 = document.getElementById('precio11')
const priceMachine12 = document.getElementById('precio12')


let preciosActualizados;
const url = 'https://docs.google.com/spreadsheets/d/1a4GBDzNEMoVtn86ikEOH_qx9uxkp6yKkCcE3Y-YXRrg/gviz/tq?tqx=out%3Ajson&gid=0'

fetch(url)
.then((response) => response.text())
.then((data) =>
{
    let json_string = data.substring(47).slice(0, -2);
    let finalJson = JSON.parse(json_string)
    preciosActualizados = finalJson
    setPrices()
});


function setPrices() {
    // set names
    nameMachine1.innerHTML = preciosActualizados.table.cols[0].label
    nameMachine2.innerHTML = preciosActualizados.table.cols[1].label
    nameMachine3.innerHTML = preciosActualizados.table.cols[2].label
    nameMachine4.innerHTML = preciosActualizados.table.cols[3].label
    nameMachine5.innerHTML = preciosActualizados.table.cols[4].label
    nameMachine6.innerHTML = preciosActualizados.table.cols[5].label
    nameMachine7.innerHTML = preciosActualizados.table.cols[6].label
    nameMachine8.innerHTML = preciosActualizados.table.cols[7].label
    nameMachine9.innerHTML = preciosActualizados.table.cols[8].label
    nameMachine10.innerHTML = preciosActualizados.table.cols[9].label
    nameMachine11.innerHTML = preciosActualizados.table.cols[10].label
    nameMachine12.innerHTML = preciosActualizados.table.cols[11].label

    // set prices
    priceMachine1.innerHTML = `${preciosActualizados.table.rows[0].c[0].v}$`
    priceMachine2.innerHTML = `${preciosActualizados.table.rows[0].c[1].v}$`
    priceMachine3.innerHTML = `${preciosActualizados.table.rows[0].c[2].v}$`
    priceMachine4.innerHTML = `${preciosActualizados.table.rows[0].c[3].v}$`
    priceMachine5.innerHTML = `${preciosActualizados.table.rows[0].c[4].v}$`
    priceMachine6.innerHTML = `${preciosActualizados.table.rows[0].c[5].v}$`
    priceMachine7.innerHTML = `${preciosActualizados.table.rows[0].c[6].v}$`
    priceMachine8.innerHTML = `${preciosActualizados.table.rows[0].c[7].v}$`
    priceMachine9.innerHTML = `${preciosActualizados.table.rows[0].c[8].v}$`
    priceMachine10.innerHTML = `${preciosActualizados.table.rows[0].c[9].v}$`
    priceMachine11.innerHTML = `${preciosActualizados.table.rows[0].c[10].v}$`
    priceMachine12.innerHTML = `${preciosActualizados.table.rows[0].c[11].v}$`

    console.log(preciosActualizados.table.rows[0].c[0].v)


    console.log(preciosActualizados)
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



window.addEventListener('load',alerta);