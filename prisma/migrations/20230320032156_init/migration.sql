/*
  Warnings:

  - You are about to drop the column `allDay` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `close` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `day` on the `OpenClose` table. All the data in the column will be lost.
  - You are about to drop the column `open` on the `OpenClose` table. All the data in the column will be lost.
  - Added the required column `closeTimeFri` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closeTimeMon` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closeTimeSat` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closeTimeSun` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closeTimeThurs` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closeTimeTue` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closeTimeWed` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpen24hoursFri` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpen24hoursMon` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpen24hoursSat` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpen24hoursSun` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpen24hoursThurs` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpen24hoursTue` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpen24hoursWed` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpenFri` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpenMon` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpenSat` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpenSun` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpenThurs` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpenTue` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpenWed` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openTimeFri` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openTimeMon` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openTimeSat` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openTimeSun` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openTimeThurs` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openTimeTue` to the `OpenClose` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openTimeWed` to the `OpenClose` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OpenClose" DROP CONSTRAINT "OpenClose_branchId_fkey";

-- AlterTable
ALTER TABLE "OpenClose" DROP COLUMN "allDay",
DROP COLUMN "close",
DROP COLUMN "day",
DROP COLUMN "open",
ADD COLUMN     "closeTimeFri" INTEGER NOT NULL,
ADD COLUMN     "closeTimeMon" INTEGER NOT NULL,
ADD COLUMN     "closeTimeSat" INTEGER NOT NULL,
ADD COLUMN     "closeTimeSun" INTEGER NOT NULL,
ADD COLUMN     "closeTimeThurs" INTEGER NOT NULL,
ADD COLUMN     "closeTimeTue" INTEGER NOT NULL,
ADD COLUMN     "closeTimeWed" INTEGER NOT NULL,
ADD COLUMN     "isOpen24hoursFri" BOOLEAN NOT NULL,
ADD COLUMN     "isOpen24hoursMon" BOOLEAN NOT NULL,
ADD COLUMN     "isOpen24hoursSat" BOOLEAN NOT NULL,
ADD COLUMN     "isOpen24hoursSun" BOOLEAN NOT NULL,
ADD COLUMN     "isOpen24hoursThurs" BOOLEAN NOT NULL,
ADD COLUMN     "isOpen24hoursTue" BOOLEAN NOT NULL,
ADD COLUMN     "isOpen24hoursWed" BOOLEAN NOT NULL,
ADD COLUMN     "isOpenFri" BOOLEAN NOT NULL,
ADD COLUMN     "isOpenMon" BOOLEAN NOT NULL,
ADD COLUMN     "isOpenSat" BOOLEAN NOT NULL,
ADD COLUMN     "isOpenSun" BOOLEAN NOT NULL,
ADD COLUMN     "isOpenThurs" BOOLEAN NOT NULL,
ADD COLUMN     "isOpenTue" BOOLEAN NOT NULL,
ADD COLUMN     "isOpenWed" BOOLEAN NOT NULL,
ADD COLUMN     "openTimeFri" INTEGER NOT NULL,
ADD COLUMN     "openTimeMon" INTEGER NOT NULL,
ADD COLUMN     "openTimeSat" INTEGER NOT NULL,
ADD COLUMN     "openTimeSun" INTEGER NOT NULL,
ADD COLUMN     "openTimeThurs" INTEGER NOT NULL,
ADD COLUMN     "openTimeTue" INTEGER NOT NULL,
ADD COLUMN     "openTimeWed" INTEGER NOT NULL,
ALTER COLUMN "branchId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OpenClose" ADD CONSTRAINT "OpenClose_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
