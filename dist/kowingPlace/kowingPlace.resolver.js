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
exports.createFacility = exports.getStatusUserBookInternal = exports.updateCoWorkDetail = exports.createOpenClose = exports.createCoWorkDetail = exports.createFacilityIn = exports.updateRoomInternal = exports.createRoomInternal = exports.showBookDetailInternalByCoWork = exports.createUserInternal = exports.getVerifyCodeByUserConfirmBooking = exports.getCoWorkUserChoose = exports.getCoworkByUserId = exports.getRoomByCoWorkId = exports.getCoworks = exports.getCoWork24Hrs = exports.createUserExternal = exports.prisma = void 0;
const client_1 = require("../../prisma/client");
exports.prisma = new client_1.PrismaClient();
const createUserExternal = (args) => exports.prisma.userExternal.create({
    data: {
        name: args.name,
        email: args.email,
        tel: args.tel,
        password: args.password,
    },
});
exports.createUserExternal = createUserExternal;
const getCoWork24Hrs = () => __awaiter(void 0, void 0, void 0, function* () {
    const getAllCoWork = yield exports.prisma.coWork.findMany({
        include: {
            OpenClose: true,
            BranchToRoom: true,
        },
    });
    const get24hrsOpen = getAllCoWork.filter((r) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (((_a = r.OpenClose) === null || _a === void 0 ? void 0 : _a.isOpen24hoursMon) === true ||
            ((_b = r.OpenClose) === null || _b === void 0 ? void 0 : _b.isOpen24hoursTue) === true ||
            ((_c = r.OpenClose) === null || _c === void 0 ? void 0 : _c.isOpen24hoursWed) === true ||
            ((_d = r.OpenClose) === null || _d === void 0 ? void 0 : _d.isOpen24hoursThurs) === true ||
            ((_e = r.OpenClose) === null || _e === void 0 ? void 0 : _e.isOpen24hoursFri) === true ||
            ((_f = r.OpenClose) === null || _f === void 0 ? void 0 : _f.isOpen24hoursSat) === true ||
            ((_g = r.OpenClose) === null || _g === void 0 ? void 0 : _g.isOpen24hoursSun) === true) {
            return true;
        }
        else {
            return false;
        }
    });
    return get24hrsOpen;
});
exports.getCoWork24Hrs = getCoWork24Hrs;
// export const getCoworks = async () => {
//   const coWork = await prisma.coWork.findMany({});
//   while (coWork.length < 10) {
//     let randomCoWorkIndex = Math.floor(Math.random() * coWork.length);
//     let randomCowork = coWork[randomCoWorkIndex];
//     console.log(randomCowork);
//     return randomCowork;
//   }
// };
const getCoworks = () => __awaiter(void 0, void 0, void 0, function* () {
    const coWork = yield exports.prisma.coWork.findMany({});
    const numIndex = [];
    for (let i = 0; i < coWork.length; i++) {
        console.log(i);
        numIndex.push(i);
    }
    numIndex.sort((a, b) => Math.random() - 0.5);
    const recommendCowork = [];
    for (let i = 0; i < numIndex.length; i++) {
        console.log(i);
        recommendCowork.push(coWork[numIndex[i]]);
    }
    return recommendCowork;
});
exports.getCoworks = getCoworks;
const getRoomByCoWorkId = (args) => exports.prisma.coWork.findUnique({
    where: {
        id: args.coWorkId,
    },
    include: {
        BranchToRoom: {
            where: {
                coWorkId: args.coWorkId,
            },
            include: {
                room: true,
            },
        },
    },
});
exports.getRoomByCoWorkId = getRoomByCoWorkId;
const getCoworkByUserId = (args) => exports.prisma.userInternal.findUnique({
    where: {
        id: args.userInternalId,
    },
    include: {
        coWork: true,
    },
});
exports.getCoworkByUserId = getCoworkByUserId;
const getCoWorkUserChoose = (args) => exports.prisma.coWork.findUnique({
    where: {
        id: args.id,
    },
});
exports.getCoWorkUserChoose = getCoWorkUserChoose;
//vertify code
const getVerifyCodeByUserConfirmBooking = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyCode = `KOWING${args.userExId}${args.coWorkId}${args.roomId}`;
    const getBookData = yield exports.prisma.bookRoom.create({
        data: {
            startTime: new Date(args.startTime),
            cowork: {
                connect: {
                    id: args.coWorkId,
                },
            },
            status: "ON GOING",
            roomRate: {
                connect: {
                    id: args.roomId,
                },
            },
            UserExternal: {
                connect: {
                    id: args.userExId,
                },
            },
            vertifyCode: {
                create: {
                    bookdate: new Date(args.startTime),
                    verifyCode: verifyCode,
                },
            },
        },
        select: {
            vertifyCode: {
                select: {
                    verifyCode: true,
                },
            },
        },
    });
    return getBookData;
});
exports.getVerifyCodeByUserConfirmBooking = getVerifyCodeByUserConfirmBooking;
const createUserInternal = (args) => exports.prisma.userInternal.create({
    data: {
        name: args.name,
        email: args.email,
        tel: args.tel,
        password: args.password,
    },
});
exports.createUserInternal = createUserInternal;
//เส้นโชว์ ห้องประชุมทั้งหมด / ชื่อผู้ใช้ / booking detail
const showBookDetailInternalByCoWork = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const bookDetailData = yield exports.prisma.coWork.findUnique({
        where: {
            id: args.coWorkId,
        },
        select: {
            bookRoom: {
                select: {
                    startTime: true,
                    status: true,
                    roomRate: {
                        select: {
                            duration: true,
                            roomId: true,
                        },
                    },
                    UserExternal: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
            BranchToRoom: {
                select: {
                    room: true,
                },
            },
        },
    });
    return bookDetailData;
});
exports.showBookDetailInternalByCoWork = showBookDetailInternalByCoWork;
const createRoomInternal = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const createRoom = yield exports.prisma.branchToRoom.create({
        data: {
            coWork: {
                connect: {
                    id: args.coworkId,
                },
            },
            room: {
                create: {
                    name: args.name,
                    capacity: args.capacity,
                    RoomRate: {
                        create: args.rates.map((r) => ({
                            price: r.price,
                            duration: {
                                connect: {
                                    id: r.durationId,
                                },
                            },
                        })),
                    },
                },
            },
        },
    });
    return createRoom;
});
exports.createRoomInternal = createRoomInternal;
const updateRoomInternal = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const updateRoom = yield exports.prisma.branchToRoom.update({
        where: {
            id: args.branchToRoomId,
        },
        data: {
            coWork: {
                connect: {
                    id: args.coWorkId,
                },
            },
            room: {
                update: {
                    name: args.name,
                    capacity: args.capacity,
                    RoomRate: {
                        update: args.rates.map((r) => ({
                            where: {
                                id: r.roomRateId,
                            },
                            data: {
                                price: r.price,
                                duration: {
                                    connect: {
                                        id: r.durationId,
                                    },
                                },
                            },
                        })),
                    },
                },
            },
        },
    });
    return updateRoom;
});
exports.updateRoomInternal = updateRoomInternal;
const createFacilityIn = (args) => exports.prisma.facility.createMany({
    data: {
        name: args.name,
    },
});
exports.createFacilityIn = createFacilityIn;
const createCoWorkDetail = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const coWorkCreate = yield exports.prisma.coWork.create({
        data: {
            name: args.name,
            description: args.description,
            location: args.location,
            picture: args.picture,
            tel: args.tel,
            userInternalId: args.userInternalId,
        },
    });
    return coWorkCreate;
});
exports.createCoWorkDetail = createCoWorkDetail;
const createOpenClose = (args) => exports.prisma.openClose.create({
    data: {
        openTimeMon: args.openTimeMon,
        closeTimeMon: args.closeTimeMon,
        isOpenMon: args.isOpenMon,
        isOpen24hoursMon: args.isOpen24hoursMon,
        openTimeTue: args.openTimeTue,
        closeTimeTue: args.closeTimeTue,
        isOpenTue: args.isOpenTue,
        isOpen24hoursTue: args.isOpen24hoursTue,
        openTimeWed: args.closeTimeWed,
        closeTimeWed: args.closeTimeWed,
        isOpenWed: args.isOpenWed,
        isOpen24hoursWed: args.isOpen24hoursWed,
        openTimeThurs: args.openTimeThurs,
        closeTimeThurs: args.closeTimeThurs,
        isOpenThurs: args.isOpen24hoursThurs,
        isOpen24hoursThurs: args.isOpen24hoursThurs,
        openTimeFri: args.openTimeFri,
        closeTimeFri: args.closeTimeFri,
        isOpenFri: args.isOpenFri,
        isOpen24hoursFri: args.isOpen24hoursFri,
        openTimeSat: args.openTimeSat,
        closeTimeSat: args.closeTimeSat,
        isOpenSat: args.isOpenSat,
        isOpen24hoursSat: args.isOpen24hoursSat,
        openTimeSun: args.openTimeSat,
        closeTimeSun: args.closeTimeSun,
        isOpenSun: args.isOpenSun,
        isOpen24hoursSun: args.isOpen24hoursSun,
        coWork: {
            connect: {
                id: args.coWorkId,
            },
        },
    },
});
exports.createOpenClose = createOpenClose;
const updateCoWorkDetail = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const coWorkupdate = yield exports.prisma.coWork.update({
        where: {
            id: args.coWorkId,
        },
        data: {
            name: args.name,
            description: args.description,
            location: args.location,
            picture: args.picture,
            tel: args.tel,
        },
    });
    return coWorkupdate;
});
exports.updateCoWorkDetail = updateCoWorkDetail;
const getStatusUserBookInternal = (args) => exports.prisma.bookRoom.update({
    where: {
        id: args.bookRoomId,
    },
    data: {
        status: "Arrived",
    },
});
exports.getStatusUserBookInternal = getStatusUserBookInternal;
const createFacility = (args) => exports.prisma.facility.create({
    data: {
        name: args.name,
    },
});
exports.createFacility = createFacility;
