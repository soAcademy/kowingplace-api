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
exports.createFacility = exports.getStatusUserBookInternal = exports.updateCoWorkDetail = exports.createTimeOpenClose = exports.createCoWorkDetail = exports.createFacilityIn = exports.updateRoomInternal = exports.createRoomInternal = exports.showBookDetailInternalByCoWork = exports.createUserInternal = exports.getVerifyCodeByUserConfirmBooking = exports.getCoWorkUserChoose = exports.getCoworkByUserId = exports.getRoomByCoWorkId = exports.getCoworks = exports.createUserExternal = exports.prisma = void 0;
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
// export const getCoWork24Hrs = async () => {
//   const getAllCoWork = await prisma.coWork.findMany({
//     include: {
//       OpenClose: true,
//       BranchToRoom: true,
//     },
//   });
//   const get24hrsOpen = getAllCoWork.filter((r) => {
//     if (
//       r.OpenClose?.isOpen24hoursMon === true ||
//       r.OpenClose?.isOpen24hoursTue === true ||
//       r.OpenClose?.isOpen24hoursWed === true ||
//       r.OpenClose?.isOpen24hoursThurs === true ||
//       r.OpenClose?.isOpen24hoursFri === true ||
//       r.OpenClose?.isOpen24hoursSat === true ||
//       r.OpenClose?.isOpen24hoursSun === true
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return get24hrsOpen;
// };
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
//create cowork
const createCoWorkDetail = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const coWorkCreate = yield exports.prisma.coWork.create({
        data: {
            name: args.name,
            description: args.description,
            location: args.location,
            picture: args.picture,
            tel: args.tel,
            userInternalId: args.userInternalId,
            FacilityToCoWork: {
                connect: {
                    id: args.facilityToCoworkId,
                },
            },
            Close: {
                connect: {
                    id: args.closeId,
                },
            },
            Open: {
                connect: {
                    id: args.openId,
                },
            },
            OpenClose24Hours: {
                connect: {
                    id: args.openClose24HoursId,
                },
            },
        },
    });
    return coWorkCreate;
});
exports.createCoWorkDetail = createCoWorkDetail;
const createTimeOpenClose = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const openCoWork = yield exports.prisma.open.create({
        data: {
            monOpen: args.open[0],
            tueOpen: args.open[1],
            wedOpen: args.open[2],
            thursOpen: args.open[3],
            friOpen: args.open[4],
            satOpen: args.open[5],
            sunOpen: args.open[6],
            coWorkId: args.coWorkId,
        },
    });
    const closeCoWork = yield exports.prisma.close.create({
        data: {
            monClose: args.close[0],
            tueClose: args.close[1],
            wedClose: args.close[2],
            thursClose: args.close[3],
            friClose: args.close[4],
            satClose: args.close[5],
            sunClose: args.close[6],
            coWorkId: args.coWorkId,
        },
    });
    const openClose24Hours = yield exports.prisma.openClose24Hours.create({
        data: {
            mon24hours: args.openClose24hours[0],
            tue24hours: args.openClose24hours[1],
            wed24hours: args.openClose24hours[2],
            thurs24hours: args.openClose24hours[3],
            fri24hours: args.openClose24hours[4],
            sat24hours: args.openClose24hours[5],
            sun24hours: args.openClose24hours[6],
            coWorkId: args.coWorkId,
        },
    });
    return [openCoWork, closeCoWork, openClose24Hours];
});
exports.createTimeOpenClose = createTimeOpenClose;
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
