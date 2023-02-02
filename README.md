# Prueba técnica LivingLab - Universidad de La Sabana
Este repositorio contiene una prueba técnica para el LivingLab de la Universidad de La Sabana, en el cual se desarrolla una aplicación de gestión de equipos y solicitudes.

![Implementación](/images/implementation.PNG)

## Formulario de gestión de equipos
El formulario de gestión de equipos está construido utilizando Formik y Yup, dos bibliotecas de validación de formularios para React. Con ellas, se puede crear un formulario de manera fácil y rápida, además de permitir la validación de los campos antes de enviar el formulario.

## Sección de gestión del equipo
En la sección de gestión del equipo, se muestra un listado de equipos disponibles, los cuales se pueden editar al clickear uno de ellos. Los campos del formulario se llenarán automáticamente con los datos del equipo seleccionado.

## Sección de solicitudes
En la sección de solicitudes, se encuentran tres botones: "Aceptar", "Rechazar" y "Eliminar". Con ellos, se puede gestionar las solicitudes de los equipos. Al clickear en "Aceptar", se aceptará la solicitud; al clickear en "Rechazar", se rechazará la solicitud; y al clickear en "Eliminar", se eliminará la solicitud.

## Instalación
Para instalar y ejecutar este proyecto, siga los siguientes pasos:

* Clone este repositorio en su máquina local: git clone https://github.com/CamSP/prueba-tecnica-livinglab-2023.git
* Acceda a la carpeta del proyecto: cd .\pt_livinglab\
* Instale las dependencias: npm install
* Ejecute la aplicación: npm start

## Licencia
Este proyecto está bajo la licencia MIT. Para más información, consulte el archivo [LICENSE](LICENSE)