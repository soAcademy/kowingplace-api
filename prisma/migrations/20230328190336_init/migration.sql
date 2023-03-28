-- DropForeignKey
ALTER TABLE "BookRoom" DROP CONSTRAINT "BookRoom_coWorkId_fkey";

-- DropForeignKey
ALTER TABLE "BranchToRoom" DROP CONSTRAINT "BranchToRoom_coWorkId_fkey";

-- DropForeignKey
ALTER TABLE "Close" DROP CONSTRAINT "Close_coWorkId_fkey";

-- DropForeignKey
ALTER TABLE "FacilityToCoWork" DROP CONSTRAINT "FacilityToCoWork_coWorkId_fkey";

-- DropForeignKey
ALTER TABLE "Open" DROP CONSTRAINT "Open_coWorkId_fkey";

-- DropForeignKey
ALTER TABLE "OpenClose24Hours" DROP CONSTRAINT "OpenClose24Hours_coWorkId_fkey";

-- DropForeignKey
ALTER TABLE "OpenCloseBoolean" DROP CONSTRAINT "OpenCloseBoolean_coWorkId_fkey";

-- AddForeignKey
ALTER TABLE "FacilityToCoWork" ADD CONSTRAINT "FacilityToCoWork_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchToRoom" ADD CONSTRAINT "BranchToRoom_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Open" ADD CONSTRAINT "Open_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Close" ADD CONSTRAINT "Close_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenClose24Hours" ADD CONSTRAINT "OpenClose24Hours_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenCloseBoolean" ADD CONSTRAINT "OpenCloseBoolean_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;
