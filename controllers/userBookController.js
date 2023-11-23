const { UserBook, User, Book } = require("../models");

class UserController {
  static async findAll(req, res, next) {
    try {
      const userBooks = await UserBook.findAll();
      res.status(200).json(userBooks);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const { user_id, book_id, borrowed_at, borrowed_exp } = req.body;
    try {
      const book = await Book.findByPk(book_id);

      if (!book) throw { name: "notFound", msg: "Book not found" };

      const userBook = await UserBook.create({
        user_id,
        book_id,
        borrowed_at,
        borrowed_exp,
      });
      res.status(201).json({ userBook, msg: "Book successfully borrowed" });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    const id = +req.params.id;
    try {
      await UserBook.destroy({ where: { id } });
      res.status(200).json({ msg: "Successfully returned a book" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
