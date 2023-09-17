const router = require('express').Router();
const Note = require('../model/notes.model');


router.route('/')
    .get((req, res) => {
        Note.find()
            .then((notes) => { res.json(notes); })
            .catch((err) => res.status(400).json('error' + err));
    })
    .post((req, res) => {
        const title = req.body.title;
        const description = req.body.description;

        const note = new Note({
            title: title,
            description: description
        });
        note.save()
            .then(() => res.json('note added successfully'))
            .catch((err) => res.status(400).json('error' + err));
    });
router.route('/:id')
    .delete((req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then(() => { res.json("deleted"); })
            .catch((err) => res.status(400).json('error:' + err));
    })

module.exports = router;