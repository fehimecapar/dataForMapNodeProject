-- CreateTable
CREATE TABLE "towns" (
    "id" INTEGER NOT NULL,
    "il_adi" TEXT NOT NULL,
    "il_id" INTEGER NOT NULL,
    "ilce_adi" TEXT NOT NULL,
    "ilce_id" INTEGER NOT NULL,
    "mahalle_adi" TEXT NOT NULL,

    CONSTRAINT "towns_pkey" PRIMARY KEY ("id")
);
