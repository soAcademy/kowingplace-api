-- DropForeignKey
ALTER TABLE "CoWork" DROP CONSTRAINT "CoWork_userInternalId_fkey";

-- AlterTable
ALTER TABLE "CoWork" ALTER COLUMN "userInternalId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CoWork" ADD CONSTRAINT "CoWork_userInternalId_fkey" FOREIGN KEY ("userInternalId") REFERENCES "UserInternal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
