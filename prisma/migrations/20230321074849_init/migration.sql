-- DropForeignKey
ALTER TABLE "durationCategory" DROP CONSTRAINT "durationCategory_openCloseId_fkey";

-- AlterTable
ALTER TABLE "durationCategory" ALTER COLUMN "openCloseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "durationCategory" ADD CONSTRAINT "durationCategory_openCloseId_fkey" FOREIGN KEY ("openCloseId") REFERENCES "OpenClose"("id") ON DELETE SET NULL ON UPDATE CASCADE;
