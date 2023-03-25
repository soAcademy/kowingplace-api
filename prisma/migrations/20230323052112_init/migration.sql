/*
  Warnings:

  - You are about to drop the column `fri` on the `Close` table. All the data in the column will be lost.
  - You are about to drop the column `mon` on the `Close` table. All the data in the column will be lost.
  - You are about to drop the column `sat` on the `Close` table. All the data in the column will be lost.
  - You are about to drop the column `sun` on the `Close` table. All the data in the column will be lost.
  - You are about to drop the column `thurs` on the `Close` table. All the data in the column will be lost.
  - You are about to drop the column `tue` on the `Close` table. All the data in the column will be lost.
  - You are about to drop the column `wed` on the `Close` table. All the data in the column will be lost.
  - You are about to drop the column `fri` on the `Open` table. All the data in the column will be lost.
  - You are about to drop the column `mon` on the `Open` table. All the data in the column will be lost.
  - You are about to drop the column `sat` on the `Open` table. All the data in the column will be lost.
  - You are about to drop the column `sun` on the `Open` table. All the data in the column will be lost.
  - You are about to drop the column `thurs` on the `Open` table. All the data in the column will be lost.
  - You are about to drop the column `tue` on the `Open` table. All the data in the column will be lost.
  - You are about to drop the column `wed` on the `Open` table. All the data in the column will be lost.
  - You are about to drop the column `fri` on the `OpenClose24Hours` table. All the data in the column will be lost.
  - You are about to drop the column `mon` on the `OpenClose24Hours` table. All the data in the column will be lost.
  - You are about to drop the column `sat` on the `OpenClose24Hours` table. All the data in the column will be lost.
  - You are about to drop the column `sun` on the `OpenClose24Hours` table. All the data in the column will be lost.
  - You are about to drop the column `thurs` on the `OpenClose24Hours` table. All the data in the column will be lost.
  - You are about to drop the column `tue` on the `OpenClose24Hours` table. All the data in the column will be lost.
  - You are about to drop the column `wed` on the `OpenClose24Hours` table. All the data in the column will be lost.
  - Added the required column `friClose` to the `Close` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monClose` to the `Close` table without a default value. This is not possible if the table is not empty.
  - Added the required column `satClose` to the `Close` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sunClose` to the `Close` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thursClose` to the `Close` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tueClose` to the `Close` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wedClose` to the `Close` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friOpen` to the `Open` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monOpen` to the `Open` table without a default value. This is not possible if the table is not empty.
  - Added the required column `satOpen` to the `Open` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sunOpen` to the `Open` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thursOpen` to the `Open` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tueOpen` to the `Open` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wedOpen` to the `Open` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fri24hours` to the `OpenClose24Hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mon24hours` to the `OpenClose24Hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sat24hours` to the `OpenClose24Hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sun24hours` to the `OpenClose24Hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thurs24hours` to the `OpenClose24Hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tue24hours` to the `OpenClose24Hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wed24hours` to the `OpenClose24Hours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Close" DROP COLUMN "fri",
DROP COLUMN "mon",
DROP COLUMN "sat",
DROP COLUMN "sun",
DROP COLUMN "thurs",
DROP COLUMN "tue",
DROP COLUMN "wed",
ADD COLUMN     "friClose" INTEGER NOT NULL,
ADD COLUMN     "monClose" INTEGER NOT NULL,
ADD COLUMN     "satClose" INTEGER NOT NULL,
ADD COLUMN     "sunClose" INTEGER NOT NULL,
ADD COLUMN     "thursClose" INTEGER NOT NULL,
ADD COLUMN     "tueClose" INTEGER NOT NULL,
ADD COLUMN     "wedClose" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Open" DROP COLUMN "fri",
DROP COLUMN "mon",
DROP COLUMN "sat",
DROP COLUMN "sun",
DROP COLUMN "thurs",
DROP COLUMN "tue",
DROP COLUMN "wed",
ADD COLUMN     "friOpen" INTEGER NOT NULL,
ADD COLUMN     "monOpen" INTEGER NOT NULL,
ADD COLUMN     "satOpen" INTEGER NOT NULL,
ADD COLUMN     "sunOpen" INTEGER NOT NULL,
ADD COLUMN     "thursOpen" INTEGER NOT NULL,
ADD COLUMN     "tueOpen" INTEGER NOT NULL,
ADD COLUMN     "wedOpen" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OpenClose24Hours" DROP COLUMN "fri",
DROP COLUMN "mon",
DROP COLUMN "sat",
DROP COLUMN "sun",
DROP COLUMN "thurs",
DROP COLUMN "tue",
DROP COLUMN "wed",
ADD COLUMN     "fri24hours" BOOLEAN NOT NULL,
ADD COLUMN     "mon24hours" BOOLEAN NOT NULL,
ADD COLUMN     "sat24hours" BOOLEAN NOT NULL,
ADD COLUMN     "sun24hours" BOOLEAN NOT NULL,
ADD COLUMN     "thurs24hours" BOOLEAN NOT NULL,
ADD COLUMN     "tue24hours" BOOLEAN NOT NULL,
ADD COLUMN     "wed24hours" BOOLEAN NOT NULL;
