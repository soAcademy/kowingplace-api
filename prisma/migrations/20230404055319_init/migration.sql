-- DropForeignKey
ALTER TABLE "BranchToRoom" DROP CONSTRAINT "BranchToRoom_roomId_fkey";

-- DropForeignKey
ALTER TABLE "RoomRate" DROP CONSTRAINT "RoomRate_roomId_fkey";

-- AddForeignKey
ALTER TABLE "RoomRate" ADD CONSTRAINT "RoomRate_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchToRoom" ADD CONSTRAINT "BranchToRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
