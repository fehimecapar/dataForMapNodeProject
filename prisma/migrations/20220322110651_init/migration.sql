/*
  Warnings:

  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `lat` to the `alldata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `alldata` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_alldataId_fkey";

-- AlterTable
ALTER TABLE "alldata" ADD COLUMN     "lat" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "lng" DECIMAL(65,30) NOT NULL;

-- DropTable
DROP TABLE "Location";
