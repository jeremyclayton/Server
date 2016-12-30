const express = require('express');
const router = express.Router();
const knex = require('../db/connection');
/* GET home page. */
router.get('/', (req, res, next) => {
    return knex('event')
    .select()
    .then(data => {
        res.render('event', {data: data});
    });
});
module.exports = router;
