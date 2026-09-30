"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_controller_1 = require("../controllers/verify.controller");
const router = (0, express_1.Router)();
router.post('/credential', verify_controller_1.VerifyController.verifyCredential);
exports.default = router;
