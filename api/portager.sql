-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 18, 2020 at 04:00 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portager`
--

-- --------------------------------------------------------

--
-- Table structure for table `magasins`
--

DROP TABLE IF EXISTS `magasins`;
CREATE TABLE IF NOT EXISTS `magasins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `quantite` int(11) NOT NULL,
  `prix` float NOT NULL,
  `prix_rabais` float NOT NULL,
  `rating` float NOT NULL,
  `vote` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `date_added` date NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `potagers`
--

DROP TABLE IF EXISTS `potagers`;
CREATE TABLE IF NOT EXISTS `potagers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `rating` float NOT NULL,
  `vote` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `potagers`
--

INSERT INTO `potagers` (`id`, `user_id`, `rating`, `vote`, `image`, `updated_at`, `created_at`) VALUES
(1, 1, 15, 3, '1231244124', '2020-06-17 11:38:17', NULL),
(2, 4, 0, 0, NULL, '2020-06-17 10:46:00', '2020-06-17 10:46:00'),
(3, 5, 0, 0, NULL, '2020-06-17 10:47:13', '2020-06-17 10:47:13');

-- --------------------------------------------------------

--
-- Table structure for table `recoltes`
--

DROP TABLE IF EXISTS `recoltes`;
CREATE TABLE IF NOT EXISTS `recoltes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typerecolte_id` int(11) NOT NULL,
  `potager_id` int(11) NOT NULL,
  `rating` float NOT NULL,
  `vote` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `description` text,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `type_recolte_index` (`typerecolte_id`),
  KEY `potager_id_index` (`potager_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recoltes`
--

INSERT INTO `recoltes` (`id`, `typerecolte_id`, `potager_id`, `rating`, `vote`, `quantite`, `image`, `description`, `updated_at`, `created_at`) VALUES
(1, 1, 1, 0, 0, 7, NULL, 'mes belle patate', '2020-06-17 12:06:53', '2020-06-17 12:06:53'),
(2, 1, 1, 0, 0, 9, NULL, NULL, '2020-06-17 12:07:33', '2020-06-17 12:07:33'),
(3, 1, 3, 20, 5, 23, NULL, 'Mes tres belle patate', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `typerecoltes`
--

DROP TABLE IF EXISTS `typerecoltes`;
CREATE TABLE IF NOT EXISTS `typerecoltes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `cupcode` varchar(50) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `typerecoltes`
--

INSERT INTO `typerecoltes` (`id`, `nom`, `cupcode`, `updated_at`, `created_at`) VALUES
(1, 'Patate', '12345', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `rating` float NOT NULL,
  `vote` int(11) NOT NULL,
  `numero_porte` varchar(20) DEFAULT NULL,
  `ville` varchar(60) DEFAULT NULL,
  `code_postal` varchar(7) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  `question_secrete` varchar(100) NOT NULL,
  `reponse` varchar(50) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `bio` text,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `prenom`, `nom`, `email`, `password`, `rating`, `vote`, `numero_porte`, `ville`, `code_postal`, `admin`, `question_secrete`, `reponse`, `image`, `bio`, `updated_at`, `created_at`) VALUES
(1, 'Matt', 'Poliquin', 'matt2@exemple.com', '234567', 5, 1, NULL, NULL, NULL, 1, 'test', '234567', NULL, NULL, '2020-06-17 11:31:54', NULL),
(2, 'MathieuTest', 'PoliquinTest', 'matt@exemple.test', 'safasdfrasdf', 0, 0, '123', 'Fake', '123456', 0, 'Ma question est', 'reponse', NULL, NULL, '2020-06-10 09:38:43', '2020-06-10 09:38:43'),
(3, 'MathieuTest23', 'PoliquinTest23', 'matt23@exemple.test', 'safasdfrasdf', 0, 0, '123', 'Fake', '123456', 0, 'Ma question est', 'reponse', NULL, NULL, '2020-06-17 10:44:49', '2020-06-17 10:44:49'),
(4, 'MathieuTest233', 'PoliquinTest233', 'matt233@exemple.test', 'safasdfrasdf', 0, 0, '123', 'Fake', '123456', 0, 'Ma question est', 'reponse', NULL, NULL, '2020-06-17 10:46:00', '2020-06-17 10:46:00'),
(5, 'Math', 'Poliquin', 'mattp@exemple.test', 'safasdfrasdf', 0, 0, '123', 'Fake', '123456', 0, 'Ma question est', 'reponse', NULL, NULL, '2020-06-17 10:47:13', '2020-06-17 10:47:13');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `potagers`
--
ALTER TABLE `potagers`
  ADD CONSTRAINT `potager_x_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `recoltes`
--
ALTER TABLE `recoltes`
  ADD CONSTRAINT `recolte_x_potager` FOREIGN KEY (`potager_id`) REFERENCES `potagers` (`id`),
  ADD CONSTRAINT `type_x_recolte` FOREIGN KEY (`typerecolte_id`) REFERENCES `typerecoltes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
