/*
  Warnings:

  - You are about to drop the `Branch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_userInternalId_fkey";

-- DropForeignKey
ALTER TABLE "BranchToRoom" DROP CONSTRAINT "BranchToRoom_branchId_fkey";

-- DropForeignKey
ALTER TABLE "OpenClose" DROP CONSTRAINT "OpenClose_branchId_fkey";

-- DropTable
DROP TABLE "Branch";

-- CreateTable
CREATE TABLE "CoWork" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "picture" TEXT NOT NULL,
    "userInternalId" INTEGER NOT NULL,

    CONSTRAINT "CoWork_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CoWork" ADD CONSTRAINT "CoWork_userInternalId_fkey" FOREIGN KEY ("userInternalId") REFERENCES "UserInternal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchToRoom" ADD CONSTRAINT "BranchToRoom_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenClose" ADD CONSTRAINT "OpenClose_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "CoWork"("id") ON DELETE SET NULL ON UPDATE CASCADE;
