-- CreateTable
CREATE TABLE "alldata" (
    "id" INTEGER NOT NULL,
    "il_adi" TEXT NOT NULL,
    "last_modified" TEXT NOT NULL,
    "il_id" INTEGER NOT NULL,
    "ilce_adi" TEXT NOT NULL,
    "ilce_id" INTEGER NOT NULL,
    "mahalle_adi" TEXT NOT NULL,
    "lat" DECIMAL(65,30) NOT NULL,
    "lng" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "alldata_pkey" PRIMARY KEY ("id")
);
