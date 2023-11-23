const router = require('express').Router();
const Controller = require('../controllers/userBookController.js');
const auth = require('../middlewares/authen.js');
const { authorize, authorizeDeleteBook, authorizeCreateBook } = require('../middlewares/authorize.js');

router.use(auth);
router.get('/', authorize, Controller.findAll);
router.post('/', authorizeCreateBook, Controller.create);
router.delete('/:id', authorizeDeleteBook, Controller.delete);

module.exports = router;