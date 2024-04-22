function Calcular() {

    const operacao = document.getElementById('operacao').value;
    const numero1 = parseFloat(document.getElementById('numeroInput').value);
    const numero2 = parseFloat(document.getElementById('numero2Input').value);
    
    let resultado;
    switch(operacao) {

        case '+':
            resultado = numero1 + numero2;
            break;
         case '-':
            resultado = numero1 - numero2;
            break;
        case 'x':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 == 0) {
                alert('Este numero não pode dividir')
                return;
            }
            resultado = numero1 / numero2;
            break;

    }

    document.getElementById('resultado').textContent = resultado;

}