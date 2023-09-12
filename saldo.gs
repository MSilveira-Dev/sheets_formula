/**
 * Função que retorna o saldo a gozar.
 *
 * @param {Período 1} P1 - O primeiro período.
 * @param {Período 2} P2 - O segundo período.
 * @param {Período 3} P3 - O terceiro período.
 * @param {Adicional} Add - Valores adicionas positivos ou negativos.
 * @param {Total} Total - Total de dias (30).
 * @return {number} Saldo a gozar.
 *
 * @customfunction
 */

function SALDO(P1,P2,P3,Add,Total){

    var valorP1 = P1;
    var valorP2 = P2;
    var valorP3 = P3;
    var valorAdd = Add;
    var valorTotal = Total;

    valorP1 = valorP1 === "" ? 0 : valorP1;
    valorP2 = valorP2 === "" ? 0 : valorP2;
    valorP3 = valorP3 === "" ? 0 : valorP3;
    valorAdd = valorAdd === "" ? 0 : valorAdd;
    valorTotal = valorTotal === "" ? 0 : valorTotal;

    var soma = valorP1 + valorP2 + valorP3;

    var diferenca = (valorTotal + valorAdd) - soma;

    return diferenca;
}
