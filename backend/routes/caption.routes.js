const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const captionController = require('../controllers/captain.controller');

router.post('/create', [
    body('caption').isLength({ min: 3 }).withMessage('Caption must be at least 3 characters long'),
    body('image').isURL().withMessage('Invalid URL')
],
    captionController.createCaption
)
