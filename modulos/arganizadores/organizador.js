const db = require('../configuracion/config');

async function listarOrganizadores(req, res, next) {
    try {
        const result = await db.any('SELECT * FROM organizer');
        res.json({ status: 'ok', result, message: 'Consulta de organizadores exitosa' });
    } catch (error) {
        next(error);
    }
}

async function registrarOrganizador(req, res, next) {
    try {
        const { name, created_by, updated_by } = req.body;
        await db.any('INSERT INTO organizer(name, created_by, updated_by) VALUES($1, $2, $3)', [
            name,
            created_by,
            updated_by,
        ]);
        res.json({ status: 'ok', result: null, message: 'Organizador registrado con exito' });
    } catch (error) {
        res.json({ status: 'error', result: null, message: error });
    }
}

async function eliminarOrganizador(req, res, next) {
    try {
        const { organizer_id } = req.params;
        await db.any('DELETE FROM organizer WHERE organizer_id = $1', [organizer_id]);
        res.json({
            status: 'ok',
            result: null,
            message: 'Organizador eliminado con exito',
        });
    } catch (error) {
        res.json({ status: 'error', result: null, message: error });
    }
}

async function editarOrganizador(req, res, next) {
    try {
        const { name, organizer_id } = req.body;
        await db.none('UPDATE organizer SET name = $1 WHERE organizer_id = $2', [name, organizer_id]);
        res.json({
            status: 'ok',
            message: 'Organizador actualizado con exito',
            result: null,
        });
    } catch (error) {
        res.json({ status: 'error', result: null, message: error });
    }
}

module.exports = { listarOrganizadores, registrarOrganizador, eliminarOrganizador, editarOrganizador };
