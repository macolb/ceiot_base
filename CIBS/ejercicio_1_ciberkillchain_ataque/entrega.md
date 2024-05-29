# Ejercicio CiberKillChain - Ataque

## Enunciado

Armar una cyberkillchain usando técnicas de la matriz de Att&ck para un escenario relacionado al trabajo práctico de la carrera.

Alumno: Macol Burna

El sistema de autoservicio para dispensado de cerveza cuenta con:
 * Un Firmware (canilla)
 * Una API (Back-end) que permite manejar los servicios como pagos, órdenes y autenticación de usuarios en una instancia de AWS
 * Una webapp hosteada para la interacción con el cliente y para generar los pedidos en una instancia de AWS
 * Una base de datos con los datos del sistema y los usuarios en buckets de AWS.

## Objetivo del ataque

 * Obtener credenciales de medios de pago del cliente y/o clonar información de tarjetas.
       
## Pasos para hacer el ataque

* Reconnaissance
  - Identificar vulnerabilidades (Webapp).
  - Ir a los bares para probar el sistema, ver como funciona y cuales son sus pasos para generar una orden.
  - Identifico medidas de seguridad.
  - Qué métodos de pago tiene habilitado?
  - Tienen wifi propio? dan la contraseña?
  - Es un sistema interno o esta hosteado en algún lado?
 
       1. T1598.001 - Phishing for Information: Spearphishing Link: Enviar correos electrónicos con enlaces maliciosos para recolectar información sobre los sistemas y usuarios.
       2. T1592.004 - Gather Victim Host Information: Active Scanning: Escaneo activo para identificar sistemas vulnerables y configuraciones de red.

* Weaponization
  - Prepara un Front de la app de Mercado Pago.
  - Preparo una webapp con la misma interfaz del sistema para controlar las canillas.
 
       1. T1059.007 - Command and Scripting Interpreter: JavaScript: Crear scripts maliciosos en JavaScript para utilizar en la webapp clonada.
       2. T1608.003 - Stage Capabilities: Install Digital Certificate: Preparar certificados digitales falsos para que las páginas clonadas parezcan legítimas.

* Delivery
  - Puedo utilizar un QR pegado en la pantalla de la canilla para engañar a los usuarios.
  - Si se genera el pedido a las canillas desde una página, puedo tener un host que se llame muy parecido ( .com en vez de .com.ar o que sea itapi.com en vez de itap.com).
  - Puedo en la misma red hacer que los usuarios entren a mi página mediante una invitacion mediante phishing.
  - Utilizar correos electrónicos de phishing para engañar.
 
       1. T1204.001 - User Execution: Malicious Link: Utilizar enlaces maliciosos en QR codes, correos electrónicos de phishing o redes WiFi comprometidas.
       2. T1566.002 - Phishing: Spearphishing Link: Enviar correos electrónicos específicos a los usuarios para que accedan a páginas clonadas.

* Exploit
  - Logro hacer que los usuarios entren a mi página clonada del control de canillas.
  - Logro hacer que los usuarios entren a mi página clonada del método de pago (Mercado pago).
 
       1. T1071.001 - Application Layer Protocol: Web Protocols: Aprovechar los protocolos web para hacer que los usuarios interactúen con las páginas clonadas.
       2. T1566.003 - Phishing: Spearphishing via Service: Utilizar servicios legítimos para enviar enlaces de phishing.

* Installation
  - Simulo ser la página para controlar las canillas y (1) que ingresen los datos de la tarjeta ahí o (2) para redireccionarlos a mi página clonada de medio de pago (Mercado pago).
  - Simulo ser la página de medio de pago.

* Command & Control
  - Obtengo las credenciales del método de pago del usuario (Ej. Hacer Log In a Mercado pago diciendo que solo es para la primera vez).
  - Obtengo los datos de la tarjeta del usuario.
 
       1. T1071.001 - Application Layer Protocol: Web Protocols: Comunicación de comando y control a través de protocolos web para filtrar credenciales.
       2. T1090.003 - Proxy: Multi-hop Proxy: Utilizar proxies múltiples para ocultar la ubicación del atacante.
  
* Actions on Objectives
  - Obtengo información de tarjetas para utilizarlas.
  - Obtengo las credenciales del método de pago del usuario para ingresar y pasarme dinero a otra cuenta.
 
       1. T1071.001 - Application Layer Protocol: Web Protocols: Transferir información de pago robada utilizando protocolos web.
       2. T1071.003 - Application Layer Protocol: Mail Protocols: Enviar datos de tarjetas y credenciales a través de protocolos de correo.

