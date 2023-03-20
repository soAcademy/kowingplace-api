/*
  Warnings:

  - You are about to drop the column `bookRoomId` on the `UserExternal` table. All the data in the column will be lost.
  - You are about to drop the column `vertifyBookingCodeId` on the `UserExternal` table. All the data in the column will be lost.
  - Added the required column `userExternalId` to the `BookRoom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vertifyBookingCodeId` to the `BookRoom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userExternalId` to the `VertifyBookingCode` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserExternal" DROP CONSTRAINT "UserExternal_bookRoomId_fkey";

-- DropForeignKey
ALTER TABLE "UserExternal" DROP CONSTRAINT "UserExternal_vertifyBookingCodeId_fkey";

-- AlterTable
ALTER TABLE "BookRoom" ADD COLUMN     "userExternalId" INTEGER NOT NULL,
ADD COLUMN     "vertifyBookingCodeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserExternal" DROP COLUMN "bookRoomId",
DROP COLUMN "vertifyBookingCodeId";

-- AlterTable
ALTER TABLE "VertifyBookingCode" ADD COLUMN     "userExternalId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_userExternalId_fkey" FOREIGN KEY ("userExternalId") REFERENCES "UserExternal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_vertifyBookingCodeId_fkey" FOREIGN KEY ("vertifyBookingCodeId") REFERENCES "VertifyBookingCode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VertifyBookingCode" ADD CONSTRAINT "VertifyBookingCode_userExternalId_fkey" FOREIGN KEY ("userExternalId") REFERENCES "UserExternal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
