import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import {
  checkUserExternalPasswordEmail,
  checkUserInternalPasswordEmail,
  upsertExternalToken,
  upsertInternalToken,
} from "./kowingPlace.resolver";

const generateToken = (
  email: string,
  secretKey: string,
  expirationTime: number
): string => {
  const payload = {
    email: email,
    exp: Math.floor(Date.now() / 1000) + expirationTime,
  };
  const token = jwt.sign(payload, secretKey);
  return token;
};

export const verifyLoginToken = (token: string, secretKey: string) => {
  try {
    const payload = jwt.verify(token, secretKey) as object;
    return payload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.log("Token has expired");
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.log("Invalid token");
    }
  }
  return null;
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const verifyPassWord = async (password: string, hashedPassword: string) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const loginUserExternal = async (args: {
  email: string;
  password: string;
}) => {
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
      process.env.SECRET_KEY as string,
      Number(process.env.EXPIRATION_TIME)
    );
    await upsertExternalToken({ email: args.email, token: genToken });
    return genToken;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const loginUserInternal = async (args: {
  email: string;
  password: string;
}) => {
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
      process.env.SECRET_KEY as string,
      Number(process.env.EXPIRATION_TIME)
    );
    await upsertInternalToken({ email: args.email, token: genToken });
    return genToken;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
