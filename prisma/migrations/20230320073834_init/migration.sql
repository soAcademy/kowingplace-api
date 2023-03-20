-- DropForeignKey
ALTER TABLE "UserExternal" DROP CONSTRAINT "UserExternal_bookRoomId_fkey";

-- AlterTable
ALTER TABLE "UserExternal" ALTER COLUMN "bookRoomId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserExternal" ADD CONSTRAINT "UserExternal_bookRoomId_fkey" FOREIGN KEY ("bookRoomId") REFERENCES "BookRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
