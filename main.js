function mostrarPantalla (campo) {
    document.getElementById('pantalla').value += campo;
}

function borrar (){
    document.getElementById('pantalla').value = ' '
}

function calcular (){
    const calculo = document.getElementById('pantalla').value
    const resultado = eval(calculo);
    document.getElementById('pantalla').value = resultado
}