import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import {
  checkUserExternalPasswordEmail,
  checkUserInternalPasswordEmail,
} from "./kowingPlace.resolver";
import {
  ILoginUserExternal,
  ILoginUserInternal,
} from "./kowingPlace.interface";

const generateToken = (email: string, secretKey: string): string => {
  const payload = {
    email: email,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: "30d" });
  //const token = jwt.sign(payload, secretKey, { expiresIn: 15 });
  return token;
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const verifyPassWord = async (password: string, hashedPassword: string) => {
  //เอา password ที่ยังไม่ได้ hash กับ passwordHash มาเทียบกัน

  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const loginUserExternal = async (args: ILoginUserExternal) => {
  try {
    const checkEmail = await checkUserExternalPasswordEmail({
      email: args.email,
    });
    if (checkEmail === null) {
      return Promise.reject({ message: "email not found", status: 404 });
    }
    const checkPassword = await verifyPassWord(
      args.password,
      checkEmail.password as string
    );
    if (checkPassword === false) {
      return Promise.reject({ message: "Wrong password", status: 404 });
    }
    const genToken = generateToken(
      args.email,
      process.env.SECRET_KEY as string
    );

    console.log(genToken);
    const userData = {
      email: checkEmail.email,
      name: checkEmail.name,
      tel: checkEmail.tel,
      userId: checkEmail.id,
      role: "external",
    };
    console.log("userData", userData);

    return { token: genToken, userData: userData };
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const loginUserInternal = async (args: ILoginUserInternal) => {
  try {
    const checkEmail = await checkUserInternalPasswordEmail({
      email: args.email,
    });
    if (checkEmail === null) {
      return Promise.reject({ message: "email not found", status: 404 });
    }
    const checkPassword = await verifyPassWord(
      args.password,
      checkEmail.password as string
    );
    if (checkPassword === false) {
      return Promise.reject({ message: "Wrong password", status: 404 });
    }
    const genToken = generateToken(
      args.email,
      process.env.SECRET_KEY as string
    );

    return { token: genToken };
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
