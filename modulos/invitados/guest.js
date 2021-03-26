const db = require('../configuracion/config');

async function listarInvitados(req, res, next) {
    try {
        const result = await db.any('SELECT * FROM guest');
        res.json({ status: 'ok', result, message: 'Consulta de invitados exitosa' });
    } catch (error) {
        res.json({ status: 'error', result: null, message: error });
    }
}

async function registrarInvitado(req, res, next) {
    const query =
        'INSERT INTO guest (name, last_name, created_by, updated_by) VALUES ($(name), $(last_name), $(user_id), $(user_id))';
    try {
        await db.any(query, req.body);
        res.json({ status: 'ok', result: null, message: 'Invitado registrado con exito' });
    } catch (error) {
        res.json({ status: 'error', result: null, message: error });
    }
}

async function eliminarInvitado(req, res, next) {
    try {
        var guest_id = parseInt(req.params.guest_id);
        const query = 'DELETE FROM guest WHERE guest_id = $1';
        await db.any(query, guest_id);
        res.json({
            status: 'ok',
            result: null,
            message: 'Invitado eliminado con exito',
        });
    } catch (error) {
        res.json({ status: 'error', result: null, message: error });
    }
}

async function editarInvitado(req, res, next) {
    try {
        const { name, last_name, user_id } = req.body;
        const { rowCount } = await db.result('UPDATE guest SET name = $1, last_name = $2 WHERE guest_id = $3', [
            name,
            last_name,
            user_id,
        ]);
        res.json({
            status: 'ok',
            message: rowCount > 0 ? 'Invitado actualizado con exito' : 'El organizador no existe',
            result: null,
        });
    } catch (error) {
        res.json({ status: 'error', result: null, message: error });
    }
}

module.exports = {
    listarInvitados,
    registrarInvitado,
    eliminarInvitado,
    editarInvitado,
};
