/** Importa helper que obtem o valor da tarifa padrão por origem e destino */
const getTarifas = require('../helpers/tarifas.helper');
const getPrecoFinal = require('../helpers/precoFinal.helper');

/** Middleware de validação de envio de parametros para busca*/
exports.validaDataPlan = (req, res, next) => {
    try {
        if (!req.body.origem) {
            return res.status(400).send({ message: 'Parametro origem obrigatório não fornecido' });
        }
        else if (!req.body.destino) {
            return res.status(400).send({ message: 'Parametro destino obrigatório não fornecido' });
        }
        else if (!req.body.duracao) {
            return res.status(400).send({ message: 'Parametro duração obrigatório não fornecido' });
        }

        return next();
    } catch (error) {
        return res.status(400).send({ message: 'Ocorreu um erro na requisição.' });
    }
}



/** Calcula valores para os planos */
exports.calcula = async (req, res) => {
    try {
        const { origem, destino, duracao, plano } = req.body;
        let tarifa = getTarifas(origem, destino);
        let precoFinal = getPrecoFinal(duracao, plano, tarifa);

        return res.json(precoFinal);
    }
    catch (error) {
        return res.status(400).send({ message: 'Erro ao buscar valor de plano' });
    }
}

/** Retorna Planos */
exports.planos = async (req, res) => {
    try {
        let arrayPlanos = [{ plano: 30, nome:'Fale Mais 30' }, { plano: 60, nome:'Fale Mais 60' }, { plano: 120, nome:'Fale Mais 120' }];

        return res.json(arrayPlanos);
    }
    catch (error) {
        return res.status(400).send({ message: 'Erro ao buscar valor de plano' });
    }
}

/** Retorna Localidades */
exports.localidades = async (req, res) => {
    try {
        let arrayLocalidades = [{ local: 11 }, { local: 16 }, { local: 17 },  { local: 18 }];

        return res.json(arrayLocalidades);
    }
    catch (error) {
        return res.status(400).send({ message: 'Erro ao buscar valor de plano' });
    }
}



