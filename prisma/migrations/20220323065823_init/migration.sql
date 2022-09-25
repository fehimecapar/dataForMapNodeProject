/*
  Warnings:

  - Added the required column `lastModified` to the `towns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "towns" ADD COLUMN     "lastModified" TEXT NOT NULL;
