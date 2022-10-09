-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyecto
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `desarrollador`
--

DROP TABLE IF EXISTS `desarrollador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `desarrollador` (
  `Desarrollador_Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Apellidos` varchar(45) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Contraseña` varchar(15) NOT NULL,
  `Proyecto_Id` int NOT NULL,
  `Tipo_Desarrollador` int NOT NULL,
  PRIMARY KEY (`Desarrollador_Id`,`Proyecto_Id`,`Tipo_Desarrollador`),
  KEY `fk_Desarrollador_Proyecto_idx` (`Proyecto_Id`),
  KEY `fk_Desarrollador_Tipo_Desarrollador1_idx` (`Tipo_Desarrollador`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `desarrollador`
--

LOCK TABLES `desarrollador` WRITE;
/*!40000 ALTER TABLE `desarrollador` DISABLE KEYS */;
INSERT INTO `desarrollador` VALUES (1,'Irving Alexis','Pascual Hernández','hpascual117@gmail.com','irvingpascual',1,1),(2,'José Crispin','Cruz Santoyo','jccruzsantoyo@gmail.com','josephcrispin',2,2),(3,'Aldo Antonio','Parra Cristino','aldocristino24@gmail.com','aldoantonio',3,2),(4,'Rodrigo de Jésus Sandoval Mérida','Sandoval Mérida','rodrigosm96@outlook.com','rodrigodejesus',5,2),(5,'Andres ','Tecpile Itehua','andrestecpile97@gmail.com','andrestecpile',4,5),(6,'Jesús','Torres García','jetoga99@gmail.com','jesustorres',3,4);
/*!40000 ALTER TABLE `desarrollador` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-06 16:19:48
