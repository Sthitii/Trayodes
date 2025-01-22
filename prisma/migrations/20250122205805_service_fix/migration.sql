/*
  Warnings:

  - A unique constraint covering the columns `[redirectURL]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "redirectURL" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Service_redirectURL_key" ON "Service"("redirectURL");
