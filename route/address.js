const express=require('express');
const router = express.Router();

const actionController = require('../controller/action');

router.post('/add', actionController.postAddData);
router.post('/delete/:id',actionController.postDeleteData);
router.get('/getall',actionController.getAllData);

module.exports= router;