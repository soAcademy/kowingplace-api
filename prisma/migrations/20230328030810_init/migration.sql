/*
  Warnings:

  - A unique constraint covering the columns `[duration]` on the table `durationCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "durationCategory_duration_key" ON "durationCategory"("duration");
