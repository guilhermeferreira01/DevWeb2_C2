const express = require('express');
const PersonController = require('./Controller/PersonController');

const router = require('express').Router();

router.route('/persons')
    .get(PersonController.index)
    .post(PersonController.store);


router.route('/persons/:id')
    .patch(PersonController.update)
    .put(PersonController.update)
    .delete(PersonController.delete)

module.exports = router;