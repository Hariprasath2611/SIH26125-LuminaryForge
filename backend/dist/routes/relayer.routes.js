"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const relayer_controller_1 = require("../controllers/relayer.controller");
const router = (0, express_1.Router)();
router.post('/sponsor', relayer_controller_1.sponsorMetaTx);
router.get('/treasury', relayer_controller_1.getTreasury);
router.get('/stats', relayer_controller_1.getTreasury);
exports.default = router;
