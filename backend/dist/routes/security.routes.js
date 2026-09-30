"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const security_controller_1 = require("../controllers/security.controller");
const router = (0, express_1.Router)();
router.get('/alerts', security_controller_1.getSecurityAlerts);
router.post('/quick-lock', security_controller_1.triggerQuickLock);
router.get('/quick-lock/:accountAddress', security_controller_1.getQuickLockStatus);
exports.default = router;
