/*
  Warnings:

  - You are about to drop the `OpenClose` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[coWorkId]` on the table `Close` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[coWorkId]` on the table `Open` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[coWorkId]` on the table `OpenClose24Hours` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coWorkId` to the `Close` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coWorkId` to the `Open` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coWorkId` to the `OpenClose24Hours` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OpenClose" DROP CONSTRAINT "OpenClose_coWorkId_fkey";

-- DropForeignKey
ALTER TABLE "durationCategory" DROP CONSTRAINT "durationCategory_openCloseId_fkey";

-- AlterTable
ALTER TABLE "Close" ADD COLUMN     "coWorkId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Open" ADD COLUMN     "coWorkId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OpenClose24Hours" ADD COLUMN     "coWorkId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "OpenClose";

-- CreateIndex
CREATE UNIQUE INDEX "Close_coWorkId_key" ON "Close"("coWorkId");

-- CreateIndex
CREATE UNIQUE INDEX "Open_coWorkId_key" ON "Open"("coWorkId");

-- CreateIndex
CREATE UNIQUE INDEX "OpenClose24Hours_coWorkId_key" ON "OpenClose24Hours"("coWorkId");

-- AddForeignKey
ALTER TABLE "Open" ADD CONSTRAINT "Open_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Close" ADD CONSTRAINT "Close_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenClose24Hours" ADD CONSTRAINT "OpenClose24Hours_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
