/*
  Warnings:

  - You are about to drop the column `lat` on the `alldata` table. All the data in the column will be lost.
  - You are about to drop the column `townName` on the `alldata` table. All the data in the column will be lost.
  - Added the required column `ilce_id` to the `alldata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mahalle_adi` to the `alldata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alldata" DROP COLUMN "lat",
DROP COLUMN "townName",
ADD COLUMN     "ilce_id" INTEGER NOT NULL,
ADD COLUMN     "mahalle_adi" TEXT NOT NULL;
