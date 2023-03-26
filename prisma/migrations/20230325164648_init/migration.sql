/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `LoginExternal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `LoginInternal` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LoginExternal_token_key" ON "LoginExternal"("token");

-- CreateIndex
CREATE UNIQUE INDEX "LoginInternal_token_key" ON "LoginInternal"("token");
