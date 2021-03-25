var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

const guest = require('../modulos/invitados/guest');
const user = require('../modulos/usuarios/usuarios');
const statusAssistance = require('../modulos/status-asistencia/status-asistencia');
const organizer = require('../modulos/arganizadores/organizador');

// rutas para invitados
router.get('/v1/guest/', guest.listarInvitados);
router.post('/v1/guest/', guest.registrarInvitado);
router.delete('/v1/guest/:guest_id', guest.eliminarInvitado);

// rutas para usuarios
router.get('/v1/user/', user.listarUsuarios);

// rutas para asistencias
router.get('/v1/status-assistance/', statusAssistance.listarStatusAssistance);

//rutas para organizadores
router.get('/v1/organizer/', organizer.listarOrganizadores);

module.exports = router;
