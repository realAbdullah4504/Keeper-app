const router = require('express').Router();
const User = require('../model/users.model');

router.route('/')
    .get((req, res) => {
        User.find()
            .then((users) => { res.json(users); })
            .catch((err) => res.status(400).json('error' + err));
    })
    .post((req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({ email: email, password: password})
            .then(user => {
                res.json(user);
            })
            .catch((err) => res.status(400).json('error' + err));

    });

    module.exports=router;