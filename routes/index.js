const express = require('express');
const router = express.Router();
const userRouter = require('./users.js');
const bookRouter = require('./books.js');
const userBookRouter = require('./userbooks.js');

router.use('/users', userRouter);
router.use('/books', bookRouter);
router.use('/userbooks', userBookRouter);

module.exports = router;