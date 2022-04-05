const { Router } = require('express');

const router = Router();

const initialApp = require('../controllers/initial.controller');

router.get('/', initialApp);

module.exports = router;
