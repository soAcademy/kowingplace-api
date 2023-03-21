/*
  Warnings:

  - A unique constraint covering the columns `[userInternalId]` on the table `CoWork` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CoWork_userInternalId_key" ON "CoWork"("userInternalId");
