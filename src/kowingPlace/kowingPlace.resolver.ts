import { date, number, random } from "fp-ts";
import { Prisma, PrismaClient } from "../../prisma/client";
import {
  IBookDurationRoom,
  ICheckUserExternalPasswordEmail,
  ICheckUserInternalPasswordEmail,
  ICreateCoWorkDetail,
  ICreateFacility,
  ICreateFacilityIn,
  ICreateRoomInternal,
  ICreateTimeOpenClose,
  ICreateUserExternal,
  ICreateUserInternal,
  IDeleteCoWork,
  IForgetPasswordUserExternal,
  IForgetPasswordUserInternal,
  IGetCalendarBookingByCoWorkId,
  IGetCoWorkUserChoose,
  IGetCoworkByUserId,
  IGetStatusUserBookInternal,
  IGetUserConfirmBooking,
  IGgetRoomByCoWorkIdCodec,
  IShowBookDetailInternalByCoWork,
  IShowtheRoomBookedbyUserExternal,
  IUpdateCalendarBookingByCoWorkId,
  IUpdateCoWorkDetail,
} from "./kowingPlace.interface";
import { hashPassword } from "./kowingPlace.service";
import { mock } from "node:test";
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
          room: {
            include: {
              RoomRate: {
                include: {
                  duration: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return getRoom;
};

export const getCoworkByUserId = async (args: IGetCoworkByUserId) => {
  const getData = await prisma.userInternal.findUnique({
    where: {
      id: args.userInternalId,
    },
    include: {
      coWork: {
        include: {
          Open: true,
          Close: true,
          OpenCloseBoolean: true,
          OpenClose24Hours: true,
          FacilityToCoWork: true,
          BranchToRoom: {
            include: {
              room: {
                include: {
                  RoomRate: {
                    where: {
                      active: true,
                    },
                    include: {
                      duration: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  const newGetData = { ...getData };
  delete newGetData.password;

  return newGetData;
};

export const getCoWorkUserChoose = (args: IGetCoWorkUserChoose) =>
  prisma.coWork.findUnique({
    where: {
      id: args.id,
    },
    include: {
      FacilityToCoWork: {
        include: {
          facility: true,
        },
      },
    },
  });

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
                connectOrCreate: {
                  where: {
                    duration: r.duration,
                  },
                  create: {
                    duration: r.duration,
                  },
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
  rates: {
    price: number;
    duration: number;
    roomId: number;
    roomRateId: number;
  }[];
}) => {
  try {
    //set active false
    const setRoomIdActiveFalse = await prisma.roomRate.updateMany({
      where: {
        roomId: args.rates[0].roomId,
      },
      data: {
        active: false,
      },
    });
    //update and reset active true by roomrateid
    const updateRoom = await prisma.branchToRoom.update({
      where: {
        id: args.branchToRoomId,
      },
      data: {
        room: {
          update: {
            name: args.name,
            capacity: args.capacity,
            RoomRate: {
              upsert: args.rates.map((r) => ({
                where: { id: r.roomRateId },
                update: {
                  price: r.price,
                  active: true,
                  duration: {
                    connectOrCreate: {
                      where: {
                        duration: r.duration,
                      },
                      create: {
                        duration: r.duration,
                      },
                    },
                  },
                },
                create: {
                  price: r.price,
                  active: true,
                  duration: {
                    connectOrCreate: {
                      where: {
                        duration: r.duration,
                      },
                      create: {
                        duration: r.duration,
                      },
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
  } catch (e) {
    console.log("error", e);
  }
};

export const createFacilityIn = (args: ICreateFacilityIn) =>
  prisma.facility.createMany({
    data: {
      name: args.name,
    },
  });

export const getFacilities = () => prisma.facility.findMany();

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
      FacilityToCoWork: {
        createMany: {
          data: args.facilities.map((r) => ({
            facilityId: r,
          })),
        },
      },
    },
  });
  return coWorkCreate;
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
      FacilityToCoWork: {
        deleteMany: [
          {
            coWorkId: args.coWorkId,
          },
        ],
        createMany: {
          data: args.facilities.map((r) => ({
            facilityId: r,
          })),
        },
      },
    },
  });
  return coWorkupdate;
};

export const createTimeOpenClose = async (args: ICreateTimeOpenClose) => {
  const openCoWork = await prisma.open.upsert({
    where: {
      coWorkId: args.coWorkId,
    },
    create: {
      sunOpen: args.open[0],
      monOpen: args.open[1],
      tueOpen: args.open[2],
      wedOpen: args.open[3],
      thursOpen: args.open[4],
      friOpen: args.open[5],
      satOpen: args.open[6],
      coWorkId: args.coWorkId,
    },
    update: {
      sunOpen: args.open[0],
      monOpen: args.open[1],
      tueOpen: args.open[2],
      wedOpen: args.open[3],
      thursOpen: args.open[4],
      friOpen: args.open[5],
      satOpen: args.open[6],
    },
  });

  const closeCoWork = await prisma.close.upsert({
    where: {
      coWorkId: args.coWorkId,
    },
    create: {
      sunClose: args.close[0],
      monClose: args.close[1],
      tueClose: args.close[2],
      wedClose: args.close[3],
      thursClose: args.close[4],
      friClose: args.close[5],
      satClose: args.close[6],
      coWorkId: args.coWorkId,
    },
    update: {
      sunClose: args.close[0],
      monClose: args.close[1],
      tueClose: args.close[2],
      wedClose: args.close[3],
      thursClose: args.close[4],
      friClose: args.close[5],
      satClose: args.close[6],
    },
  });

  const openClose24Hours = await prisma.openClose24Hours.upsert({
    where: {
      coWorkId: args.coWorkId,
    },
    create: {
      sun24hours: args.openClose24hours[0],
      mon24hours: args.openClose24hours[1],
      tue24hours: args.openClose24hours[2],
      wed24hours: args.openClose24hours[3],
      thurs24hours: args.openClose24hours[4],
      fri24hours: args.openClose24hours[5],
      sat24hours: args.openClose24hours[6],
      coWorkId: args.coWorkId,
    },
    update: {
      sun24hours: args.openClose24hours[0],
      mon24hours: args.openClose24hours[1],
      tue24hours: args.openClose24hours[2],
      wed24hours: args.openClose24hours[3],
      thurs24hours: args.openClose24hours[4],
      fri24hours: args.openClose24hours[5],
      sat24hours: args.openClose24hours[6],
    },
  });

  const openCloseBoolean = await prisma.openCloseBoolean.upsert({
    where: {
      coWorkId: args.coWorkId,
    },
    create: {
      sunOnOff: args.openCloseBoolean[0],
      monOnOff: args.openCloseBoolean[1],
      tueOnOff: args.openCloseBoolean[2],
      wedOnOff: args.openCloseBoolean[3],
      thursOnOff: args.openCloseBoolean[4],
      friOnOff: args.openCloseBoolean[5],
      satOnOff: args.openCloseBoolean[6],
      coWorkId: args.coWorkId,
    },
    update: {
      sunOnOff: args.openCloseBoolean[0],
      monOnOff: args.openCloseBoolean[1],
      tueOnOff: args.openCloseBoolean[2],
      wedOnOff: args.openCloseBoolean[3],
      thursOnOff: args.openCloseBoolean[4],
      friOnOff: args.openCloseBoolean[5],
      satOnOff: args.openCloseBoolean[6],
    },
  });
  return [
    { openCloseBoolean: openCloseBoolean },
    { open: openCoWork },
    { close: closeCoWork },
    { openClose24Hours: openClose24Hours },
  ];
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

export const deleteCoWork = (args: IDeleteCoWork) =>
  prisma.coWork.delete({
    where: {
      id: args.coWorkId,
    },
    include: {
      bookRoom: true,
      BranchToRoom: true,
      FacilityToCoWork: true,
      Open: true,
      Close: true,
      OpenClose24Hours: true,
      OpenCloseBoolean: true,
    },
  });

//////////////////////
// LOGIN REGIS PAGE //
//////////////////////
////// INTERNAL //////
export const checkUserInternalPasswordEmail = (
  args: ICheckUserInternalPasswordEmail
) =>
  prisma.userInternal.findUnique({
    where: {
      email: args.email,
    },
    select: {
      id: true,
      email: true,
      password: true,
      name: true,
      tel: true,
    },
  });

export const forgetPasswordUserInternal = async (
  args: IForgetPasswordUserInternal
) => {
  const queryDataCheck = await prisma.userInternal.findUnique({
    where: {
      email: args.email,
    },
  });
  console.log(queryDataCheck);

  const check =
    queryDataCheck?.name === args.name && queryDataCheck?.tel === args.phone;

  if (check) {
    const updateForgetPassword = await prisma.userInternal.update({
      where: {
        email: args.email,
      },
      data: {
        password: await hashPassword(args.password),
      },
    });
    return updateForgetPassword;
  } else {
    return { error: "Name, Email or Phone incorrect!" };
  }
};

////// EXTERNAL //////
export const checkUserExternalPasswordEmail = (
  args: ICheckUserExternalPasswordEmail
) => {
  const loginRes = prisma.userExternal.findUnique({
    where: {
      email: args.email,
    },
    select: {
      email: true,
      password: true,
      name: true,
      tel: true,
      id: true,
    },
  });
  return loginRes;
};

export const forgetPasswordUserExternal = async (
  args: IForgetPasswordUserExternal
) => {
  const queryDataCheck = await prisma.userExternal.findUnique({
    where: {
      email: args.email,
    },
  });
  // console.log(queryDataCheck);

  const check =
    queryDataCheck?.name === args.name && queryDataCheck?.tel === args.phone;

  if (check) {
    const updateForgetPassword = await prisma.userExternal.update({
      where: {
        email: args.email,
      },
      data: {
        password: await hashPassword(args.password),
      },
    });
    return updateForgetPassword;
  } else {
    return { error: "Name, Email or Phone incorrect!" };
  }
};

//////////////////////
// RESERVATION PAGE //
//////////////////////
//get day open on calendar
export const getOpenDay = async (args: { coWorkId: number }) => {
  const getOpen = prisma.openCloseBoolean.findUnique({
    where: {
      coWorkId: args.coWorkId,
    },
  });
  return getOpen;
};

//get time available
export const bookDurationRoom = async (args: IBookDurationRoom) => {
  console.log("args", args);

  const bookRoom = await prisma.bookRoom.findMany({
    where: {
      coWorkId: args.coWorkId,
      startTime: {
        gte: new Date(args.startTime),
        lt: new Date(new Date(args.startTime).getTime() + 24 * 60 * 60 * 1000),
      },
    },
    include: {
      roomRate: {
        include: {
          duration: true,
        },
      },
      cowork: {
        include: {
          Close: true,
          Open: true,
          OpenClose24Hours: true,
        },
      },
    },
  });
  console.log("bookRoom", bookRoom);

  const findDuration = await prisma.roomRate.findMany({
    where: {
      roomId: args.roomId,
    },
    include: {
      duration: true,
    },
  });
  console.log("findDuration", findDuration);

  const getOpen = await prisma.coWork.findUnique({
    where: {
      id: args.coWorkId,
    },
    include: {
      OpenCloseBoolean: true,
      OpenClose24Hours: true,
      Open: true,
      Close: true,
    },
  });
  console.log("getOpen", getOpen);

  const durations = findDuration.map((r) => ({
    roomRateId: r.id,
    duration: r.duration.duration,
  }));

  const filterTimeBooking = bookRoom.map((items) => {
    const userStartTime = new Date(items?.startTime).getHours();
    const duration = items.roomRate.duration.duration;
    console.log("duration", duration);

    const usedTime = [...Array(duration)].map((r, idx) => {
      return userStartTime + idx;
    });
    console.log(usedTime);
    return usedTime;
  });

  const usageTime = [...new Set(filterTimeBooking.flat())];
  console.log("usageTime", usageTime);

  const str24hrs = [
    "sun24hours",
    "mon24hours",
    "tue24hours",
    "wed24hours",
    "thurs24hours",
    "fri24hours",
    "sat24hours",
  ];

  const close = [
    "sunClose",
    "monClose",
    "tueClose",
    "wedClose",
    "thursClose",
    "friClose",
    "satClose",
  ];

  const open = [
    "sunOpen",
    "monOpen",
    "tueOpen",
    "wedOpen",
    "thursOpen",
    "friOpen",
    "satOpen",
  ];

  const openClose24hrs = { ...getOpen?.OpenClose24Hours }[str24hrs[args.day]];
  const openClose24hrs2 = { ...getOpen?.Close }[close[args.day]];
  const openClose24hrs3 = { ...getOpen?.Open }[open[args.day]];

  console.log("openClose24hrs", openClose24hrs);
  console.log("close", openClose24hrs2);
  console.log("open", openClose24hrs3);

  const slotTimeOpen = openClose24hrs
    ? [...Object.keys([...Array(24)])].map((r) => Number(r))
    : [
        ...Object.keys([
          ...Array(Number(openClose24hrs2) - Number(openClose24hrs3)),
        ]),
      ].map((r) => Number(r) + Number(openClose24hrs3));
  console.log("slotTimeOpen", slotTimeOpen);

  const availableTime = slotTimeOpen
    .filter((r) => {
      const findTime = usageTime.map((items) => items === r);
      console.log(findTime);

      return findTime.every((r) => !r);
    })
    .map((r) => Number(r));

  console.log("availableTime", availableTime);
  return {
    slotTime: availableTime,
    open: openClose24hrs3,
    close: openClose24hrs2,
    duration: durations,
  };
};

//vertify code //bookingExternal
export const getVerifyCodeByUserConfirmBooking = async (
  args: IGetUserConfirmBooking
) => {
  const verifyCode = `KOWING${args.userExId}${args.roomRateId}${args.roomId}${
    new Date(args.startTime).getTime() / 1000
  }`;

  const getBookData = await prisma.bookRoom.create({
    data: {
      startTime: new Date(args.startTime),
      cowork: {
        connect: {
          id: args.coWorkId,
        },
      },
      status: "PENDING",
      roomRate: {
        connect: {
          id: args.roomRateId,
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
      price: args.price,
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

///////////////////////
// PARTNER MAIN PAGE //
///////////////////////
export const getBookRoomByPartnerId = async (args: { userId: number }) => {
  const getBookRoom = await prisma.userInternal.findUnique({
    where: {
      id: args.userId,
    },
    include: {
      coWork: {
        include: {
          bookRoom: {
            where: {},
            include: {
              roomRate: {
                include: {
                  room: true,
                  duration: true,
                },
              },
              UserExternal: {
                select: {
                  name: true,
                },
              },
              vertifyCode: true,
            },
            orderBy: {
              updateAt: "desc",
            },
          },
        },
      },
    },
  });
  const newGetBookRoom = { ...getBookRoom };
  delete newGetBookRoom.password;

  return newGetBookRoom;
};

export const getBookRoomByPartnerIdAndStatus = async (args: {
  userId: number;
  status: string;
  orderBy: string;
  inDeCrease: string;
}) => {
  const getBookRoom = await prisma.userInternal.findUnique({
    where: {
      id: args.userId,
    },
    include: {
      coWork: {
        include: {
          bookRoom: {
            where: { status: args.status },
            include: {
              roomRate: {
                include: {
                  room: true,
                  duration: true,
                },
              },
              UserExternal: {
                select: {
                  name: true,
                },
              },
              vertifyCode: true,
            },
            orderBy: {
              [args.orderBy]: args.inDeCrease,
            },
          },
        },
      },
    },
  });
  // const newGetBookRoom = { ...getBookRoom };
  // delete newGetBookRoom.password;

  // return newGetBookRoom;
  return getBookRoom;
};

export const updateStatus = async (args: {
  bookRoomId: number;
  newStatus: string;
}) => {
  return prisma.bookRoom.update({
    where: {
      id: args.bookRoomId,
    },
    data: {
      status: args.newStatus,
    },
  });
};

export const showtheRoomBookedbyUserExternal = async (args: {
  userId: number;
}) =>
  prisma.bookRoom.findMany({
    where: {
      userExternalId: args.userId,
    },
    include: {
      roomRate: {
        include: {
          duration: true,
          room: true,
        },
      },
      vertifyCode: true,
      cowork: true,
    },
    orderBy: {
      updateAt: "desc",
    },
  });
