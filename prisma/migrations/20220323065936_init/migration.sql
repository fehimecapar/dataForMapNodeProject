/*
  Warnings:

  - You are about to drop the column `lastModified` on the `towns` table. All the data in the column will be lost.
  - Added the required column `last_modified` to the `towns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "towns" DROP COLUMN "lastModified",
ADD COLUMN     "last_modified" TEXT NOT NULL;
