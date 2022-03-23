var quant = 0;
var mais = document.getElementById('btnmais');
var quants = document.getElementById('quants');
var btnmenos = document.getElementById('btnmenos');
var butom = document.getElementById('butom');
var vazio = document.getElementById('vazio');
var prod = document.getElementById('prod');
var delet = document.getElementById('delet');
var total = document.getElementById('total');
var parcela = document.getElementById('parcela');
var totcart = document.getElementById('totcart');

// quantidade do produto inicia em 0
quants.innerHTML = quant

// adcionadores de quantidades
btnmenos.addEventListener('click',function () {
    quant = quant - 1;
    quants.innerHTML = quant
   
})
mais.addEventListener('click',function () {
    quant = quant + 1;
    quants.innerHTML = quant
})

//botao add no carrinho
butom.addEventListener('click',function () {
    if (quant <= 0) {
        alert('Insira uma quantidade maior que zero')
        return
    }
    vazio.style.display = 'none'
    prod.style.display = 'flex'
    total.innerHTML = "$" + quant.toFixed(2) * 125.00
    parcela.innerHTML = "x" + quant
    totcart.innerHTML = quant
    totcart.style.display = 'block'
})

//exclui o carrinho
delet.addEventListener('click',function () {
    vazio.style.display = 'flex'
    prod.style.display = 'none'
    totcart.innerHTML = ""
    totcart.style.display = 'none'
})