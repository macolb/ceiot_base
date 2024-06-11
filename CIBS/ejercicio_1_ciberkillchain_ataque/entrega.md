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

 * Obtener transferencias de pagos de los clientes al no saber el funcionamiento del sistema.
       
## Pasos para hacer el ataque

* Reconnaissance
  - Ingresar a la WebApp para clonar su interfaz y simular su forma de funcionamiento.
  - Ir a los bares para probar el sistema, ver como funciona y cuales son sus pasos para generar una orden.
  - Investigo que métodos de pago tiene habilitado.
  - Ingreso a la página del producto y redes sociales para obtener mas información de sus locales, ubicaciones, horarios, etc.
 
       1. T1596.001 - Search Open Websites/Domains: Social Media

* Weaponization

  - Preparar una webapp con la misma interfaz del sistema para controlar las canillas y generar las órdenes.
  - Preparar cuentas donde van a llegar las transferencias de los pagos.
  - Preparar impresiones y stickers de QR simil menú del local para distribuir en los bares que tienen el sistema.
 
       1. T1588.001 - Obtain Capabilities: Malware - Utilizar webapp clonada.
       2. T1608.003 - Stage Capabilities: Install Digital Certificate

* Delivery

  - Los QR van a ser distribuidos dentro y fuera del bar. Pueden ir pegados a las mesas o en los alrededores para engañar a los usuarios. 
     
       1. T1204.001 - User Execution: Malicious Link: Utilizar enlaces maliciosos en códigos QR.

* Exploit

  - Utilizar los QRs para que los usuarios ingresen a mi página clonada.
  - Ya sea la primera vez o no del cliente en el bar, al ser un sistema nuevo se espera que el usuario no se percate de que está entrando a una página diferente a la del sistema de las canillas.
 
       1. T1071.001 - Application Layer Protocol: Web Protocols: Aprovechar los protocolos web para hacer que los usuarios interactúen con las páginas clonadas.

* Installation

  - Logro que los usuarios entren a mi página clonada del control de canillas y pagos.
  - Simulo generar la orden para las canillas y hago que los usuarios me transfieran el pago a una cuenta.
  - Simulo ser una oferta o cupón para que los usuarios me transfieran el pago a una cuenta.
 
       1. T1090.003 - Proxy: Multi-hop Proxy: Utilizar proxies múltiples para ocultar la ubicación del atacante.
       2. T1078.003 - Valid Accounts: Local Accounts.

* Command & Control

  - Logro que el usuario me transfiera a mi cuenta cuando quiere usar las canillas u obtener crédito para su uso.
  - Es un ataque rápido donde se espera que las páginas clonadas vayan cambiando de host a medida que sean denunciadas.
  
       2. T1071.001 - Application Layer Protocol: Web Protocols
  
* Actions on Objectives
  
   - Obtengo el dinero en mi cuenta.
   - Las páginas clonadas van a ir cambiando de host a medida que sean denunciadas.
   - Las cuentas a donde es transferido el dinero se irán renovando. 
   - Los QRs pueden ser distribuídos nuevamente en los bares que tengan el sistema o ir rotando para ser más indetectable.
     
       1. T1485 - Data Destruction

