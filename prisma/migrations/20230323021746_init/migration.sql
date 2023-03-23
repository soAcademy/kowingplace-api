/*
  Warnings:

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
  - Added the required column `isOpen24Hours` to the `OpenClose` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OpenClose" DROP COLUMN "isOpen24hoursFri",
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
ADD COLUMN     "isOpen24Hours" BOOLEAN NOT NULL;
