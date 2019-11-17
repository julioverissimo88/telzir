/** Helper para retornar os valores da tarifa de acordo com origem e destino */
module.exports = (origem, destino) => {
    if (origem == 11 && destino == 16) {
        return 1.90;
    }
    else if (origem == 16 && destino == 11) {
        return 2.90;
    }
    else if (origem == 11 && destino == 17) {
        return 1.70;
    }
    else if (origem == 17 && destino == 11) {
        return 2.70;
    }
    else if (origem == 11 && destino == 18) {
        return 0.90;
    }
    else if (origem == 18 && destino == 11) {
        return 1.90;
    }
}