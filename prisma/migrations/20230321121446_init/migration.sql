/*
  Warnings:

  - A unique constraint covering the columns `[durationCategoryId]` on the table `RoomRate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RoomRate_durationCategoryId_key" ON "RoomRate"("durationCategoryId");
