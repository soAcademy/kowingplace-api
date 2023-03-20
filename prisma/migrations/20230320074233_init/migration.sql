-- DropForeignKey
ALTER TABLE "UserExternal" DROP CONSTRAINT "UserExternal_vertifyBookingCodeId_fkey";

-- AlterTable
ALTER TABLE "UserExternal" ALTER COLUMN "vertifyBookingCodeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserExternal" ADD CONSTRAINT "UserExternal_vertifyBookingCodeId_fkey" FOREIGN KEY ("vertifyBookingCodeId") REFERENCES "VertifyBookingCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
