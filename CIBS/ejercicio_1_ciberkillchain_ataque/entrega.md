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

* Weaponization
  - Prepara un Front de la app de Mercado Pago.
  - Preparo una webapp con la misma interfaz del sistema para controlar las canillas.

* Delivery
  - Puedo utilizar un QR pegado en la pantalla de la canilla para engañar a los usuarios.
  - Si se genera el pedido a las canillas desde una página, puedo tener un host que se llame muy parecido ( .com en vez de .com.ar o que sea itapi.com en vez de itap.com).
  - Puedo en la misma red hacer que los usuarios entren a mi página mediante una invitacion mediante phishing. (T1204.001 - Malicius link)
  - Utilizar correos electrónicos de phishing para engañar. (T1566.002 - Spearphishing Link)

* Exploit
  - Logro hacer que los usuarios entren a mi página clonada del control de canillas.
  - Logro hacer que los usuarios entren a mi página clonada del método de pago (Mercado pago).

* Installation
  - Simulo ser la página para controlar las canillas y que ingresen los datos de la tarjeta ahí.
  - Simulo ser la página para controlar las canillas para redireccionarlos a mi página clonada de medio de pago (Mercado pago).
  - Simulo ser la página de medio de pago.

* Command & Control
  - Obtengo las credenciales del método de pago del usuario (Ej. Hacer Log In a Mercado pago diciendo que solo es para la primera vez).
  - Obtengo los datos de la tarjeta del usuario.
  
* Actions on Objectives
  - Obtengo información de tarjetas para utilizarlas.
  - Obtengo las credenciales del método de pago del usuario para ingresar y pasarme dinero a otra cuenta.

