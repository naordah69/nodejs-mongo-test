const express = require('express');
const router = express.Router();
const axios = require('axios');
const {Person} = require('../collections/person');
const {Profession} = require("../collections/profession");

router.get('/', async (req, res) => {
    let person = await Person.findOne();
    let profession = await Profession.findOne();
    return res.json({code: 200, data: {person, profession}})
})

module.exports = router;
