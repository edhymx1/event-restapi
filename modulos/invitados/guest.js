const db = require('../configuracion/config');

async function listarInvitados(req, res, next) {
    try {
        const data = await db.any('SELECT * FROM guest');
        res.json({ status: 'ok', data, message: 'Consulta de invitados exitosa' });
    } catch (error) {
        next(error);
    }
}

async function registrarInvitado(req, res, next) {
    const query =
        'INSERT INTO guest (name, last_name, created_by, updated_by) VALUES ($(name), $(last_name), $(user_id), $(user_id))';
    try {
        const data = await db.any(query, req.body);
        res.json({ status: 'ok', data, message: 'Invitado registrado con exito' });
    } catch (error) {
        res.json({ status: 'error', data: null, message: error });
    }
}

async function eliminarInvitado(req, res, next) {
    try {
        var guest_id = parseInt(req.params.guest_id);
        const query = 'DELETE FROM guest WHERE guest_id = $1';
        const data = await db.any(query, guest_id);
        res.json({ status: 'ok', data, message: 'Invitado eliminado con exito' });
    } catch (error) {
        res.json({ status: 'error', data: null, message: error });
    }
}

module.exports = { listarInvitados, registrarInvitado, eliminarInvitado };
