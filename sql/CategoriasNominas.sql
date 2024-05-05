CREATE TABLE infoPersonal (
    id_info_Personal INT PRIMARY KEY AUTO_INCREMENT,
    nombre_Completo VARCHAR(250) NOT NULL,
    genero ENUM("Masculino", "Femenino", "No Binario", "Otros") NOT NULL,
    fechaNacimiento DATE NOT NULL,
    nacionalidad VARCHAR(250) NOT NULL,
    numeroIdentificacionSocial VARCHAR(250) NOT NULL
)
CREATE TABLE datos_personales(
    id_datos_personales INT PRIMARY KEY AUTO_INCREMENT,
	Nombre	varchar(200),
	Fecha_de_nacimiento	date,
	RFC	varchar(200)
	CURP varchar(200)
	Sexo varchar(200)
	Estado_civil varchar(200)
	Nacionalidad varchar(200)
)