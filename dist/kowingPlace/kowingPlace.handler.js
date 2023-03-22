"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOpenCloseHandler = exports.createFacilityHandler = exports.getStatusUserBookInternalHandler = exports.showBookDetailInternalByCoWorkHandler = exports.getCoworkByUserIdHandler = exports.getRoomByCoWorkIdHandler = exports.updateRoomInternalHandler = exports.updateCoWorkDetailHandler = exports.createCoWorkDetailHandler = exports.createRoomInternalHandler = exports.createUserInternalHandler = exports.getVerifyCodeByUserConfirmBookingHandler = exports.getCoWorkUserChooseHandler = exports.getCoworksHandler = exports.getCoWork24HrsHandler = exports.createUserExternalHandler = void 0;
const kowingPlace_resolver_1 = require("./kowingPlace.resolver");
const createUserExternalHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.createUserExternal)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.createUserExternalHandler = createUserExternalHandler;
const getCoWork24HrsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, kowingPlace_resolver_1.getCoWork24Hrs)();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getCoWork24HrsHandler = getCoWork24HrsHandler;
const getCoworksHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, kowingPlace_resolver_1.getCoworks)();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getCoworksHandler = getCoworksHandler;
const getCoWorkUserChooseHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.getCoWorkUserChoose)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getCoWorkUserChooseHandler = getCoWorkUserChooseHandler;
const getVerifyCodeByUserConfirmBookingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.getVerifyCodeByUserConfirmBooking)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getVerifyCodeByUserConfirmBookingHandler = getVerifyCodeByUserConfirmBookingHandler;
const createUserInternalHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.createUserInternal)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.createUserInternalHandler = createUserInternalHandler;
const createRoomInternalHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.createRoomInternal)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.createRoomInternalHandler = createRoomInternalHandler;
const createCoWorkDetailHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.createCoWorkDetail)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.createCoWorkDetailHandler = createCoWorkDetailHandler;
const updateCoWorkDetailHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.updateCoWorkDetail)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.updateCoWorkDetailHandler = updateCoWorkDetailHandler;
const updateRoomInternalHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.updateRoomInternal)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.updateRoomInternalHandler = updateRoomInternalHandler;
const getRoomByCoWorkIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.getRoomByCoWorkId)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getRoomByCoWorkIdHandler = getRoomByCoWorkIdHandler;
const getCoworkByUserIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.getCoworkByUserId)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getCoworkByUserIdHandler = getCoworkByUserIdHandler;
const showBookDetailInternalByCoWorkHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.showBookDetailInternalByCoWork)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.showBookDetailInternalByCoWorkHandler = showBookDetailInternalByCoWorkHandler;
const getStatusUserBookInternalHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.getStatusUserBookInternal)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getStatusUserBookInternalHandler = getStatusUserBookInternalHandler;
const createFacilityHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.createFacility)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.createFacilityHandler = createFacilityHandler;
const createOpenCloseHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req.body;
    try {
        const result = yield (0, kowingPlace_resolver_1.createOpenClose)(args);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.createOpenCloseHandler = createOpenCloseHandler;
