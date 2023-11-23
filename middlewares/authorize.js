const { Book, User } = require("../models");
async function authorize(req, res, next) {
  try {
    const { role } = req.user;
    if (role !== "admin") throw { name: "notAuthorized" };
    next();
  } catch (err) {
    next(err);
  }
}

async function authorizeDeleteBook(req, res, next) {
  try {
    const { id } = req.params;
    const user_id = req.user_id;
    const { role } = req.user;
    const book = await Book.findByPk(id);
    if (!book) throw { name: "notFound", msg: "Book not found" };
    if (book.user_id !== user_id && role !== "admin")
      throw { name: "notAuthorized" };
    next();
  } catch (err) {
    next(err);
  }
}

async function authorizeCreateBook(req, res, next) {
  try {
    const { role } = req.user;
    const user_id = req.user.id;
    const borrower_id = +req.body.user_id;
    const user = await User.findByPk(borrower_id);
    if (!user) throw { name: "notFound", msg: "User not found" };
    if (role !== "admin" && user_id !== borrower_id)
      throw { name: "notAuthorized" };
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { authorize, authorizeDeleteBook, authorizeCreateBook };
