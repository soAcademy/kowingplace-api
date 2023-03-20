/*
  Warnings:

  - You are about to drop the column `duration` on the `RoomRate` table. All the data in the column will be lost.
  - Added the required column `durationCategoryId` to the `RoomRate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomId` to the `RoomRate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoomRate" DROP COLUMN "duration",
ADD COLUMN     "durationCategoryId" INTEGER NOT NULL,
ADD COLUMN     "roomId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "durationCategory" (
    "id" SERIAL NOT NULL,
    "duration" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "durationCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoomRate" ADD CONSTRAINT "RoomRate_durationCategoryId_fkey" FOREIGN KEY ("durationCategoryId") REFERENCES "durationCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomRate" ADD CONSTRAINT "RoomRate_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
