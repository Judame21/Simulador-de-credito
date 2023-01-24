const sliders = document.querySelectorAll("input[type='range']");
const textoDinero = document.getElementById("textoDinero")
const textoMonto = document.getElementById("texto-monto")
const textoTotal = document.getElementById("texto-total")
const textoDias = document.getElementById("textoDias")
const textoIntereses = document.getElementById("texto-interes")
const textoIva = document.getElementById("texto-IVA")


const ivaVariable = 0.19
const interesVariable = 22
const administrativo = 60000

let dinero
let dias
let total
let interes
let iva

sliders.forEach(function(slider){
    slider.addEventListener("input",refresh);
});




function refresh(){
    dinero = document.getElementById("dinero").value
    dias = document.getElementById("dias").value
    interes = parseInt(dias) * 1000;
    iva = parseInt(dinero) * ivaVariable


    total = parseInt(dinero) + administrativo + interes + iva



    
    
    
    textoDinero.textContent = "$" + document.getElementById("dinero").value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    textoMonto.textContent = "$" + document.getElementById("dinero").value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    textoTotal.textContent = "$" + total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    textoDias.textContent = dias + " dias"
    textoIntereses.textContent = "$" + interes
    textoIva.textContent = "$" + iva


}



