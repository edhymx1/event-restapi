const db = require('../configuracion/config');

async function listarUsuarios(req, res, next) {
    try {
        const data = await db.any('SELECT * FROM user_uc');
        res.json({ status: 'ok', data, message: 'Consulta de usuarios exitosa' });
    } catch (error) {
        next(error);
    }
}

module.exports = { listarUsuarios };
