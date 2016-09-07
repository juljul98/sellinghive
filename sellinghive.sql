-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2016 at 12:57 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sellinghive`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bank`
--

CREATE TABLE `tbl_bank` (
  `id` int(255) NOT NULL,
  `userid` int(255) NOT NULL,
  `bankname` varchar(255) NOT NULL,
  `routingnumber` varchar(255) NOT NULL,
  `accountnumber` varchar(255) NOT NULL,
  `paypalusername` varchar(255) NOT NULL,
  `paypalpassword` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_message`
--

CREATE TABLE `tbl_message` (
  `messageID` int(10) NOT NULL,
  `subject` text NOT NULL,
  `message` longtext NOT NULL,
  `file` varchar(100) NOT NULL,
  `isDraft` int(10) NOT NULL,
  `fromID` int(10) NOT NULL,
  `toID` int(10) NOT NULL,
  `messageDate` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_profile`
--

CREATE TABLE `tbl_profile` (
  `id` int(255) NOT NULL,
  `companyname` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `reviewcount` int(255) NOT NULL,
  `taxid` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_profile`
--

INSERT INTO `tbl_profile` (`id`, `companyname`, `url`, `userid`, `logo`, `photo`, `about`, `reviewcount`, `taxid`, `created_at`) VALUES
(1, 'asasasasadasdsad', '', '4', '', '', '                        \r\n                    ', 1, '1', '2016-09-07 12:36:53');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_review`
--

CREATE TABLE `tbl_review` (
  `id` int(255) NOT NULL,
  `fromid` int(255) NOT NULL,
  `toid` int(255) NOT NULL,
  `reviewrating` int(255) NOT NULL,
  `reviewtext` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_review`
--

INSERT INTO `tbl_review` (`id`, `fromid`, `toid`, `reviewrating`, `reviewtext`, `created_at`) VALUES
(1, 3, 2, 3, 'pangit ka ', '2016-09-07 09:19:53'),
(2, 4, 2, 23, 'asasasasasas', '2016-09-07 09:55:43'),
(3, 4, 2, 1, 'pangit mag trabaho dyan', '2016-09-07 12:14:20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tax`
--

CREATE TABLE `tbl_tax` (
  `id` int(255) NOT NULL,
  `userid` int(11) NOT NULL,
  `ein` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `entity` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_tax`
--

INSERT INTO `tbl_tax` (`id`, `userid`, `ein`, `address`, `entity`, `created_at`) VALUES
(1, 4, 'helloworldsysssss', 'adad', 'asdadsad', '2016-09-07 12:41:20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `name`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'asa', 'corporate@gmail.com', 'b3c674ad3ac2a90b60c0fa89dcd0dd5e', 'corporate', '2016-09-07 07:12:03'),
(2, 'sales', 'sales@gmail.com', 'b3c674ad3ac2a90b60c0fa89dcd0dd5e', 'sales', '2016-09-07 07:25:49'),
(3, 'simsimi', 'simsimi@gmail.com', 'b3c674ad3ac2a90b60c0fa89dcd0dd5e', 'corporate', '2016-09-07 09:19:16'),
(4, 'walasak', 'walasak@gmail.com', 'b3c674ad3ac2a90b60c0fa89dcd0dd5e', 'corporate', '2016-09-07 09:55:09'),
(5, 'asdasdadsad', 'sdsadads@gmail.com', '0ff31191582e14a372f2a8a8bfaebae1', 'corporate', '2016-09-07 12:23:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_bank`
--
ALTER TABLE `tbl_bank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_message`
--
ALTER TABLE `tbl_message`
  ADD PRIMARY KEY (`messageID`);

--
-- Indexes for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_review`
--
ALTER TABLE `tbl_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tax`
--
ALTER TABLE `tbl_tax`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_bank`
--
ALTER TABLE `tbl_bank`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_message`
--
ALTER TABLE `tbl_message`
  MODIFY `messageID` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_review`
--
ALTER TABLE `tbl_review`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_tax`
--
ALTER TABLE `tbl_tax`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
