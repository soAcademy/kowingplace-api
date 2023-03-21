/*
  Warnings:

  - You are about to drop the column `userInternalId` on the `CoWork` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[coWorkId]` on the table `UserInternal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coWorkId` to the `UserInternal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CoWork" DROP CONSTRAINT "CoWork_userInternalId_fkey";

-- DropIndex
DROP INDEX "CoWork_userInternalId_key";

-- AlterTable
ALTER TABLE "CoWork" DROP COLUMN "userInternalId";

-- AlterTable
ALTER TABLE "UserInternal" ADD COLUMN     "coWorkId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserInternal_coWorkId_key" ON "UserInternal"("coWorkId");

-- AddForeignKey
ALTER TABLE "UserInternal" ADD CONSTRAINT "UserInternal_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
