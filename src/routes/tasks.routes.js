const express = require('express')
const router = express.Router()

const Task = require('../models/tasks')

router.get('/', (req, res) => {
    Task.find(function (err, tasks) {
        console.log(tasks)
    })
    res.json({
        status: 'API Works!'
    })
})

module.exports = router