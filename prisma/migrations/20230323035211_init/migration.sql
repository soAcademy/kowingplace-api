/*
  Warnings:

  - You are about to drop the column `closeTimeFri` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `closeTimeMon` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `closeTimeSat` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `closeTimeSun` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `closeTimeThurs` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `closeTimeTue` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `closeTimeWed` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpen24hoursFri` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpen24hoursMon` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpen24hoursSat` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpen24hoursSun` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpen24hoursThurs` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpen24hoursTue` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpen24hoursWed` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpenFri` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpenMon` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpenSat` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpenSun` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpenThurs` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpenTue` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `isOpenWed` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `openTimeFri` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `openTimeMon` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `openTimeSat` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `openTimeSun` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `openTimeThurs` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `openTimeTue` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `openTimeWed` on the `OpenClose` table. All the data in the column will be lost.
  - Added the required column `fri` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mon` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sat` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sun` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thurs` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tue` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wed` to the `OpenClose` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OpenClose" DROP COLUMN "closeTimeFri",
DROP COLUMN "closeTimeMon",
DROP COLUMN "closeTimeSat",
DROP COLUMN "closeTimeSun",
DROP COLUMN "closeTimeThurs",
DROP COLUMN "closeTimeTue",
DROP COLUMN "closeTimeWed",
DROP COLUMN "isOpen24hoursFri",
DROP COLUMN "isOpen24hoursMon",
DROP COLUMN "isOpen24hoursSat",
DROP COLUMN "isOpen24hoursSun",
DROP COLUMN "isOpen24hoursThurs",
DROP COLUMN "isOpen24hoursTue",
DROP COLUMN "isOpen24hoursWed",
DROP COLUMN "isOpenFri",
DROP COLUMN "isOpenMon",
DROP COLUMN "isOpenSat",
DROP COLUMN "isOpenSun",
DROP COLUMN "isOpenThurs",
DROP COLUMN "isOpenTue",
DROP COLUMN "isOpenWed",
DROP COLUMN "openTimeFri",
DROP COLUMN "openTimeMon",
DROP COLUMN "openTimeSat",
DROP COLUMN "openTimeSun",
DROP COLUMN "openTimeThurs",
DROP COLUMN "openTimeTue",
DROP COLUMN "openTimeWed",
ADD COLUMN     "fri" JSONB NOT NULL,
ADD COLUMN     "mon" JSONB NOT NULL,
ADD COLUMN     "sat" JSONB NOT NULL,
ADD COLUMN     "sun" JSONB NOT NULL,
ADD COLUMN     "thurs" JSONB NOT NULL,
ADD COLUMN     "tue" JSONB NOT NULL,
ADD COLUMN     "wed" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "durationCategory" ALTER COLUMN "duration" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Open" (
    "id" SERIAL NOT NULL,
    "mon" INTEGER NOT NULL,
    "tue" INTEGER NOT NULL,
    "wed" INTEGER NOT NULL,
    "thurs" INTEGER NOT NULL,
    "fri" INTEGER NOT NULL,
    "sat" INTEGER NOT NULL,
    "sun" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Open_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Close" (
    "id" SERIAL NOT NULL,
    "mon" INTEGER NOT NULL,
    "tue" INTEGER NOT NULL,
    "wed" INTEGER NOT NULL,
    "thurs" INTEGER NOT NULL,
    "fri" INTEGER NOT NULL,
    "sat" INTEGER NOT NULL,
    "sun" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Close_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpenClose24Hours" (
    "id" SERIAL NOT NULL,
    "mon" BOOLEAN NOT NULL,
    "tue" BOOLEAN NOT NULL,
    "wed" BOOLEAN NOT NULL,
    "thurs" BOOLEAN NOT NULL,
    "fri" BOOLEAN NOT NULL,
    "sat" BOOLEAN NOT NULL,
    "sun" BOOLEAN NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OpenClose24Hours_pkey" PRIMARY KEY ("id")
);
