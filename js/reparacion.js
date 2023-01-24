let maquinas = [
    {nombre: 'ava-1126',hashboard: 120,controladora: 110,fuente: 100},{nombre: 'ava-1166',hashboard: 120,controladora: 110,fuente: 100},
    {
        nombre: 'wha-m30s',
        hashboard: 105,
        controladora: 95,
        fuente: 85
    },
    {
        nombre: 's19',
        hashboard: 200,
        controladora: 160,
        fuente: 150
    },
    {
        nombre: 'ava-1066',
        hashboard: 100,
        controladora: 90,
        fuente: 80
    },
    {
        nombre: 'inno-t2t',
        hashboard: 80,
        controladora: 75,
        fuente: 60
    },
    {
        nombre: 's9',
        hashboard: 55,
        controladora: 50,
        fuente: 45
    },
    {
        nombre: 'wha-m21s',
        hashboard: 100,
        controladora: 90,
        fuente: 80
    },
    {
        nombre: 'wha-m20s',
        hashboard: 105,
        controladora: 95,
        fuente: 85
    },
    {
        nombre: 't15',
        hashboard: 75,
        controladora: 70,
        fuente: 65
    },
    {
        nombre: 'inno-t3',
        hashboard: 100,
        controladora: 90,
        fuente: 80
    },
    {nombre: 'ava-1246',hashboard: 120,controladora: 110,fuente: 100},{nombre: 'wha-m30s',hashboard: 120,controladora: 110,fuente: 100},{nombre: 't17',hashboard: 110,controladora: 100,fuente: 90},{nombre: 's17',hashboard: 100,controladora: 80,fuente: 80}]

const divRepuesto = document.getElementById('repuesto');
const divResultado = document.getElementById('resultado');
const divContacto = document.getElementById('contacto');

const selectModel = document.getElementById('selectModel');
const selectRepuesto = document.getElementById('selectRepuesto');

const spanRepuesto = document.getElementById('repuestoSelected');
const spanModel = document.getElementById('modelSelected');
const spanPrecio = document.getElementById('precio');

let model 
let repuesto
let precio

divRepuesto.style.display = 'none'
divResultado.style.display = 'none'
divContacto.style.display = 'none'

selectModel.addEventListener('change', () => {
    divRepuesto.style.display = 'block'

    model = selectModel.value
})

selectRepuesto.addEventListener('change', () => {
    divResultado.style.display = 'flex'
    divContacto.style.display = 'flex'
    
    repuesto = selectRepuesto.value

    for (let i = 0; i < maquinas.length; i++) {
        const maquina = maquinas[i];

        if (model == maquina.nombre) {
            if (repuesto == 'fuente') {
                precio = maquina.fuente
            }else if (repuesto == 'hashboard') {
                precio = maquina.hashboard
            }else if (repuesto == 'controladora') {
                precio = maquina.controladora
            }
        }
    }

    armarMensaje()
})

function armarMensaje() {
    spanRepuesto.innerHTML = repuesto
    spanModel.innerHTML = model
    spanPrecio.innerHTML = precio
}

function alerta() {
    swal("", "¡Los testeos son gratis!", "success");

}

window.addEventListener('load',alerta);









