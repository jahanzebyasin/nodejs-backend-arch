
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/maincontroller');


//router.route("/").get(mainController.get);
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    console.log('req : ',req, 'res : ', req);
    next()
});

router.get("/",mainController.get);

module.exports = router;
