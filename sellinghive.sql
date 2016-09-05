-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2016 at 11:21 AM
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
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_bank`
--

INSERT INTO `tbl_bank` (`id`, `userid`, `bankname`, `routingnumber`, `accountnumber`, `paypalusername`, `paypalpassword`, `date`) VALUES
(1, 22, 'asdsad', 'sdfzxcvxv', 'xcvxcvxcv', 'xcvcxvxcv', 'xcvxvxcvcv', '2016-11-12');

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
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_profile`
--

INSERT INTO `tbl_profile` (`id`, `companyname`, `url`, `userid`, `logo`, `photo`, `about`, `reviewcount`, `taxid`, `date`) VALUES
(3, 'bondaysy', 'saasss', '23', '/home3/jaynardv/public_html/sellinghive/php/uploads/hc85q6isk518o1z0bsgr.jpg', 'photo.png', 'wasak', 1, '1', '2016-09-04'),
(2, 'Tcap', 'sadlfy', '59', 'logo.png', 'photo.png', 'Magaling ako so strong', 1, '1', '2016-09-03');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_review`
--

CREATE TABLE `tbl_review` (
  `id` int(255) NOT NULL,
  `fromid` int(255) NOT NULL,
  `toid` int(255) NOT NULL,
  `reviewrating` varchar(255) NOT NULL,
  `reviewtext` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_tax`
--

INSERT INTO `tbl_tax` (`id`, `userid`, `ein`, `address`, `entity`, `date`) VALUES
(3, 22, 'cbcvbcvbcbcvbvcbvcbvc', 'asabvbcvbcvb', 'walasak', '2016-10-12');

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
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `name`, `email`, `password`, `role`, `date`) VALUES
(22, 'julius', 'mateojulius98@yahoo.com', '1e917f4db253501f5b5a801705821807', 'sales', '2016-09-02'),
(23, 'aw', 'aw@gmail.com', 'b787d22d9cb06342658bf546039117bc', 'corporate', '2016-09-02'),
(24, 'jaymart', 'jaymart@gmail.com', '0c78a58bfe43d7f68c01d09a977ebdb6', 'corporate', '2016-09-02'),
(25, 'doms', 'doms@gmail.com', '3f93c817c7ddf42f3f3efd69833f88b5', 'corporate', '2016-09-03'),
(26, 'doms', 'doms1@gmail.com', '895b3c93278a2c087266dfae0e003b3a', 'corporate', '2016-09-03'),
(27, 'walasak', 'walasak@gmail.com', 'ac79e380d7aae2bd86ad87576d0ca52b', 'corporate', '2016-09-03'),
(28, 'sample', 'sample@gmail.com', 'cf48af5098f69c62dee1040d6907b4a6', 'corporate', '2016-09-03'),
(29, 'admin', 'admin@gmail.com', '5bb5aff891d4f5d841b26a6cb8122156', 'corporate', '2016-09-03'),
(30, 'partanduls@gmail.com', 'partanduls@gmail.com', '97a996600e204d6f8907470d3d2f7296', 'corporate', '2016-09-03'),
(31, 'ewe', 'ewewe', '', '', '0000-00-00'),
(32, 'ewe', 'ewewe', '', '', '0000-00-00'),
(33, 'ewe', 'ewewe', '', '', '0000-00-00'),
(34, 'ewe', 'ewewe', '', '', '0000-00-00'),
(35, 'ewe', 'ewewe', '', '', '0000-00-00'),
(36, 'ewe', 'ewewe', '', '', '0000-00-00'),
(37, 'ewe', 'ewewe', '', '', '0000-00-00'),
(38, 'awe', 'ewew', '', '', '0000-00-00'),
(39, 'awe', 'ewew', '', '', '0000-00-00'),
(40, 'awe', 'ewew', '', '', '0000-00-00'),
(41, 'wewe', 'ewew', '', '', '0000-00-00'),
(42, 'ewee', 'ewewe', '', '', '0000-00-00'),
(43, 'ewee', 'ewewe', '', '', '0000-00-00'),
(44, 'ewee', 'ewewe', '', '', '0000-00-00'),
(45, 'ewee', 'ewewe', '', '', '0000-00-00'),
(46, 'ewe', '', '', '', '0000-00-00'),
(47, 'ewe', '', '', '', '0000-00-00'),
(48, 'ewe', '', '', '', '0000-00-00'),
(49, 'ewe', '', '', '', '0000-00-00'),
(50, 'ewe', '', '', '', '0000-00-00'),
(51, 'ewe', '', '', '', '0000-00-00'),
(52, 'ewe', '', '', '', '0000-00-00'),
(53, 'ewe', '', '', '', '0000-00-00'),
(54, 'ewe', '', '', '', '0000-00-00'),
(55, 'ewe', '', '', '', '0000-00-00'),
(56, 'eweewe1111', 'ewewewew111', '', '', '0000-00-00'),
(57, 'juljul98', 'wala@gmail.com', 'b3026ae534dd895040777db7dee344dd', 'corporate', '2016-09-03'),
(58, 'cisco', 'cisco@gmail.com', '0062d21c1a97acad0fff653df56849b2', 'corporate', '2016-09-03'),
(59, 'jj@gmail.com', 'jj@gmail.com', '1e917f4db253501f5b5a801705821807', 'corporate', '2016-09-03');

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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_message`
--
ALTER TABLE `tbl_message`
  MODIFY `messageID` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_tax`
--
ALTER TABLE `tbl_tax`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
