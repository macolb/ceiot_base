# Ejercicio CiberKillChain - Ataque

## Enunciado

Armar una cyberkillchain usando técnicas de la matriz de Att&ck para un escenario relacionado al trabajo práctico de la carrera.

Alumno: Macol Burna

El sistema de autoservicio para dispensado de cerveza cuenta con:
 * Un Firmware (canilla)
 * Una API (Back-end) que permite manejar los servicios como pagos, órdenes y autenticación
 * Una aplicación webapp para que el usuario genere el pedido
 * Una base de datos con los datos del sistema y los usuarios

## Objetivo del ataque

 * Obtener las credenciales de las canillas para dispensarme sin pagar
 * Obtener datos de la base simulando ser una canilla
 * Obtener credenciales de medios de pago
       
Pasos para hacer el ataque

* Reconnaissance
  - Reconocer IP pública del sistema
  - Identificar vulnerabilidades (Broker o Webapp)

* Weaponization
  - Ir a los bares para probar el sistema, como funciona y cuales son sus pasos
  - Que paso si reseteo las canillas y cuando prende tiene muchas peticiones? Tiene botón de reseteo a la vista? y el enchufe?
  - Qué métodos de pago tiene habilitado?
  - Tienen wifi libre? Dan su contraseña?

* Delivery
  - Puedo utilizar un QR pegado en la pantalla de la canilla para engañar a los usuarios y tomar el control de la pagina web mediante phishing para obtener las credenciales del método de pago
  - Puedo interceptar el mensaje de las canillas o de las órdenes que les generan para servir

* Exploit
  - Logro tomar control de las canillas
  - Logro hacer que los usuarios entren a mi página clonada de pago

* Installation
  - Si obtengo las credenciales de las canillas puedo hacer que el server colapse de peticiones.
  - Si logro simular una orden ya paga puedo hacer que las canillas dispensen sin pagar

* Command & Control
  - Obtengo las credenciales e informacion de los usuarios.
  - Logro que las canillas dispensen sin pagar.
  
* Actions on Objectives
  - Obtengo información de tarjetas para utilizarlas
  - Logro que los clientes envíen sus pagos a mí cuenta y no a la del bar
  - Me dispenso cervezar sin tener que pagar

