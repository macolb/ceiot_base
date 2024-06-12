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

  - Dar público conocimiento de la cuenta del bar a la que tienen que transferir.
  - Dar público conocimiento de la página del bar.
  - Implementar algún tipo de certificación que permita saber que la página es legítima.
    
* Command & Control

  - Análisis de Tráfico de Red. Monitorear y bloquear comunicaciones sospechosas hacia y desde la red, especialmente las que intenten utilizar protocolos web.
  - Emplear herramientas de monitoreo de red que inspeccionen el tráfico saliente en busca de patrones de comunicación sospechosos o inusuales.
  - Configurar reglas específicas para detectar conexiones salientes a dominios o IPs no reconocidos o poco confiables.
 
    1. Network Intrusion Prevention

* Installation

  - Concientizar a los usuarios de cuál es el aspecto real de la página y como diferenciarla de una clonada.
  - Utilizar un sistema de filtrado de URLs y DNS que bloquee el acceso a sitios web maliciosos o sospechosos.
  - Mantener listas negras actualizadas de dominios conocidos por phishing y ataques similares, y configurar políticas estrictas de navegación segura.

* Exploit

  - Enseñar al usuario cuales son los sitios seguros para escanear los QRs.
  - Enseñar al usuario cuáles son los pasos de orden y compra del sistema.
  - Customizar los QRs con algún estilo o logo para que sea mas difícil su copia.
 
    1. Web Content Filtering

* Delivery

  - Concientizar a los usuarios a que utilicen la red wifi que proporciona el local.
  - Concientizar a los empleados para que, ante un ataque, se inspeccione el lugar y se descarten los QRs maliciosos.
  - Capacitar al usuario para saber que sólo utilice el QR en la canilla o que se muestre mediante pantallas en el bar.
  - Capacitar a los empleados y usuarios para que reconozcan y eviten enlaces maliciosos, incluidos los códigos QR.
  - Educar sobre la verificación de la autenticidad de las páginas web y el peligro de escanear códigos QR no verificados.
 
    1. User Training

* Weaponization

  - Asegurar que todas las aplicaciones y servicios web usen certificados SSL/TLS válidos y estén registrados correctamente.
  - Implementar listas blancas de aplicaciones para asegurar que solo el software autorizado se pueda ejecutar en los sistemas.
  - Esto previene la instalación y ejecución de aplicaciones no autorizadas, incluyendo webapps clonadas.

  1. Application Whitelisting

* Reconnaissance

  - Ejecutar análisis de vulnerabilidades y pruebas de penetración de manera regular para identificar posibles debilidades en el sistema antes de que los atacantes las exploten.
  - Utilizar herramientas automatizadas de escaneo de vulnerabilidades y complementar con pruebas manuales en áreas críticas.
  - Aplicar prácticas de seguridad operativa para limitar la cantidad de información sensible disponible en sitios web y redes sociales.
  - Educar al personal sobre la importancia de mantener la confidencialidad de la información relacionada con el sistema de autoservicio.


