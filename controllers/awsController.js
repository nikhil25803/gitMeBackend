const express = require('express');

exports.getSum = (req, res, next) => {
    res.send({
        "Status":"Running"
    })
}
