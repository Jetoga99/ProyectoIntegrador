-- truncate table
-- use  proyecto_integrador;
-- SELECT * FROM proyecto_servicios;
-- TRUNCATE desarrollador;




-- Script de llenado de la tabla Desarrollador
INSERT INTO `proyecto_integrador`.`Desarrollador` ( `Nombre`, `Apellidos`, `Email`, `Contraseña`, `Proyecto_Id`, `Tipo_Desarrollador`) 
VALUES ('Irving Alexis','Pascual Hernández','hpascual117@gmail.com','irvingpascual',3,1),
('José Crispin','Cruz Santoyo','jccruzsantoyo@gmail.com','josephcrispin',2,2),
('Aldo Antonio','Parra Cristino','aldocristino24@gmail.com','aldoantonio',3,2),
('Rodrigo de Jésus Sandoval Mérida','Sandoval Mérida','rodrigosm96@outlook.com','rodrigodejesus',5,2),
('Andres ','Tecpile Itehua','andrestecpile97@gmail.com','andrestecpile',4,5),
('Jesús','Torres García','jetoga99@gmail.com','jesustorres',3,4);


-- Script de llenado de la tabla Proyecto
INSERT INTO `proyecto_integrador`.`Proyecto` (`Proyecto_Id`, `Descripción`, `Costo`, `Fecha_Inicio`, `Fecha_Fin`, `Cliente`) 
VALUES (1,'mantenimiento de pagina web, implementar nuevas características.',12000,'2022-10-06','2022-10-12','la comercial mexicana '),
(2,'diseño e implentacion de pagina web',20000,'2022-10-12','2022-12-15','hamburguesas la doñita '),
(3,'mantenimiento de dispositivos de red.',12000,'2022-12-10','2022-12-10','Oxxo los pinos'),
(4,'Asesoría para instalación de red de equipos ',15000,'2022-11-03','2022-11-10','Ciber la vieja escuela '),
(5,'creacion de punto de venta para abarrotes.',20000,'2022-11-05','2022-11-10','Abarrotes El Irving Pacual');


-- Script de llenado de la tabla Proyecto_servicios
INSERT INTO `proyecto_integrador`.`Proyecto_Servicios` (`Proyecto_Proyecto_Id`, `Servicios_Servicios_Id`) 
VALUES (1,3),(2,1),(3,4),(4,2),(5,5);

-- Script de llenado de la tabla servicios
INSERT INTO `proyecto_integrador`.`Servicios` (`Servicio_Nombre`, `Servicio_Descripción`, `Imagen`) 
VALUES ('Diseño de páginas web', 'Servicio de creación y desarrollo de páginas web',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\dweb.jpg'),
('Diseño Base de Datos', 'Creación y desarrollo de aplicaciones para Android y IOS.',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\bd.jpg '),
('Mantenimiento de Sistemas', 'Servicio a Hardware, limpieza de equipos y mantenimiento de software.',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\mans.jpg '),
('Actualización de Proyectos', 'Servicio de Actualización técnica, Contenido y de imagen o diseño web.',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\actproy.jpg '),
('Asesoría Técnica', 'Servicio de elaboración de informes, tareas o propuestas de nivel superior.',
_binary 'C:\Users\andre\Desktop\final_project\ProyectoIntegrador\src\asesortec.JPG ') ;





-- Script de llenado de la tabla Tipo_desarrollador
INSERT INTO `proyecto_integrador`.`Tipo_Desarrollador` (`Tipo_Desarrollador_Id`, `Descripción`) 
VALUES (1,'SCRUM MASTER'),(2,'DESARROLLADOR BACKEND'),(3,'DESARROLLADOR FRONTEND'),(4,'DESARROLLADOR JAVA'),(5,'DESARROLLADOR PYTHON');






