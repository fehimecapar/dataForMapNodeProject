-- CreateTable
CREATE TABLE "alldata" (
    "id" SERIAL NOT NULL,
    "mahalle_id" INTEGER NOT NULL,
    "cityName" TEXT NOT NULL,
    "districtName" TEXT NOT NULL,
    "townName" TEXT NOT NULL,

    CONSTRAINT "alldata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "mahalle_id" INTEGER NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,
    "alldataId" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_alldataId_fkey" FOREIGN KEY ("alldataId") REFERENCES "alldata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
