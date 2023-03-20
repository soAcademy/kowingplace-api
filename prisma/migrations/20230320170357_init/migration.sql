/*
  Warnings:

  - You are about to drop the `FacilityToRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FacilityToRoom" DROP CONSTRAINT "FacilityToRoom_facilityId_fkey";

-- DropForeignKey
ALTER TABLE "FacilityToRoom" DROP CONSTRAINT "FacilityToRoom_roomId_fkey";

-- DropTable
DROP TABLE "FacilityToRoom";

-- CreateTable
CREATE TABLE "FacilityToCoWork" (
    "id" SERIAL NOT NULL,
    "coWorkId" INTEGER NOT NULL,
    "facilityId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacilityToCoWork_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FacilityToCoWork" ADD CONSTRAINT "FacilityToCoWork_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityToCoWork" ADD CONSTRAINT "FacilityToCoWork_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
