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

    // Obtém os valores nas colunas K, N, Q, S e U na mesma linha
    var valorK = P1;
    var valorN = P2;
    var valorQ = P3;
    var valorS = Add;
    var valorU = Total;

    // Converte células vazias para zero
    valorK = valorK === "" ? 0 : valorK;
    valorN = valorN === "" ? 0 : valorN;
    valorQ = valorQ === "" ? 0 : valorQ;
    valorS = valorS === "" ? 0 : valorS;
    valorU = valorU === "" ? 0 : valorU;

    // Calcula a soma dos valores nas colunas K, N, Q, S
    var soma = valorK + valorN + valorQ;

    // Calcula a diferença entre a soma e o valor em U
    var diferenca = (valorU + valorS) - soma;

    // Insere o resultado na coluna T na mesma linha
    return diferenca;
}