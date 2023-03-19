/*
  Warnings:

  - Added the required column `bookRoomId` to the `UserExternal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserExternal" ADD COLUMN     "bookRoomId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserExternal" ADD CONSTRAINT "UserExternal_bookRoomId_fkey" FOREIGN KEY ("bookRoomId") REFERENCES "BookRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
