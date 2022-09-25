-- CreateTable
CREATE TABLE "towns" (
    "id" INTEGER NOT NULL,
    "il_adi" TEXT NOT NULL,
    "il_id" INTEGER NOT NULL,
    "ilce_adi" TEXT NOT NULL,
    "ilce_id" INTEGER NOT NULL,
    "mahalle_adi" TEXT NOT NULL,
    "last_modified" TEXT NOT NULL,

    CONSTRAINT "towns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" INTEGER NOT NULL,
    "lat" DECIMAL(65,30) NOT NULL,
    "lng" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alldata" (
    "id" INTEGER NOT NULL,
    "il_adi" TEXT NOT NULL,
    "il_id" INTEGER NOT NULL,
    "ilce_adi" TEXT NOT NULL,
    "ilce_id" INTEGER NOT NULL,
    "mahalle_adi" TEXT NOT NULL,
    "lat" DECIMAL(65,30) NOT NULL,
    "lng" DECIMAL(65,30) NOT NULL,
    "last_modified" TEXT NOT NULL,

    CONSTRAINT "alldata_pkey" PRIMARY KEY ("id")
);
