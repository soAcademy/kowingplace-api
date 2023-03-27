/*
  Warnings:

  - You are about to drop the `LoginExternal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoginInternal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LoginExternal" DROP CONSTRAINT "LoginExternal_userExternalId_fkey";

-- DropForeignKey
ALTER TABLE "LoginInternal" DROP CONSTRAINT "LoginInternal_userInternalId_fkey";

-- DropTable
DROP TABLE "LoginExternal";

-- DropTable
DROP TABLE "LoginInternal";
