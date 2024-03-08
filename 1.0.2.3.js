function calculadoraLoja(
     valor, 
     convenio, 
     cartao, 
     limite = 100 
     )
     {
    function limiteDesconto(desconto) {
    if(desconto > limite){
        return limite;
    }
    return desconto;
    }   
if(cartao && cartao) {
    let desconto = valor * 0.15;
    return valor - limiteDesconto(desconto);
}
if(convenio || cartao) {
    
    let desconto = valor * 0.10;
    return valor - limiteDesconto(desconto);
}
return valor;
}
console.log(calculadoraLoja(1000, true, true));