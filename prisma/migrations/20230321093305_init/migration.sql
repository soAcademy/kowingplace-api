/*
  Warnings:

  - You are about to drop the column `userInternalId` on the `CoWork` table. All the data in the column will be lost.
  - Added the required column `coWorkId` to the `UserInternal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CoWork" DROP CONSTRAINT "CoWork_userInternalId_fkey";

-- AlterTable
ALTER TABLE "CoWork" DROP COLUMN "userInternalId";

-- AlterTable
ALTER TABLE "UserInternal" ADD COLUMN     "coWorkId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserInternal" ADD CONSTRAINT "UserInternal_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
