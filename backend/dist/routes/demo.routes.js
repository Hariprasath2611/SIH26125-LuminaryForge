"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const demo_controller_1 = require("../controllers/demo.controller");
const router = (0, express_1.Router)();
router.get('/users', demo_controller_1.DemoController.getDemoUsers);
router.post('/login', demo_controller_1.DemoController.demoLogin);
router.post('/reset', demo_controller_1.DemoController.demoReset);
exports.default = router;
