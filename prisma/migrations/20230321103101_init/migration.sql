/*
  Warnings:

  - You are about to drop the column `coWorkId` on the `UserInternal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserInternal" DROP CONSTRAINT "UserInternal_coWorkId_fkey";

-- DropIndex
DROP INDEX "UserInternal_coWorkId_key";

-- AlterTable
ALTER TABLE "CoWork" ADD COLUMN     "userInternalId" INTEGER;

-- AlterTable
ALTER TABLE "UserInternal" DROP COLUMN "coWorkId";

-- AddForeignKey
ALTER TABLE "CoWork" ADD CONSTRAINT "CoWork_userInternalId_fkey" FOREIGN KEY ("userInternalId") REFERENCES "UserInternal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
