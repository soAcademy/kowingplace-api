/*
  Warnings:

  - You are about to drop the column `branchId` on the `OpenClose` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[coWorkId]` on the table `OpenClose` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coWorkId` to the `OpenClose` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OpenClose" DROP CONSTRAINT "OpenClose_branchId_fkey";

-- AlterTable
ALTER TABLE "OpenClose" DROP COLUMN "branchId",
ADD COLUMN     "coWorkId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OpenClose_coWorkId_key" ON "OpenClose"("coWorkId");

-- AddForeignKey
ALTER TABLE "OpenClose" ADD CONSTRAINT "OpenClose_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
