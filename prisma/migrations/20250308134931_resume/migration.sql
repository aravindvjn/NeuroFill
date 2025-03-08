-- CreateTable
CREATE TABLE "CustomField" (
    "id" TEXT NOT NULL,
    "heading" TEXT,
    "subheading" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,

    CONSTRAINT "CustomField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomField" ADD CONSTRAINT "CustomField_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
