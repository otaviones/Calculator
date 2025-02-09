let display = document.getElementById("display");
const qtdNum = display.value.length;

// Funcão de Apagar um único dígito ultimo:
    function backSpace() {
        display.value = display.value.slice(0, -1);
    }

window.onload = function initialValue() {
    display.value = "0";
};


// Para mostrar os valores digitados na texarea
function appendToDisplay(input) {

    if (display.value === "0") {
        display.value = input;
    } else {
        display.value += input;
    }
}

// A função para limpar o display por completo utiliza a troca do valor do display por um caractere em branco.
function clearDisplay(input) {
    display.value = " ";
}

// Função UTILIZA EVAL para calcular como se fosse codigo js, utilizar somete para aprender
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Erro";
    }
}  

function percent() {
    if (display.value != "0") {
        let percent1 = display.value
    }
    display.value = (parseFloat(display.value) / 100).toString();
}


