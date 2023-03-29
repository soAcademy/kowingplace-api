/*
  Warnings:

  - Added the required column `branchToRoomId` to the `BookRoom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookRoom" ADD COLUMN     "branchToRoomId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_branchToRoomId_fkey" FOREIGN KEY ("branchToRoomId") REFERENCES "BranchToRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
