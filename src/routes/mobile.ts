import express from "express";

const router = express.Router();


// Customer router
router.post('/customer/register', require("../controller/customer/register"));
router.post('/customer/login', require("../controller/customer/login"));
router.post("/customer/forgot-password", require("../controller/customer/forgot-password"));
router.post("/customer/set-new-password", require("../controller/customer/set-new-password"));


// User router
router.post('/user/register', require("../controller/user/register"));
router.post('/user/login', require("../controller/user/login"));
router.post('/user/forgot-password', require("../controller/user/forgot-password"));
router.post('/user/set-password', require("../controller/user/set-password"));

// Store router
router.post('/store/add', require('../middleware/CustomerMiddleware'), require("../controller/store/add"));
router.post('/store/list-by-customer-id', require('../middleware/CustomerMiddleware'), require("../controller/store/list-by-customer-id"));


//User Store List
router.post('/user/store/list', require('../middleware/UserMiddleware'), require("../controller/store/list-all"));

//Work router
router.post('/work/add', require('../middleware/CustomerMiddleware'), require("../controller/work/add"));

//Reservation router
router.post('/reservation/add', require('../middleware/UserMiddleware'), require("../controller/reservation/add"));
router.post("/reservation/get-by-user-id", require('../middleware/UserMiddleware'), require("../controller/reservation/get-by-user-id"));
router.post("/reservation/get-by-store-id", require('../middleware/UserMiddleware'), require("../controller/reservation/get-by-store-id"));

module.exports = router;