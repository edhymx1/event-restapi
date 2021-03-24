var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

const guest = require('../modulos/invitados/guest');
const user = require('../modulos/usuarios/usuarios');

router.get('/v1/guest/', guest.listarInvitados);
router.get('/v1/user/', user.listarUsuarios);

module.exports = router;
