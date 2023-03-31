/*
  Warnings:

  - You are about to drop the column `branchToRoomId` on the `BookRoom` table. All the data in the column will be lost.
  - You are about to drop the column `coWorkId` on the `BookRoom` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookRoom" DROP CONSTRAINT "BookRoom_branchToRoomId_fkey";

-- DropForeignKey
ALTER TABLE "BookRoom" DROP CONSTRAINT "BookRoom_coWorkId_fkey";

-- AlterTable
ALTER TABLE "BookRoom" DROP COLUMN "branchToRoomId",
DROP COLUMN "coWorkId",
ADD COLUMN     "roomId" INTEGER;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
