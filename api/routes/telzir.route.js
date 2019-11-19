const telzirController = require('../controllers/telzir.controller');
const { validaDataPlan, calcula, planos, localidades } = telzirController;

/** Exporta rota padrão para Calculo de planos */
module.exports = function (app) {
    app.post('/calcula/', validaDataPlan, calcula);
    app.get('/planos/', planos);
    app.get('/localidades/', localidades);
}