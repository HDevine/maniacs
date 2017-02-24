-- MySQL dump 10.14  Distrib 5.5.50-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: db654380227
-- ------------------------------------------------------
-- Server version	5.5.50-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coaches`
--

DROP TABLE IF EXISTS `coaches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coaches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coach_name` text,
  `coach_position` text,
  `coach_email` text,
  `coach_phone` text,
  `coach_pic_path` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coaches`
--

LOCK TABLES `coaches` WRITE;
/*!40000 ALTER TABLE `coaches` DISABLE KEYS */;
INSERT INTO `coaches` VALUES (1,'Chris Giannascoli','Head Coach','chrisgian12@gmail.com','(609) 381-8800','images/coachchris.jpg'),(2,'Dave Williams','Assistant Coach','dwilliams111373@verizon.net','(609) xxx-xxxx','images/coachwilliams.jpg');
/*!40000 ALTER TABLE `coaches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_date` datetime DEFAULT NULL,
  `event_desc` text,
  `event_data` text,
  `event_start` datetime DEFAULT NULL,
  `event_end` datetime DEFAULT NULL,
  `event_address` text,
  `event_city` text,
  `event_state` text,
  `event_zip` text,
  `event_map` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'2016-11-26 00:00:00','Test','Test Event','1970-01-01 10:00:00','1970-01-01 12:00:00','','','NJ','','http://maps.google.com/?q=,,NJ &t=h&z=20');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `game_date` datetime DEFAULT NULL,
  `game_time` datetime DEFAULT NULL,
  `game_type` text,
  `game_opponent` text,
  `opponent_score` int(11) DEFAULT NULL,
  `maniacs_score` int(11) DEFAULT NULL,
  `game_address` text,
  `game_state` text,
  `game_zip` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_date` datetime DEFAULT NULL,
  `news_desc` text,
  `news_data` text,
  `news_image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'2016-09-25 00:00:00','2016 Ovarian Cancer Champs','The 18U Maniacs won the 2016 Ovarian Cancer tournament held in Egg Harbor Township NJ 09/24/16 -> 09/25/16.  The girls went 5-0!','images/IMG_0783.JPG');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo_path` text,
  `photo_url` text,
  `photo_desc` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,'images/tsunami.jpg','https://www.smugmug.com/gallery/n-T9vD88','Tsunami Scrimmage - 09/22/16'),(3,'images/ovariantournament.jpg','https://www.smugmug.com/gallery/n-76qfSM','EHT Ovarian Cancer Awareness Tournament -09/24/16->09/25/16'),(4,'images/wildcats.jpg','https://jsc3pics.smugmug.com/Maniacs/Wildcats-Tournament-108916','Wildcats Tournament - 10/08/16 -> 10/09/16'),(5,'images/toysfortots.jpg','https://www.smugmug.com/gallery/n-RmcLKh','Toys For Tots Tournament - 10/15/16 -> 10/16/16'),(6,'images/surgescrimmage.jpg','https://jsc3pics.smugmug.com/Maniacs/Surge-Scrimmage-102316','Surge Scrimmage 10/23/16');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` text,
  `lastname` text,
  `number` int(11) DEFAULT NULL,
  `position1` text,
  `position2` text,
  `position3` text,
  `throws` text,
  `bats` text,
  `height` text,
  `weight` text,
  `age` int(11) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `address` text,
  `city` text,
  `state` text,
  `zip` text,
  `phone` text,
  `email` text,
  `profile_pic_path` text,
  `video_url` text,
  `hs` text,
  `hs_address` text,
  `hs_city` text,
  `hs_state` text,
  `hs_zip` text,
  `hs_phone` text,
  `grad_date` text,
  `hs_athletic_director` text,
  `hs_softball_coach` text,
  `hs_sports_played` text,
  `hs_gpa` text,
  `hs_class_rank` text,
  `hs_psat` text,
  `hs_sat` text,
  `hs_softball_highlights` text,
  `hs_clubs_activities` text,
  `travel_year` text,
  `travel_coach` text,
  `travel_coach_phone` text,
  `travel_coach_email` text,
  `travel_highlights` text,
  `travel_stats` text,
  `mom_name` text,
  `mom_phone` text,
  `dad_name` text,
  `dad_phone` text,
  `parent_email` text,
  `personal_statement` text,
  `community_service` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (2,'Taylor','Williams',15,'2B','SS','','Right','Right','','',14,'2001-12-30 05:00:00','225 Dogwood Drive','Bridgeton','NJ','08302','(856) 362-3686','kelli2475@verizon.net','images/williams.jpg','YouTube','Wildwood Catholic','1500 Central Ave','North WIldwood','NJ','08260','(609) 522-7257','0000-00-00 00:00:00','N/A','Matt Megines','Softball','4.0','N/A','N/A','N/A','N/A','N/A','2016','Vince Flukey','(609) 226-8110','maniacssoftball@yahoo.com','1st Career HR, 2run walk-off in quarterfinals of state championships',NULL,'Kelli Williams','(856) 362-3686','David Williams','(609) 501-4457','dwilliams111373@verizon.net','N/A','N/A'),(3,'Samantha','Ortiz',22,'RF','LF','','Right','Left','5\' 1\"','161',15,'2001-04-21 04:00:00','325 Valley Ave','Hammonton','NJ','08037','(609) 992-0186','sammimia@icloud.com','images/ortiz.jpg','YouTube','Hammonton High School','566 Old Forks Road','Hammonton','NJ','08037','(609) 567-7000','0000-00-00 00:00:00','Marni Parks','Eric Schulman','Softball','3.482','182 of 371','N/A','N/A','','Key Club','2016','David Kelsey','N/A','N/A','N/A',NULL,'Ester Rodriguez','(856) 362-1030','Carmelo Ortiz','(856) 362-1033','missy00121@yahoo.com','N/A','FAA: helped out with the T-Ball teams'),(4,'Alexa','Preziosi',28,'2B','P','SS','Right','Right','5\' 1\"','110',16,'2000-03-24 04:00:00','9 Hollow Drive','Egg Harbor Township','NJ','08234','(609) 703-3904','preziosialexa@gmail.com','images/preziosi.jpg','YouTube','Egg Harbor Towship High School','24 High School Drive','Egg Harbor Township','NJ','08234','(609) 653-0100','0000-00-00 00:00:00','Michael Pellegrino','Mary Dunlap','Softball, Field Hockey','3.9','153 of 571','N/A','N/A','2016 CAL/SJ Group 4 Champions; 2016 NJ Group 4 State Runner Up','National Honor Society, Varsity Scholar (Lettered), Field Hockey Manager','2016','Chris Giannascoli','(609) 381-8800','chrisgian12@gmail.com','Stafford Stingrays: .567 avg .733 OBP;  NJ Mystics Red: .560 avg .769 OBP',NULL,'Vicky Preziosi','(609) 774-4133','Paul Preziosi','(609) 364-6171','teamprez@comcast.net','I have been playing softball for 9 years.  During my time of playing travel softball I have earned a starting position and received multiple MVP awards.  My high school team finished the 2016 season with a record of 24-1.  I was also a member of the EHT Tornadoes All Star Babe Ruth team that won districts and state championships.  I would like to attend a college where I can pursue a career in education and play softball.','Youth Volunteer - St. Elizabeth Ann Seton Church; 5K for EHT Education Foundation, Volunteer Youth Softball coach for EHT Rec Program.'),(5,'Maeve','Healy',19,'LF','3B','P','Right','Right','5\' 4\"','155',17,'1999-08-07 04:00:00','409 Rockbridge Court','Egg Harbor Township','NJ','08234','(609) 338-8369','beachlove19@gmail.com','images/healy.jpg','YouTube','Egg Harbor Township High School','24 High School Drive','Egg Harbor Towship','NJ','08234','(609) 653-0100','0000-00-00 00:00:00','Michael Pellegrino','Mary Dunlap','Softball','4.2','45','N/A','N/A','Freshman Year (2015) Awarded Sportsmanship Award\n2016 SJ Group IV Champs\n2016 Softball CAL Champs','Key Club, National Honors Society, Freshman & Sophomore Varsity Scholar','2016','Chris Giannascoli','(609) 381-8800','chrisgian12@gmail.com','N/A',NULL,'Bridget Healy','(609) 338-8225','Stephen Healy','(609) 338-8226','diamongirlb@gmail.com','I would like to attend a 4 year university, where I will play softball while pursuing a career in pediatric medicine.','John R. Elliot Hero Campaign\nPlayers Edge, Galloway NJ\nSt. Nicholas of Tolentine Church, Atlantic City NJ - Backpack distribution; community bike drive\nEHT softball batting coach 12U.'),(6,'Gabriella','D\'Ottavio',6,'1B','','','Right','Right','5\' 8\"','160',14,'2002-08-18 04:00:00','5559 Chestnut Ave','Vineland','NJ','08360','(856) 207-5130','dottaviolisa@yahoo.com','images/dottavio.jpg','YouTube','Buena Regional High School','125 Weymouth Road','Buena','NJ','08310','(856) 697-2400','0000-00-00 00:00:00','NA','Pam Pickett','Softball, Soccer','3.8','N/A','N/A','N/A','N/A','Natural Helper, Vice President of Freshman class','2016','Chris Giannascoli','(609) 381-8800','chrisgian12@gmail.com','N/A',NULL,'Lisa D\'Ottavio','(856) 207-5130','Larry D\'Ottavio','(856) 297-2928','dottaviolisa@yahoo.com','N/A','National Junior Honor Society'),(7,'Kaitlyn','Riggs',8,'SS','C','','Right','Right','5\' 4\"','160',14,'2002-01-20 05:00:00','209 Gardenview Road','Egg Harbor Township','NJ','08234','(609) 418-5995','jriggs209@comcast.net','images/riggs.jpg','YouTube','Egg Harbor Township High School','24 High School Drive','Egg Harbor Township','NJ','08234','(609) 653-0100','0000-00-00 00:00:00','Michael Pellegrino','Mary Dunlap','Softball, Field Hockey','4.1','N/A','N/A','N/A','Highest team batting average travel .437 school .948\nMVP award - Softball\nRoy Todd softball award (only recipient)\nTeam Captain - Field Hockey','Interact Club, Athletes Arbor,  National Honor Society','2016','Chris Giannascoli','(609) 381-8800','chrisgian12@gmail.com','Batting avg .437 end of season last year with only 2 strikeouts in 163 at bats.',NULL,'Janine Riggs','(609) 418-5995','Bill Riggs','(609) 455-0841','jriggs209@comcast.net','Kaitlyn is a talented, determined, energetic team player with an impressive batting average of .437.  Her primary positions are shortstop and catcher, and can be used as a utility player.  She has great ball control and accuracy with an average pop time just under 2.0.  She is able to throw many players out and keep them off balance.  She is a player that will will not disappoint on or off the field.','Hero Walk, EHT Nights Out, Big Brothers/Big Sisters, Read Across America, Bike Safety Week volunteer, Ovarian Cancer and Breast Cancer Awareness events, Fire Prevention Week.'),(9,'Gianni','Lusciano',3,'CF','','','Right','Right','','',0,'2000-01-01 05:00:00','','','NJ','','','','images/lusciano.jpg','','','','','NJ','','','0000-00-00 00:00:00','','','','','','','','','','2016','','','','',NULL,'','','','','','',''),(10,'Alyssa','Giannascoli',7,'1B','3B','RF','Right','Right','','',0,'2000-01-01 05:00:00','','','NJ','','','','images/giannascoli.jpg','','','','','NJ','','','0000-00-00 00:00:00','','','','','','','','','','2016','','','','',NULL,'','','','','','',''),(11,'Bailey','Pennino',13,'P','','','Right','Right','','',0,'2000-01-01 05:00:00','','','NJ','','','','images/pennino.jpg','','','','','NJ','','','0000-00-00 00:00:00','','','','','','','','','','2016','','','','',NULL,'','','','','','',''),(12,'Casey','Manera',24,'C','1B','','Right','Right','','',0,'2000-01-01 05:00:00','','','NJ','','','','images/manera.jpg','','','','','NJ','','','0000-00-00 00:00:00','','','','','','','','','','2016','','','','',NULL,'','','','','','',''),(13,'Sydnee','Scozzafava',33,'','','','Right','Right','','',17,'2000-01-01 05:00:00','','','NJ','','','','images/scozzafava.jpg','','','','','NJ','','','2017','','','','','','N/A','','','','2016','Chris Giannascoli','(609) 381-8800','chrisgian12@gmail.com','',NULL,'','','','','','',''),(17,'Amber','Devine',2,'RF','C','','Right','Right','5\' 7\"','165',16,'2000-04-25 04:00:00','110 Drexel Ave','Egg Harbor Township','NJ','08234','(609) 513-6746','amberdevine25@gmail.com','images/devine.jpg','YouTube Link','Egg Harbor Township High School','24 High School Drive','Egg Harbor Township','NJ','08234','(609) 653-0100','2018','Michael Pellegrino','Mary Dunlap','Softball','3.7','N/A','N/A','','2016 EHT Lady Eagles - JV Cather\n.457 avg','None','2016','Chris Giannascoli','(609) 381-8800','chrisgian12@gmail.com','2015-16 Stafford Stingrays: .437 avg',NULL,'Kristin Devine','(609) 437-7047','Harry Devine','(609) 276-0555','devine1970@icloud.com','My mother influenced me into playing softball, as she played when she was in high school.  She has told me countless stories of the great times she had, as well as the many friends she made.  She keeps in touch with many of those friends to this day.  Since I\'ve started playing softball, I too have made many friends and my confidence in school has grown tremendously.','Scullville Volunteer Fire Company: Junior Ladies Auxilary and volunteer with the annual Scullville Haunted Hayride.\nEHT Youth Softball: tournament and field prep; snack stand duties; youth coaching.');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practices`
--

DROP TABLE IF EXISTS `practices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `practices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `practice_date` datetime DEFAULT NULL,
  `practice_start` datetime DEFAULT NULL,
  `practice_end` datetime DEFAULT NULL,
  `practice_address` text,
  `practice_city` text,
  `practice_state` text,
  `practice_zip` text,
  `practice_map` text,
  `practice_desc` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practices`
--

LOCK TABLES `practices` WRITE;
/*!40000 ALTER TABLE `practices` DISABLE KEYS */;
INSERT INTO `practices` VALUES (1,'2016-11-15 00:00:00','1970-01-01 18:30:00','1970-01-01 20:00:00','1430 W. Sherman Ave','Vineland','NJ','08360','http://maps.google.com/?q=1430 W. Sherman Ave,Vineland,NJ 08360&t=h&z=20','PIT in Vineland');
/*!40000 ALTER TABLE `practices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stats`
--

DROP TABLE IF EXISTS `stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) DEFAULT NULL,
  `games_played` int(11) DEFAULT NULL,
  `plate_apperances` int(11) DEFAULT NULL,
  `at_bats` int(11) DEFAULT NULL,
  `hits` int(11) DEFAULT NULL,
  `single` int(11) DEFAULT NULL,
  `dbl` int(11) DEFAULT NULL,
  `triple` int(11) DEFAULT NULL,
  `homerun` int(11) DEFAULT NULL,
  `rbi` int(11) DEFAULT NULL,
  `runs` int(11) DEFAULT NULL,
  `hbp` int(11) DEFAULT NULL,
  `roe` int(11) DEFAULT NULL,
  `fielders_choice` int(11) DEFAULT NULL,
  `catcher_int` int(11) DEFAULT NULL,
  `walks` int(11) DEFAULT NULL,
  `strikeouts` int(11) DEFAULT NULL,
  `avg` int(11) DEFAULT NULL,
  `obp` int(11) DEFAULT NULL,
  `slugging` int(11) DEFAULT NULL,
  `ops` int(11) DEFAULT NULL,
  `pa_per_bb` int(11) DEFAULT NULL,
  `bb_per_k` int(11) DEFAULT NULL,
  `c_percent` int(11) DEFAULT NULL,
  `stolenbase` int(11) DEFAULT NULL,
  `caughtstealing` int(11) DEFAULT NULL,
  `stolenbase_percent` int(11) DEFAULT NULL,
  `pik` int(11) DEFAULT NULL,
  `gidp` int(11) DEFAULT NULL,
  `extrabasehits` int(11) DEFAULT NULL,
  `totalbases` int(11) DEFAULT NULL,
  `ab_per_hr` int(11) DEFAULT NULL,
  `ba_risp` int(11) DEFAULT NULL,
  `ps` int(11) DEFAULT NULL,
  `ps_per_pa` int(11) DEFAULT NULL,
  `two_s_plus_three` int(11) DEFAULT NULL,
  `two_s_plus_t_percent` int(11) DEFAULT NULL,
  `six_plus` int(11) DEFAULT NULL,
  `six_plus_percent` int(11) DEFAULT NULL,
  `sac` int(11) DEFAULT NULL,
  `sf` int(11) DEFAULT NULL,
  `lob` int(11) DEFAULT NULL,
  `two_out_rbi` int(11) DEFAULT NULL,
  `hhb` int(11) DEFAULT NULL,
  `qab` int(11) DEFAULT NULL,
  `qab_percent` int(11) DEFAULT NULL,
  `pitching_innings_pitched` int(11) DEFAULT NULL,
  `pitching_games_pitched` int(11) DEFAULT NULL,
  `pitching_games_started` int(11) DEFAULT NULL,
  `pitching_wins` int(11) DEFAULT NULL,
  `pitching_losses` int(11) DEFAULT NULL,
  `pitching_saves` int(11) DEFAULT NULL,
  `pitching_save_opp` int(11) DEFAULT NULL,
  `pitching_blown_saves` int(11) DEFAULT NULL,
  `pitching_save_percent` int(11) DEFAULT NULL,
  `pitching_hits_allowed` int(11) DEFAULT NULL,
  `pitching_runs_allowed` int(11) DEFAULT NULL,
  `pitching_earned_runs` int(11) DEFAULT NULL,
  `pitching_walks` int(11) DEFAULT NULL,
  `pitching_strikeouts` int(11) DEFAULT NULL,
  `pitching_hit_batters` int(11) DEFAULT NULL,
  `pitching_era` int(11) DEFAULT NULL,
  `pitching_whip` int(11) DEFAULT NULL,
  `pitching_batters_faced` int(11) DEFAULT NULL,
  `pitching_total_pitches` int(11) DEFAULT NULL,
  `pitching_total_strikes` int(11) DEFAULT NULL,
  `pitching_total_balls` int(11) DEFAULT NULL,
  `pitching_pitches_per_inning` int(11) DEFAULT NULL,
  `pitching_pitches_per_batters_faced` int(11) DEFAULT NULL,
  `pitching_less_than_three` int(11) DEFAULT NULL,
  `pitching_less_than_three_percent` int(11) DEFAULT NULL,
  `pitching_leadoff_out` int(11) DEFAULT NULL,
  `pitching_innings_first2out` int(11) DEFAULT NULL,
  `pitching_123inn` int(11) DEFAULT NULL,
  `pitching_less_than_13pitches` int(11) DEFAULT NULL,
  `pitching_fielding_independent_pitching` int(11) DEFAULT NULL,
  `pitching_strike_percent` int(11) DEFAULT NULL,
  `pitching_first_pitch_strikes` int(11) DEFAULT NULL,
  `pitching_first_pitch_strikes_percent` int(11) DEFAULT NULL,
  `pitching_first_pitch_strike_out_percent` int(11) DEFAULT NULL,
  `pitching_first_pitch_strike_walks` int(11) DEFAULT NULL,
  `pitching_first_pitch_strike_hits` int(11) DEFAULT NULL,
  `pitching_walks_per_inning` int(11) DEFAULT NULL,
  `pitching_zero_walk_innings` int(11) DEFAULT NULL,
  `pitching_walks_that_score` int(11) DEFAULT NULL,
  `pitching_leadoff_walk` int(11) DEFAULT NULL,
  `pitching_leadoff_walk_scored` int(11) DEFAULT NULL,
  `pitching_wild_pitches` int(11) DEFAULT NULL,
  `pitching_atbats_against` int(11) DEFAULT NULL,
  `pitching_swing_miss` int(11) DEFAULT NULL,
  `pitching_swing_miss_percent` int(11) DEFAULT NULL,
  `pitching_strikeouts_per_regulation_game` int(11) DEFAULT NULL,
  `pitching_strikeouts_per_batter_faced` int(11) DEFAULT NULL,
  `pitching_strikeouts_per_walk` int(11) DEFAULT NULL,
  `pitching_weak_percent` int(11) DEFAULT NULL,
  `pitching_hardhit_ball_percent` int(11) DEFAULT NULL,
  `pitching_groundball_percent` int(11) DEFAULT NULL,
  `pitching_flyball_percent` int(11) DEFAULT NULL,
  `pitching_groundouts` int(11) DEFAULT NULL,
  `pitching_flyouts` int(11) DEFAULT NULL,
  `pitching_go_fo_ratio` int(11) DEFAULT NULL,
  `pitching_opponent_batting_avg` int(11) DEFAULT NULL,
  `pitching_homeruns_allowed` int(11) DEFAULT NULL,
  `pitching_left_on_base` int(11) DEFAULT NULL,
  `pitching_balks` int(11) DEFAULT NULL,
  `pitching_picked_off` int(11) DEFAULT NULL,
  `pitching_stolenbases_allowed` int(11) DEFAULT NULL,
  `pitching_caught_stealing` int(11) DEFAULT NULL,
  `pitching_stolenbase_percent` int(11) DEFAULT NULL,
  `fielding_total_chances` int(11) DEFAULT NULL,
  `fielding_assists` int(11) DEFAULT NULL,
  `fielding_putouts` int(11) DEFAULT NULL,
  `fielding_errors` int(11) DEFAULT NULL,
  `fielding_double_plays` int(11) DEFAULT NULL,
  `fielding_triple_plays` int(11) DEFAULT NULL,
  `fielding_field_percent` int(11) DEFAULT NULL,
  `catching_innings_caught` int(11) DEFAULT NULL,
  `catching_passed_balls` int(11) DEFAULT NULL,
  `catching_stolen_bases_allowed` int(11) DEFAULT NULL,
  `catching_stolen_bases_attempted` int(11) DEFAULT NULL,
  `catching_caught_stealing` int(11) DEFAULT NULL,
  `catching_caught_stealing_percent` int(11) DEFAULT NULL,
  `catching_picked_off` int(11) DEFAULT NULL,
  `catching_catcher_interference` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stats`
--

LOCK TABLES `stats` WRITE;
/*!40000 ALTER TABLE `stats` DISABLE KEYS */;
/*!40000 ALTER TABLE `stats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-18 14:54:23
