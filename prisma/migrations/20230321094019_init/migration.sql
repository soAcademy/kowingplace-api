-- DropForeignKey
ALTER TABLE "UserInternal" DROP CONSTRAINT "UserInternal_coWorkId_fkey";

-- AlterTable
ALTER TABLE "CoWork" ADD COLUMN     "userInternalId" INTEGER;

-- AddForeignKey
ALTER TABLE "CoWork" ADD CONSTRAINT "CoWork_userInternalId_fkey" FOREIGN KEY ("userInternalId") REFERENCES "UserInternal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
