let prodNovo = document.querySelector('input#txtprod');
let tabela = document.querySelector("table#tabela");

function adicionar() {
    console.log(prodNovo.value);
    let trItem = document.createElement('tr');
    trItem.innerHTML = `<td>2</td><td>Refrigerante</td><td>${prodNovo.value}</td><td></td><td>R$9,00</td><td>300</td>`
    tabela.appendChild(trItem);
}