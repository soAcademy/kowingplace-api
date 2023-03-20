/*
  Warnings:

  - Added the required column `vertifyBookingCodeId` to the `UserExternal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserExternal" ADD COLUMN     "vertifyBookingCodeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "VertifyBookingCode" (
    "id" SERIAL NOT NULL,
    "bookdate" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VertifyBookingCode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserExternal" ADD CONSTRAINT "UserExternal_vertifyBookingCodeId_fkey" FOREIGN KEY ("vertifyBookingCodeId") REFERENCES "VertifyBookingCode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
