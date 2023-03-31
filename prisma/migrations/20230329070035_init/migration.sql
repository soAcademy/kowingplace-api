/*
  Warnings:

  - You are about to drop the column `roomId` on the `BookRoom` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookRoom" DROP CONSTRAINT "BookRoom_roomId_fkey";

-- AlterTable
ALTER TABLE "BookRoom" DROP COLUMN "roomId",
ADD COLUMN     "branchToRoomId" INTEGER,
ADD COLUMN     "coWorkId" INTEGER;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_branchToRoomId_fkey" FOREIGN KEY ("branchToRoomId") REFERENCES "BranchToRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
