-- CreateTable
CREATE TABLE "LoginExternal" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userExternalId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoginExternal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginInternal" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userInternalId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoginInternal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoginExternal" ADD CONSTRAINT "LoginExternal_userExternalId_fkey" FOREIGN KEY ("userExternalId") REFERENCES "UserExternal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoginInternal" ADD CONSTRAINT "LoginInternal_userInternalId_fkey" FOREIGN KEY ("userInternalId") REFERENCES "UserInternal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
