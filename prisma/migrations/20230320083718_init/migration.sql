/*
  Warnings:

  - Added the required column `verifyCode` to the `VertifyBookingCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VertifyBookingCode" ADD COLUMN     "verifyCode" TEXT NOT NULL;
