-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema proyecto_integrador
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema proyecto_integrador
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proyecto_integrador` DEFAULT CHARACTER SET utf8 ;
USE `proyecto_integrador` ;

-- -----------------------------------------------------
-- Table `proyecto_integrador`.`Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_integrador`.`Proyecto` (
  `Proyecto_Id` INT NOT NULL AUTO_INCREMENT,
  `Descripción` VARCHAR(100) NOT NULL,
  `Costo` FLOAT NOT NULL,
  `Fecha_Inicio` DATE NOT NULL,
  `Fecha_Fin` DATE NULL,
  `Cliente` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`Proyecto_Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_integrador`.`Tipo_Desarrollador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_integrador`.`Tipo_Desarrollador` (
  `Tipo_Desarrollador_Id` INT NOT NULL AUTO_INCREMENT,
  `Descripción` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Tipo_Desarrollador_Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_integrador`.`Desarrollador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_integrador`.`Desarrollador` (
  `Desarrollador_Id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(50) NOT NULL,
  `Apellidos` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(30) NOT NULL,
  `Contraseña` VARCHAR(15) NOT NULL,
  `Proyecto_Id` INT NOT NULL,
  `Tipo_Desarrollador` INT NOT NULL,
  PRIMARY KEY (`Desarrollador_Id`, `Proyecto_Id`, `Tipo_Desarrollador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_integrador`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_integrador`.`Servicios` (
  `Servicios_Id` INT NOT NULL AUTO_INCREMENT,
  `Servicio_Nombre` VARCHAR(50) NOT NULL,
  `Servicio_Descripción` VARCHAR(100) NOT NULL,
  `Imagen` LONGBLOB NOT NULL,
  PRIMARY KEY (`Servicios_Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_integrador`.`Proyecto_Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_integrador`.`Proyecto_Servicios` (
  `Proyecto_Proyecto_Id` INT NOT NULL,
  `Servicios_Servicios_Id` INT NOT NULL,
  PRIMARY KEY (`Proyecto_Proyecto_Id`, `Servicios_Servicios_Id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
