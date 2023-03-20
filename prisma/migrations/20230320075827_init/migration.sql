/*
  Warnings:

  - You are about to drop the column `branchId` on the `BranchToRoom` table. All the data in the column will be lost.
  - Added the required column `coWorkId` to the `BranchToRoom` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BranchToRoom" DROP CONSTRAINT "BranchToRoom_branchId_fkey";

-- AlterTable
ALTER TABLE "BranchToRoom" DROP COLUMN "branchId",
ADD COLUMN     "coWorkId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BranchToRoom" ADD CONSTRAINT "BranchToRoom_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
