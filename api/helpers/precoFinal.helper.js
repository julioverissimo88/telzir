/** Retorna o valor da tarifa */
const verificaExcedente = (duracao, plano) => {
    return duracao > plano ? 1.10 : 1;
}

/** Calculo final do valor a ser pago */
module.exports = (duracao, plano, tarifa) => {
    let tarifaExcedente = verificaExcedente(duracao, plano)
    let valorComPlano = ((duracao - plano) * tarifa) * tarifaExcedente;
    let valorSemPlano = tarifa * duracao;
    
    //Devolve zero caso valor do plano seja negativo
    valorComPlano = valorComPlano < 0 ? 0 : valorComPlano;

    return { totalComPlano: valorComPlano, totalSemPlano: valorSemPlano }
}