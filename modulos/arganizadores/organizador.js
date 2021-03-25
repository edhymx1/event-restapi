const db = require('../configuracion/config');

async function listarOrganizadores(req, res, next) {
    try {
        const data = await db.any('SELECT * FROM organizer');
        res.json({ status: 'ok', data, message: 'Consulta de organizadores exitosa' });
    } catch (error) {
        next(error);
    }
}

module.exports = { listarOrganizadores };
