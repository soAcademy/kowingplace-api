/*
  Warnings:

  - A unique constraint covering the columns `[duration]` on the table `durationCategory` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `duration` on the `durationCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "RoomRate" DROP CONSTRAINT "RoomRate_roomId_fkey";

-- AlterTable
ALTER TABLE "RoomRate" ALTER COLUMN "roomId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "durationCategory" DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "durationCategory_duration_key" ON "durationCategory"("duration");

-- AddForeignKey
ALTER TABLE "RoomRate" ADD CONSTRAINT "RoomRate_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
