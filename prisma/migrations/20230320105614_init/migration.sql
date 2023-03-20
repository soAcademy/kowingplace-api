/*
  Warnings:

  - You are about to drop the column `roomId` on the `RoomRate` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `RoomRate` table. All the data in the column will be lost.
  - Added the required column `duration` to the `RoomRate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RoomRate" DROP CONSTRAINT "RoomRate_roomId_fkey";

-- AlterTable
ALTER TABLE "RoomRate" DROP COLUMN "roomId",
DROP COLUMN "time",
ADD COLUMN     "duration" TEXT NOT NULL;
