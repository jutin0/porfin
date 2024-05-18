let totalSum = 0;  // Variável para armazenar a soma total dos resultados

function calculate() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const discount1 = parseFloat(document.getElementById('discount1').value);
    const discount2 = parseFloat(document.getElementById('discount2').value);

    if (isNaN(inputValue) || isNaN(discount1) || isNaN(discount2)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const result = inputValue - discount1 - discount2;
    document.getElementById('result').innerText = `Resultado: ${result.toFixed(2)}`;

    addHistory(inputValue, discount1, discount2, result);
    updateTotalSum(result);
}

function addHistory(originalValue, discount1, discount2, finalResult) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.innerText = `Valor original: ${originalValue}, Descuentos: ${discount1}, ${discount2}, Resultado: ${finalResult.toFixed(2)}`;
    historyList.appendChild(listItem);
}

function updateTotalSum(newResult) {
    totalSum += newResult;
    document.getElementById('totalSum').innerText = totalSum.toFixed(2);
}
