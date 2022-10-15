-- TRUNCATE desarrollador;
-- TRUNCATE tipo_desarrollador;

-- Script de llenado de la tabla Desarrollador
INSERT INTO `knifeservicedb`.`Desarrollador` ( `Desarrollador_Id`,`Nombre`, `Apellidos`, `Email`, `Contraseña`, `Proyecto_Id`, `Tipo_Desarrollador`) 
VALUES (1,'Irving Alexis','Pascual Hernández','hpascual117@gmail.com','irvingpascual',3,1),
(0,'José Crispin','Cruz Santoyo','jccruzsantoyo@gmail.com','josephcrispin',2,2),
(0,'Aldo Antonio','Parra Cristino','aldocristino24@gmail.com','aldoantonio',3,2),
(0,'Rodrigo de Jésus Sandoval Mérida','Sandoval Mérida','rodrigosm96@outlook.com','rodrigodejesus',5,2),
(0,'Andres ','Tecpile Itehua','andrestecpile97@gmail.com','andrestecpile',4,5),
(0,'Jesús','Torres García','jetoga99@gmail.com','jesustorres',3,4);


-- Script de llenado de la tabla Proyecto
INSERT INTO `knifeservicedb`.`Proyecto` (`Proyecto_Id`, `Descripción`, `Costo`, `Fecha_Inicio`, `Fecha_Fin`, `Cliente`) 
VALUES (1,'mantenimiento de pagina web, implementar nuevas características.',12000,'2022-10-06','2022-10-12','la comercial mexicana '),
(2,'diseño e implentacion de pagina web',20000,'2022-10-12','2022-12-15','hamburguesas la doñita '),
(3,'mantenimiento de dispositivos de red.',12000,'2022-12-10','2022-12-10','Oxxo los pinos'),
(4,'Asesoría para instalación de red de equipos ',15000,'2022-11-03','2022-11-10','Ciber la vieja escuela '),
(5,'creacion de punto de venta para abarrotes.',20000,'2022-11-05','2022-11-10','Abarrotes El Irving Pacual');


-- Script de llenado de la tabla Proyecto_servicios
INSERT INTO `knifeservicedb`.`Proyecto_Servicios` (`proy_serv_Id`, `Proyecto_Id`, `Servicios_Id`) 
VALUES (1,1,3),(0,2,1),(0,3,4),(0,4,2),(0,5,5);

-- Script de llenado de la tabla servicios
INSERT INTO `knifeservicedb`.`Servicios` (`Servicios_Id`,`Servicio_Nombre`, `Servicio_Descripción`, `Imagen`) 
VALUES (1,'Diseño de páginas web', 'Servicio de creación y desarrollo de páginas web',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\dweb.jpg'),
(0,'Diseño Base de Datos', 'Creación y desarrollo de aplicaciones para Android y IOS.',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\bd.jpg '),
(0,'Mantenimiento de Sistemas', 'Servicio a Hardware, limpieza de equipos y mantenimiento de software.',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\mans.jpg '),
(0,'Actualización de Proyectos', 'Servicio de Actualización técnica, Contenido y de imagen o diseño web.',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\actproy.jpg '),
(0,'Asesoría Técnica', 'Servicio de elaboración de informes, tareas o propuestas de nivel superior.',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\asesortec.JPG ') ;





-- Script de llenado de la tabla Tipo_desarrollador
INSERT INTO `knifeservicedb`.`Tipo_Desarrollador` (`Tipo_Desarrollador_Id`, `Descripción`) 
VALUES (1,'SCRUM MASTER'),(2,'DESARROLLADOR BACKEND'),(3,'DESARROLLADOR FRONTEND'),(4,'DESARROLLADOR JAVA'),(5,'DESARROLLADOR PYTHON');

