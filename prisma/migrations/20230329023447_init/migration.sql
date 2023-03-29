-- DropForeignKey
ALTER TABLE "BookRoom" DROP CONSTRAINT "BookRoom_branchToRoomId_fkey";

-- AlterTable
ALTER TABLE "BookRoom" ALTER COLUMN "branchToRoomId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_branchToRoomId_fkey" FOREIGN KEY ("branchToRoomId") REFERENCES "BranchToRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
