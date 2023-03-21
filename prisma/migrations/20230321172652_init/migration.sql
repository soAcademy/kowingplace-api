/*
  Warnings:

  - You are about to drop the column `branchToRoomId` on the `BookRoom` table. All the data in the column will be lost.
  - Added the required column `coWorkId` to the `BookRoom` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookRoom" DROP CONSTRAINT "BookRoom_branchToRoomId_fkey";

-- AlterTable
ALTER TABLE "BookRoom" DROP COLUMN "branchToRoomId",
ADD COLUMN     "coWorkId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
