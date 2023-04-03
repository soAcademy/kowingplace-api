/*
  Warnings:

  - You are about to drop the column `active` on the `RoomRate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BookRoom" ADD COLUMN     "price" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "RoomRate" DROP COLUMN "active";
