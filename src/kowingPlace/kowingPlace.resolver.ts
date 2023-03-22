import { date, random } from "fp-ts";
import { Prisma, PrismaClient } from "../../prisma/client";
import {
  ICreateCoWorkDetail,
  ICreateFacility,
  ICreateFacilityIn,
  ICreateRoomInternal,
  ICreateUserExternal,
  ICreateUserInternal,
  IGetCoWorkUserChoose,
  IGetCoworkByUserId,
  IGetStatusUserBookInternal,
  IGetUserConfirmBooking,
  IGgetRoomByCoWorkIdCodec,
  IShowBookDetailInternalByCoWork,
  IUpdateCoWorkDetail,
} from "./kowingPlace.interface";
export const prisma = new PrismaClient();

export const createUserExternal = (args: ICreateUserExternal) =>
  prisma.userExternal.create({
    data: {
      name: args.name,
      email: args.email,
      tel: args.tel,
      password: args.password,
    },
  });

export const getCoWork24Hrs = async () => {
  const getAllCoWork = await prisma.coWork.findMany({
    include: {
      OpenClose: true,
      BranchToRoom: true,
    },
  });
  const get24hrsOpen = getAllCoWork.filter((r) => {
    if (
      r.OpenClose?.isOpen24hoursMon === true ||
      r.OpenClose?.isOpen24hoursTue === true ||
      r.OpenClose?.isOpen24hoursWed === true ||
      r.OpenClose?.isOpen24hoursThurs === true ||
      r.OpenClose?.isOpen24hoursFri === true ||
      r.OpenClose?.isOpen24hoursSat === true ||
      r.OpenClose?.isOpen24hoursSun === true
    ) {
      return true;
    } else {
      return false;
    }
  });
  return get24hrsOpen;
};

// export const getCoworks = async () => {
//   const coWork = await prisma.coWork.findMany({});

//   while (coWork.length < 10) {
//     let randomCoWorkIndex = Math.floor(Math.random() * coWork.length);
//     let randomCowork = coWork[randomCoWorkIndex];
//     console.log(randomCowork);
//     return randomCowork;
//   }
// };

export const getCoworks = async () => {
  const coWork = await prisma.coWork.findMany({});

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
};

export const getRoomByCoWorkId = (args: IGgetRoomByCoWorkIdCodec) =>
  prisma.coWork.findUnique({
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

export const getCoworkByUserId = (args: IGetCoworkByUserId) =>
  prisma.userInternal.findUnique({
    where: {
      id: args.userInternalId,
    },
    include: {
      coWork: true,
    },
  });

export const getCoWorkUserChoose = (args: IGetCoWorkUserChoose) =>
  prisma.coWork.findUnique({
    where: {
      id: args.id,
    },
  });

//vertify code
export const getVerifyCodeByUserConfirmBooking = async (
  args: IGetUserConfirmBooking
) => {
  const verifyCode = `KOWING${args.userExId}${args.coWorkId}${args.roomId}`;

  const getBookData = await prisma.bookRoom.create({
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
};

export const createUserInternal = (args: ICreateUserInternal) =>
  prisma.userInternal.create({
    data: {
      name: args.name,
      email: args.email,
      tel: args.tel,
      password: args.password,
    },
  });

//เส้นโชว์ ห้องประชุมทั้งหมด / ชื่อผู้ใช้ / booking detail
export const showBookDetailInternalByCoWork = async (
  args: IShowBookDetailInternalByCoWork
) => {
  const bookDetailData = await prisma.coWork.findUnique({
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
};

export const createRoomInternal = async (args: ICreateRoomInternal) => {
  const createRoom = await prisma.branchToRoom.create({
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
};

export const updateRoomInternal = async (args: {
  branchToRoomId: number;
  coWorkId: number;
  name: string;
  capacity: number;
  rates: { price: number; durationId: number; roomRateId: number }[];
}) => {
  const updateRoom = await prisma.branchToRoom.update({
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
};

export const createFacilityIn = (args: ICreateFacilityIn) =>
  prisma.facility.createMany({
    data: {
      name: args.name,
    },
  });

export const createCoWorkDetail = async (args: ICreateCoWorkDetail) => {
  const coWorkCreate = await prisma.coWork.create({
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
};

export const createOpenClose = (args: {
  coWorkId: number;
  openTimeMon: number;
  closeTimeMon: number;
  isOpenMon: boolean;
  isOpen24hoursMon: boolean;
  openTimeTue: number;
  closeTimeTue: number;
  isOpenTue: boolean;
  isOpen24hoursTue: boolean;
  openTimeWed: number;
  closeTimeWed: number;
  isOpenWed: boolean;
  isOpen24hoursWed: boolean;
  openTimeThurs: number;
  closeTimeThurs: number;
  isOpenThurs: boolean;
  isOpen24hoursThurs: boolean;
  openTimeFri: number;
  closeTimeFri: number;
  isOpenFri: boolean;
  isOpen24hoursFri: boolean;
  openTimeSat: number;
  closeTimeSat: number;
  isOpenSat: boolean;
  isOpen24hoursSat: boolean;
  openTimeSun: number;
  closeTimeSun: number;
  isOpenSun: boolean;
  isOpen24hoursSun: boolean;
}) =>
  prisma.openClose.create({
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

export const updateCoWorkDetail = async (args: IUpdateCoWorkDetail) => {
  const coWorkupdate = await prisma.coWork.update({
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
};

export const getStatusUserBookInternal = (args: IGetStatusUserBookInternal) =>
  prisma.bookRoom.update({
    where: {
      id: args.bookRoomId,
    },
    data: {
      status: "Arrived",
    },
  });

export const createFacility = (args: ICreateFacility) =>
  prisma.facility.create({
    data: {
      name: args.name,
    },
  });
