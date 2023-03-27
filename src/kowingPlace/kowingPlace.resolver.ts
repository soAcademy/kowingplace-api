import { date, number, random } from "fp-ts";
import { Prisma, PrismaClient } from "../../prisma/client";
import {
  ICheckUserExternalPasswordEmail,
  ICheckUserInternalPasswordEmail,
  ICreateCoWorkDetail,
  ICreateFacility,
  ICreateFacilityIn,
  ICreateRoomInternal,
  ICreateTimeOpenClose,
  ICreateUserExternal,
  ICreateUserInternal,
  IGetCalendarBookingByCoWorkId,
  IGetCoWorkUserChoose,
  IGetCoworkByUserId,
  IGetStatusUserBookInternal,
  IGetUserConfirmBooking,
  IGgetRoomByCoWorkIdCodec,
  IShowBookDetailInternalByCoWork,
  IUpdateCalendarBookingByCoWorkId,
  IUpdateCoWorkDetail,
  IUpsertExternalToken,
  IUpsertInternalToken,
} from "./kowingPlace.interface";
import { hashPassword } from "./kowingPlace.service";
export const prisma = new PrismaClient();

export const createUserExternal = async (args: ICreateUserExternal) => {
  const createUser = await prisma.userExternal.create({
    data: {
      name: args.name,
      email: args.email,
      tel: args.tel,
      password: await hashPassword(args.password),
    },
  });
  return createUser;
};

export const getCoworks = async () => {
  const coWork = await prisma.coWork.findMany({});

  const numIndex = [];
  for (let i = 0; i < coWork.length; i++) {
    numIndex.push(i);
  }
  numIndex.sort((a, b) => Math.random() - 0.5);

  const recommendCowork = [];
  for (let i = 0; i < numIndex.length; i++) {
    recommendCowork.push(coWork[numIndex[i]]);
  }

  return recommendCowork;
};

export const getRoomByCoWorkId = async (args: IGgetRoomByCoWorkIdCodec) => {
  try {
    const getRoom = await prisma.coWork.findUnique({
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
    return getRoom;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

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

export const createUserInternal = async (args: ICreateUserInternal) => {
  const createUser = await prisma.userInternal.create({
    data: {
      name: args.name,
      email: args.email,
      tel: args.tel,
      password: await hashPassword(args.password),
    },
  });
  return createUser;
};

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

//create cowork
export const createCoWorkDetail = async (args: ICreateCoWorkDetail) => {
  const coWorkCreate = await prisma.coWork.create({
    data: {
      name: args.name,
      description: args.description,
      location: args.location,
      picture: args.picture,
      tel: args.tel,
      userInternalId: args.userInternalId,
      // FacilityToCoWork: {
      //   connect: {
      //     id: args.facilityToCoworkId,
      //   },
      // },
      // Close: {
      //   connect: {
      //     id: args.closeId,
      //   },
      // },
      // Open: {
      //   connect: {
      //     id: args.openId,
      //   },
      // },
      // OpenClose24Hours: {
      //   connect: {
      //     id: args.openClose24HoursId,
      //   },
      // },
    },
  });
  return coWorkCreate;
};

export const createTimeOpenClose = async (args: ICreateTimeOpenClose) => {
  const openCoWork = await prisma.open.create({
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
  const closeCoWork = await prisma.close.create({
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

  const openClose24Hours = await prisma.openClose24Hours.create({
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
};

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

export const getCalendarBookingByCoWorkId = (
  args: IGetCalendarBookingByCoWorkId
) =>
  prisma.coWork.findUnique({
    where: {
      id: args.coWorkId,
    },
    include: {
      Open: true,
      Close: true,
      OpenClose24Hours: true,
    },
  });

export const updateCalendarBookingByCoWorkId = (
  args: IUpdateCalendarBookingByCoWorkId
) =>
  prisma.coWork.update({
    where: {
      id: args.coWorkId,
    },
    data: {
      Open: {
        update: {
          monOpen: args.open[0],
          tueOpen: args.open[1],
          wedOpen: args.open[2],
          thursOpen: args.open[3],
          friOpen: args.open[4],
          satOpen: args.open[5],
          sunOpen: args.open[6],
        },
      },
      Close: {
        update: {
          monClose: args.close[0],
          tueClose: args.close[1],
          wedClose: args.close[2],
          thursClose: args.close[3],
          friClose: args.close[4],
          satClose: args.close[5],
          sunClose: args.close[6],
        },
      },
      OpenClose24Hours: {
        update: {
          mon24hours: args.openClose24hours[0],
          tue24hours: args.openClose24hours[1],
          wed24hours: args.openClose24hours[2],
          thurs24hours: args.openClose24hours[3],
          fri24hours: args.openClose24hours[4],
          sat24hours: args.openClose24hours[5],
          sun24hours: args.openClose24hours[6],
        },
      },
    },
    include: {
      Open: true,
      Close: true,
      OpenClose24Hours: true,
    },
  });

export const getCoWorkOpen24Hours = () =>
  prisma.coWork.findMany({
    where: {
      OpenClose24Hours: {
        mon24hours: true,
        tue24hours: true,
        wed24hours: true,
        thurs24hours: true,
        fri24hours: true,
        sat24hours: true,
        sun24hours: true,
      },
    },
    include: {
      OpenClose24Hours: true,
    },
  });

export const checkUserExternalPasswordEmail = (
  args: ICheckUserExternalPasswordEmail
) =>
  prisma.userExternal.findUnique({
    where: {
      email: args.email,
    },
    select: {
      email: true,
      password: true,
      name: true,
      tel: true,
    },
  });

export const checkUserInternalPasswordEmail = (
  args: ICheckUserInternalPasswordEmail
) =>
  prisma.userInternal.findUnique({
    where: {
      email: args.email,
    },
    select: {
      email: true,
      password: true,
      name: true,
      tel: true,
    },
  });

export const forgetPasswordUserExternal = async (args: {
  email: string;
  password: string;
}) => {
  const updateForgetPassword = await prisma.userExternal.update({
    where: {
      email: args.email,
    },
    data: {
      password: await hashPassword(args.password),
    },
  });
  return updateForgetPassword;
};

export const forgetPasswordUserInternal = async (args: {
  email: string;
  password: string;
}) => {
  const forgetPassword = prisma.userInternal.update({
    where: {
      email: args.email,
    },
    data: {
      password: await hashPassword(args.password),
    },
  });
  return forgetPassword;
};
