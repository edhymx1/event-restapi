const db = require('../configuracion/config');

async function listarStatusAssistance(req, res, next) {
    try {
        const data = await db.any('SELECT * FROM status_assistance');
        res.json({ status: 'ok', data, message: 'Consulta de status_assistance exitosa' });
    } catch (error) {
        next(error);
    }
}

module.exports = { listarStatusAssistance };
