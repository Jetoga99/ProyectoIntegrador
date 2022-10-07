-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema proyecto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema proyecto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proyecto` DEFAULT CHARACTER SET utf8 ;
USE `proyecto` ;

-- -----------------------------------------------------
-- Table `proyecto`.`Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`Proyecto` (
  `Proyecto_Id` INT NOT NULL,
  `Descripcion` VARCHAR(45) NOT NULL,
  `Costo` FLOAT NOT NULL,
  `Fecha_Inicio` DATE NOT NULL,
  `Fecha_Fin` DATE NULL,
  `Cliente` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`Proyecto_Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`Tipo_Desarrollador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`Tipo_Desarrollador` (
  `Tipo_Desarrollador_Id` INT NOT NULL AUTO_INCREMENT,
  `Descriopcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Tipo_Desarrollador_Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`Desarrollador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`Desarrollador` (
  `Desarrollador_Id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(50) NOT NULL,
  `Apellidos` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(30) NOT NULL,
  `Contraseña` VARCHAR(15) NOT NULL,
  `Proyecto_Id` INT NOT NULL,
  `Tipo_Desarrollador` INT NOT NULL,
  PRIMARY KEY (`Desarrollador_Id`, `Proyecto_Id`, `Tipo_Desarrollador`),
  INDEX `fk_Desarrollador_Proyecto_idx` (`Proyecto_Id` ASC) VISIBLE,
  INDEX `fk_Desarrollador_Tipo_Desarrollador1_idx` (`Tipo_Desarrollador` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`Servicios` (
  `Servicios_Id` INT NOT NULL AUTO_INCREMENT,
  `Servicio_Nombre` VARCHAR(50) NOT NULL,
  `Servicio_Descripcion` VARCHAR(100) NOT NULL,
  `Imagen` BLOB NOT NULL,
  PRIMARY KEY (`Servicios_Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`Proyecto_Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`Proyecto_Servicios` (
  `Proyecto_Proyecto_Id` INT NOT NULL,
  `Servicios_Servicios_Id` INT NOT NULL,
  PRIMARY KEY (`Proyecto_Proyecto_Id`, `Servicios_Servicios_Id`),
  INDEX `fk_Proyecto_has_Servicios_Servicios1_idx` (`Servicios_Servicios_Id` ASC) VISIBLE,
  INDEX `fk_Proyecto_has_Servicios_Proyecto1_idx` (`Proyecto_Proyecto_Id` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
