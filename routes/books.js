const router = require('express').Router();
const Controller = require('../controllers/bookController.js');
const { authorize } = require('../middlewares/authorize.js');
const auth = require('../middlewares/authen.js');

router.get('/', Controller.findAll);
router.use(auth);
router.use(authorize);
router.post('/', Controller.create);
router.delete('/:id', Controller.delete);
router.put('/:id', Controller.update);

module.exports = router;