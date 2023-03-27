-- CreateTable
CREATE TABLE "OpenCloseBoolean" (
    "id" SERIAL NOT NULL,
    "monOnOff" BOOLEAN NOT NULL,
    "tueOnOff" BOOLEAN NOT NULL,
    "wedOnOff" BOOLEAN NOT NULL,
    "thursOnOff" BOOLEAN NOT NULL,
    "friOnOff" BOOLEAN NOT NULL,
    "satOnOff" BOOLEAN NOT NULL,
    "sunOnOff" BOOLEAN NOT NULL,
    "coWorkId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OpenCloseBoolean_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OpenCloseBoolean_coWorkId_key" ON "OpenCloseBoolean"("coWorkId");

-- AddForeignKey
ALTER TABLE "OpenCloseBoolean" ADD CONSTRAINT "OpenCloseBoolean_coWorkId_fkey" FOREIGN KEY ("coWorkId") REFERENCES "CoWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
