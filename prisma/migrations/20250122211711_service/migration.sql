/*
  Warnings:

  - You are about to drop the column `redirectURL` on the `Service` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Service_redirectURL_key";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "redirectURL";
