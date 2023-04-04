/*
  Warnings:

  - A unique constraint covering the columns `[roomId]` on the table `BranchToRoom` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "BranchToRoom" DROP CONSTRAINT "BranchToRoom_roomId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "BranchToRoom_roomId_key" ON "BranchToRoom"("roomId");

-- AddForeignKey
ALTER TABLE "BranchToRoom" ADD CONSTRAINT "BranchToRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
