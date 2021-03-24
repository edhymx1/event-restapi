const db = require('../configuracion/config');

async function listarInvitados(req, res, next) {
    try {
        const data = await db.any('SELECT * FROM guest');
        res.json({ status: 'ok', data, message: 'Consulta de invitados exitosa' });
    } catch (error) {
        next(error);
    }
}

module.exports = { listarInvitados };
