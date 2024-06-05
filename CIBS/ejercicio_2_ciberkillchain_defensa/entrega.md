# Ejercicio CiberKillChain - Defensa

## Alumno

Alumno: Macol Burna

El sistema de autoservicio para dispensado de cerveza cuenta con:

  - Un Firmware (canilla)
  - Una API (Back-end) que permite manejar los servicios como pagos, órdenes y autenticación de usuarios en una instancia de AWS
  - Una webapp hosteada para la interacción con el cliente y para generar los pedidos en una instancia de AWS
  - Una base de datos con los datos del sistema y los usuarios en buckets de AWS.

## Objetivo de la defensa

Desarrollar la defensa en función del ataque planteado en orden inverso. No es una respuesta a un incidente, hay que detectar el ataque independientemente de la etapa. Para cada etapa elegir una sola defensa, la más importante, considerar recursos limitados.

## Pasos para hacer la defensa

* Actions on Objectives

  - Monitoreo de anomalías en Transacciones
  - Configurar alertas para transacciones sospechosas o se realicen en ubicaciones geográficas atípicas.

* Command & Control

  - Análisis de Tráfico de Red
  - Implementación: Emplear herramientas de monitoreo de red que inspeccionen el tráfico saliente en busca de patrones de comunicación sospechosos o inusuales.
  - Configurar reglas específicas para detectar conexiones salientes a dominios o IPs no reconocidos o poco confiables.

* Installation

  - Utilizar un sistema de filtrado de URLs y DNS que bloquee el acceso a sitios web maliciosos o sospechosos.
  - Mantener listas negras actualizadas de dominios conocidos por phishing y ataques similares, y configurar políticas estrictas de navegación segura.

* Exploit

  - Autenticación Multifactor (MFA)
  - Requerir autenticación multifactor para el acceso a todos los sistemas críticos, incluyendo la webapp y la plataforma de pagos.
  - Implementar autenticación (token/ verificación de dos pasos) al menos para las operaciones sensibles y accesos administrativos.

* Delivery

  - Protección contra Phishing
  - Desplegar soluciones anti-phishing que analicen y bloqueen correos electrónicos maliciosos antes de que lleguen a los usuarios.
  - Utilizar una combinación de servicios de filtrado de correo y entrenamiento de concientización de seguridad para los empleados y usuarios.
  - Enseñar al usuario que solo se puede comprar frente a la canilla o que el QR esté en una pantalla del local.

* Weaponization

  - Asegurar que todas las aplicaciones y servicios web usen certificados SSL/TLS válidos y estén registrados correctamente.
  - Realizar auditorías periódicas de los certificados utilizados y asegurar que solo aplicaciones y APIs legítimas puedan interactuar con el sistema.

* Reconnaissance

  - Análisis de Vulnerabilidades y Penetración Regular
  - Ejecutar análisis de vulnerabilidades y pruebas de penetración de manera regular para identificar posibles debilidades en el sistema antes de que los atacantes las exploten.
  - Utilizar herramientas automatizadas de escaneo de vulnerabilidades y complementar con pruebas manuales en áreas críticas.


