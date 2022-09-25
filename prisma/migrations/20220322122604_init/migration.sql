-- CreateTable
CREATE TABLE "Location" (
    "id" INTEGER NOT NULL,
    "lat" DECIMAL(65,30) NOT NULL,
    "lng" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);
