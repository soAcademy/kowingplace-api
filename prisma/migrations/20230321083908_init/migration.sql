/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserExternal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `UserInternal` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserExternal_email_key" ON "UserExternal"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserInternal_email_key" ON "UserInternal"("email");
