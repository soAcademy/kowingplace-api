import { date } from "fp-ts";
import { Prisma, PrismaClient } from "../../prisma/client";
import {
  ICreateUserExternal,
  IGetCoWorkUserChoose,
  IGetUserConfirmBooking,
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

export const getCoworkRecomment = async () => {
  const getAllCoWork = await prisma.coWork.findMany({});
};
//let p'mac Math random at frontend

// //filter price/day
// export const filterPrice = () =>
//   prisma.roomRate.findMany({
//     select: {
//       price: true,
//     },
//   });

export const getCoWorkUserChoose = (args: IGetCoWorkUserChoose) =>
  prisma.coWork.findUnique({
    where: {
      id: args.id,
    },
    include: {
      UserInternal: true,
    },
  });

//vertify code
export const getUserConfirmBooking = async (args: IGetUserConfirmBooking) => {
  const verifyCode = `${args.userExId}${args.coWorkId}${args.roomId}`;

  const getBookData = await prisma.bookRoom.create({
    data: {
      startTime: args.startTime,
      branchToRoom: {
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
          bookdate: args.startTime,
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

export const createUserInternal = (args: {
  name: string;
  email: string;
  tel: string;
  password: string;
}) =>
  prisma.userInternal.create({
    data: {
      name: args.name,
      email: args.email,
      tel: args.tel,
      password: args.password,
    },
  });

//เส้นโชว์ ห้องประชุมทั้งหมด / ชื่อผู้ใช้ / booking detail
export const showBookDetailInternal = async () => {
  const bookDetailData = await prisma.bookRoom.findMany({
    select: {
      branchToRoom: {
        select: {
          room: true,
        },
      },
      UserExternal: {
        select: {
          name: true,
        },
      },
      roomRate: {
        select: {
          duration: true,
        },
      },
      startTime: true,
      status: true,
    },
  });
  return bookDetailData;
};

//-------------------------------####------------------------------
export const createRoomInternal = async (args: {
  name: string;
  capacity: number;
  rates: { price: number; duration: number }[];
  coworkId: number;
}) => {
  const createRoom = await prisma.room.create({
    data: {
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
      BranchToRoom: {
        create: [
          {
            coWork: {
              connect: {
                id: args.coworkId,
              },
            },
          },
        ],
      },
    },
  });
  return createRoom;
};

//-------------------------------------------------------------

export const createFacilityIn = (args: { name: string }) =>
  prisma.facility.createMany({
    data: {
      name: args.name,
    },
  });

//-------------------------------------------------------------

export const createCoWorkDetail = async (args: {
  name: string;
  description: string;
  location: string;
  tel: string;
  picture: string;
  userInternalId: number;
}) => {
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

export const updateCoWorkDetail = async (args: {
  name: string;
  description: string;
  location: string;
  tel: string;
  picture: string;
  userInternalId: number;
  coWorkId: number;
}) => {
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

// export const createRoomRate = async (args: {
//   price: number;
//   durationId: number;
//   roomId: number;
// }) => {
//   const createCardRoom = await prisma.roomRate.create({
//     data: {
//       price: args.price,
//       durationCategoryId: args.durationId,
//       room: {
//         connect: {
//           id: args.roomId || undefined,
//         },
//       },
//     },
//     select: {
//       price: true,
//       durationCategoryId: true,
//     },
//   });
//   return createCardRoom;
// };

//-------------------------------------------------------------

// interface IRoom {
//   name: string;
//   capacity: number;
//   price: {
//     durationId: number;
//     price: number;
//     roomRateId?: number;
//     isDeleted: boolean;
//   }[];
//   roomId?: number;
//   coWorkId: number;
//   isDeleted: boolean;
// }
// export const createOrUpdateRoomInternal = async (args: IRoom[]) => {
//   let resultRoom;
//   let resultPrice;
//   for (const roomKey in args) {
//     const room = args[roomKey];
//     resultRoom = await prisma.room.upsert({
//       where: { id: room.roomId },
//       create: {
//         name: room.name,
//         capacity: room.capacity,
//         BranchToRoom: {
//           create: {
//             coWork: {
//               connect: { id: room.coWorkId },
//             },
//           },
//         },
//       },
//       update: {
//         name: room.name,
//         capacity: room.capacity,
//       },
//     });

//     for (const priceKey in room.price) {
//       const price = room.price[priceKey];
//       if (price.isDeleted) {
//         await prisma.roomRate.delete({
//           where: { id: price.roomRateId },
//         });
//         continue;
//       }
//       resultPrice = await prisma.roomRate.upsert({
//         where: { id: price.roomRateId },
//         create: {
//           price: price.price,
//           duration: {
//             connect: { id: price.durationId },
//           },
//           room: { connect: { id: room.roomId } },
//         },
//         update: {
//           price: price.price,
//           duration: {
//             connect: { id: price.durationId },
//           },
//           room: { connect: { id: room.roomId } },
//         },
//       });
//     }
//   }
//   return { room: resultRoom, price: resultPrice };
// };

//-------------------------------------------------------------

// const UserBookRoom ={
//   "nameUser" : "boeing",
//   "จองห้องไหน" : "ห้องประชุม 1",
//   "เวลาที่จะไปใช้บริการ" : "09.00",
//   ""
// }
