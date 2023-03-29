/*
  Warnings:

  - Made the column `coWorkId` on table `BookRoom` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BookRoom" ALTER COLUMN "coWorkId" SET NOT NULL;
