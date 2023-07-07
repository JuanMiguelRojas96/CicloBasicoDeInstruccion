** Ciclo Básico de instrucción**

Este código implementa un Ciclo Básico de instrucción utilizando JavaScript. El procesador es capaz de ejecutar una serie de instrucciones definidas en un archivo externo y realizar operaciones aritméticas, lógicas y de control de flujo.

**Requisitos**
- Node.js instalado en el sistema.

**Instrucciones**

1. Descarga el código fuente y guárdalo en una carpeta.

2.Ejecuta el siguiente comando para instalar las dependencias:
   ```
   npm install
   ```

3. Asegúrate de tener el archivo `bring.js` en la misma carpeta que el archivo principal.

4. Abre una terminal o línea de comandos y navega hasta la carpeta donde se encuentra el código.

5. Ejecuta el siguiente comando para iniciar la ejecución del procesador de instrucciones:

   ```
   node index.js
   ```

5. El procesador leerá las instrucciones del archivo externo y las ejecutará una por una. Los resultados o mensajes generados por las instrucciones se mostrarán en la consola y se guardaron en el archivo resultado.txt.

**Estructura del Código**

- El archivo `bring.js` contiene una función `bringInstructions()` que se encarga de leer las instrucciones desde un archivo externo y retornarlas como un array y una funcion `SentResult()` que se encargara de guardar el resultado en el archivo resultado.txt.

- El archivo principal define una serie de registros y variables necesarias para el procesamiento de las instrucciones.

- La función `executeInstructions()` se encarga de ejecutar las instrucciones una por una.

- Cada instrucción se evalúa dentro de una estructura condicional (`if-else if-else`) y se realiza la operación correspondiente según el tipo de instrucción.

- Algunas instrucciones realizan operaciones aritméticas, como sumar, restar o multiplicar valores. Otras instrucciones controlan el flujo del programa, como saltar a una dirección de memoria si se cumple una condición.

- Las instrucciones de visualización (`SHW`) muestran los valores almacenados en registros o direcciones de memoria en la consola.

- El procesamiento de instrucciones finaliza cuando se encuentra la instrucción `END`.

**Importante**

- Asegúrate de que el archivo externo de instrucciones contenga las instrucciones en el formato correcto y siga las reglas de sintaxis establecidas en el código principal.

- Si deseas realizar modificaciones en las instrucciones o agregar nuevas funcionalidades, puedes editar el archivo principal según tus necesidades.
