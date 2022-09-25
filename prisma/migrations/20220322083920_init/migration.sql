-- CreateTable
CREATE TABLE "alldata" (
    "id" SERIAL NOT NULL,
    "cityName" TEXT,
    "districtName" TEXT,
    "townName" TEXT,

    CONSTRAINT "alldata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "lat" TEXT,
    "lng" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);
