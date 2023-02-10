// Apontamento da função alvo do teste
const calculos = require('../../calculos')

// Teste unitário
test('Somar 5 + 7', () => {
  // Configura
    // Dados de Entrada
    const numA = 5;
    const numB = 7;

  // Dados de Saída
    const resultadoEsperado = 12;

  // Executa / Valida
    // Criando um elemento para realizar a execução do teste
    const somarDoisNumeros = calculos.somarDoisNumeros
    expect(somarDoisNumeros(numA, numB)).toBe(resultadoEsperado)
})