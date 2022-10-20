-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema knifeservicedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema knifeservicedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `knifeservicedb` DEFAULT CHARACTER SET utf8mb3 ;
USE `knifeservicedb` ;

-- -----------------------------------------------------
-- Table `knifeservicedb`.`tipo_desarrollador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `knifeservicedb`.`tipo_desarrollador` (
  `Tipo_Desarrollador_Id` BIGINT NOT NULL AUTO_INCREMENT,
  `Descripción` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`Tipo_Desarrollador_Id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `knifeservicedb`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `knifeservicedb`.`proyecto` (
  `Proyecto_Id` BIGINT NOT NULL AUTO_INCREMENT,
  `Descripción` VARCHAR(8000) NOT NULL,
  `Costo` DOUBLE NOT NULL,
  `Fecha_Inicio` DATE NOT NULL,
  `Fecha_Fin` DATE NULL DEFAULT NULL,
  `Cliente` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`Proyecto_Id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `knifeservicedb`.`desarrollador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `knifeservicedb`.`desarrollador` (
  `Desarrollador_Id` BIGINT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(255) NOT NULL,
  `Apellidos` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Contraseña` VARCHAR(255) NOT NULL,
  `Tipo_Desarrollador` BIGINT NOT NULL,
  `Proyecto_Id` BIGINT NOT NULL,
  PRIMARY KEY (`Desarrollador_Id`, `Tipo_Desarrollador`, `Proyecto_Id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `knifeservicedb`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `knifeservicedb`.`servicios` (
  `Servicios_Id` BIGINT NOT NULL AUTO_INCREMENT,
  `Servicio_Nombre` VARCHAR(255) NOT NULL,
  `Servicio_Descripción` VARCHAR(1000) NOT NULL,
  `Imagen` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`Servicios_Id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `knifeservicedb`.`proyecto_servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `knifeservicedb`.`proyecto_servicios` (
  `proy_serv_id` BIGINT NOT NULL AUTO_INCREMENT,
  `Proyecto_Id` BIGINT NOT NULL,
  `Servicios_Id` BIGINT NOT NULL,
  PRIMARY KEY (`proy_serv_id`, `Proyecto_Id`, `Servicios_Id`),
  UNIQUE INDEX `proy_serv_id_UNIQUE` (`proy_serv_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
