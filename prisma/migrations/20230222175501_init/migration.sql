/*
  Warnings:

  - You are about to drop the column `comments` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `coinflips` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileViews` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExtendedProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToPost` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ExtendedProfile` DROP FOREIGN KEY `ExtendedProfile_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `_CategoryToPost` DROP FOREIGN KEY `_CategoryToPost_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CategoryToPost` DROP FOREIGN KEY `_CategoryToPost_B_fkey`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `comments`,
    DROP COLUMN `likes`,
    DROP COLUMN `views`,
    ADD COLUMN `content` VARCHAR(191) NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `viewCount` INTEGER NULL DEFAULT 0,
    MODIFY `published` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `authorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `coinflips`,
    DROP COLUMN `profileViews`;

-- DropTable
DROP TABLE `Category`;

-- DropTable
DROP TABLE `ExtendedProfile`;

-- DropTable
DROP TABLE `_CategoryToPost`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
