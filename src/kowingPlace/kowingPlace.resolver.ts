import { date } from "fp-ts";
import { PrismaClient } from "../../prisma/client";
import {
  ICreateUserExternal,
  IFilterPrice,
  IGetCoWorkUserChoose,
  IGetUserConfirmBooking,
} from "./kowingPlace.interface";
export const prisma = new PrismaClient();

//############################################
//                 External
//############################################
export const createUserExternal = (args: ICreateUserExternal) =>
  prisma.userExternal.create({
    data: {
      name: args.name,
      email: args.email,
      tel: args.tel,
      password: args.password,
    },
  });
//------- page1 --------

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
//let p'mac Math random at frontend 🙏🏻

export const filterPrice = (args: IFilterPrice) =>
  prisma.roomRate.findMany({
    include: {
      room: true,
    },
  });

//filter price/day
export const getCoWorkUserChoose = (args: IGetCoWorkUserChoose) =>
  prisma.coWork.findUnique({
    where: {
      id: args.id,
    },
    include: {
      userInternal: true,
    },
  });

//เส้น booking
//ห้องประชุมId
//เวลาที่จะมา
//เวลาที่จะใช้งาน
//ราคา

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

//############################################
//                 Internal
//############################################

//--------- page 1 ----------
export const createUserInternal = (args: {
  name: string;
  email: string;
  tel: number;
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
//เส้นข้อมูลการ Manage ห้องทั้งหมด
//เส้น save ข้อมูล (Create & Update ในเส้นเดียวกัน)
