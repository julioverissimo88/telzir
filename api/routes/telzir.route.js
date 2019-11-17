const telzirController = require('../controllers/telzir.controller');
const { validaDataPlan, calcula } = telzirController;

/** Exporta rota padrão para Calculo de planos */
module.exports = function (app) {
    app.post('/calcula/', validaDataPlan, calcula);
}