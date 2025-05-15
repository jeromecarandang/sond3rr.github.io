-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 09:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`, `image`) VALUES
(1, 'Shounen', 'assets/images/shonen.jpg'),
(2, 'Shoujo', 'assets/images/kimi.jpg'),
(3, 'Seinen', 'assets/images/seinen.jpg'),
(4, 'Josei', 'assets/images/josei.jpg'),
(5, 'Kodomo', 'assets/images/kodomo.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(4) NOT NULL,
  `categoryID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(5) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `price`, `image`) VALUES
(1, 1, 'Dr. Stone', 150, 'assets/images/dr.jpg'),
(2, 1, 'Jujutsu Kaisen', 150, 'assets/images/jjk.jpg'),
(3, 1, 'Kaiju No.8', 150, 'assets/images/kaiju.jpg'),
(4, 1, 'Spy X Family', 150, 'assets/images/spy.jpg'),
(5, 1, 'One-Punch Man', 150, 'assets/images/opm.jpg'),
(6, 1, 'Tokyo Ghoul', 150, 'assets/images/tokyo.jpg'),
(7, 1, 'My Hero Academia', 150, 'assets/images/mha.jpg'),
(8, 1, 'Haikyuu!!', 150, 'assets/images/hai.jpg'),
(9, 2, 'Kimi ni Todoke', 150, 'assets/images/kimi.jpg'),
(10, 2, 'Orange', 150, 'assets/images/orange.jpg'),
(11, 2, 'Ao Haru Ride', 150, 'assets/images/ao.jpg'),
(12, 2, 'Sailor Moon', 150, 'assets/images/sailor.jpg'),
(13, 2, 'Fruit Basket', 150, 'assets/images/fruit.jpg'),
(14, 2, 'Toradora', 150, 'assets/images/tora.jpg'),
(15, 3, 'Berserk', 150, 'assets/images/berserk.jpg'),
(16, 3, 'Bungo Stray Dogs', 150, 'assets/images/bungo.jpg'),
(17, 3, 'Vinland Saga', 150, 'assets/images/vin.jpg'),
(18, 3, 'Monster', 150, 'assets/images/monster.jpg'),
(19, 4, 'Paradise Kiss', 150, 'assets/images/josei.jpg'),
(20, 4, 'Only Yesterday', 150, 'assets/images/omo.webp'),
(21, 4, 'No.6', 150, 'assets/images/no.jpg'),
(22, 4, 'Kuragehime', 150, 'assets/images/kura.jpg'),
(23, 4, 'Chihayafuru', 150, 'assets/images/chi.jpg'),
(24, 4, 'Usagi Drop', 150, 'assets/images/usa.jpg'),
(25, 5, 'Doraemon', 150, 'assets/images/dor.jpg'),
(26, 5, 'Youkai Watch', 150, 'assets/images/yo.jpg'),
(27, 5, 'Astro Boy', 150, 'assets/images/astro.jpg'),
(28, 5, 'Digimon', 150, 'assets/images/digi.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
