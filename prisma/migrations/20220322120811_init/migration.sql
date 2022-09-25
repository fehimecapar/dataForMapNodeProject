/*
  Warnings:

  - You are about to drop the column `cityName` on the `alldata` table. All the data in the column will be lost.
  - You are about to drop the column `districtName` on the `alldata` table. All the data in the column will be lost.
  - You are about to drop the column `mahalle_id` on the `alldata` table. All the data in the column will be lost.
  - Added the required column `il_adi` to the `alldata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `il_id` to the `alldata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ilce_adi` to the `alldata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alldata" DROP COLUMN "cityName",
DROP COLUMN "districtName",
DROP COLUMN "mahalle_id",
ADD COLUMN     "il_adi" TEXT NOT NULL,
ADD COLUMN     "il_id" INTEGER NOT NULL,
ADD COLUMN     "ilce_adi" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "alldata_id_seq";
