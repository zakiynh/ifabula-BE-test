const { Book } = require('../models');

class BookController {
    static async findAll(req, res, next) {
        try {
            const books = await Book.findAll();
            res.status(200).json(books);
        } catch (err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        const { title, description } = req.body;
        try {
            const book = await Book.create({ title, description });
            res.status(201).json({book, msg: 'Successfully added a book'});
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        const id = +req.params.id;
        try {
            const book = await Book.findByPk(id);
            if (!book) throw { name: 'notFound' };
            await book.destroy({ where: { id } });
            res.status(200).json({msg: 'Successfully deleted a book'});
        } catch (err) {
            next(err);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const { title, description } = req.body;
            const book = await Book.findByPk(id);
            if (!book) throw { name: 'notFound' };
            await book.update({ title, description });

            res.status(200).json({msg: 'Successfully updated a book'});
        } catch (err) {
            next(err);
        }
    }
}

module.exports = BookController;