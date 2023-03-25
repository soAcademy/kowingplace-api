/*
  Warnings:

  - You are about to drop the column `isOpen24Hours` on the `OpenClose` table. All the data in the column will be lost.
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

*/
-- AlterTable
ALTER TABLE "OpenClose" DROP COLUMN "isOpen24Hours",
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
ADD COLUMN     "isOpenWed" BOOLEAN NOT NULL;
