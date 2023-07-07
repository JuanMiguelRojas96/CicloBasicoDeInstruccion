const { bringInstructions, SentResult } = require('./bring.js');

// Importar funciones necesarias para el procesador

// Declaración de registros
let accumulator = 0; // Registro acumulador
const memory = new Map(); // Memoria
let icr = 0; // Registro ICR (Instruction Counter Register)
let mar = 0; // Registro MAR (Memory Address Register)
let mdr = 0; // Registro MDR (Memory Data Register)
let uc = ""; // Unidad de Control
let alu = 0; // Unidad Aritmético-Lógica (ALU)

var instructions = bringInstructions()

// Obtener las instrucciones desde el archivo externo

function executeInstructions() {
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    const [opcode, arg1, arg2, arg3] = instruction.split(' ');

    // Ejecución de las instrucciones

    if (opcode === 'SET') {
      // Instrucción SET: Guardar un valor en la memoria
      if (arg1 !== 'NULL' && arg2 !== 'NULL') {
        memory.set(arg1, parseInt(arg2));
      }
    } else if (opcode === 'ADD') {
      // Instrucción ADD: Sumar dos valores y almacenar el resultado
      if (arg1 !== 'NULL') {
        if (arg2 !== 'NULL' && arg3 !== 'NULL') {
          memory.set(arg3, memory.get(arg1) + memory.get(arg2));
        } else {
          accumulator += memory.get(arg1);
        }
      }
    } else if (opcode === 'SUB') {
      // Instrucción SUB: Restar dos valores y almacenar el resultado
      if (arg1 !== 'NULL') {
        if (arg2 !== 'NULL' && arg3 !== 'NULL') {
          memory.set(arg3, memory.get(arg1) - memory.get(arg2));
        } else {
          accumulator -= memory.get(arg1);
        }
      }
    } else if (opcode === 'MUL') {
      // Instrucción MUL: Multiplicar dos valores y almacenar el resultado
      if (arg1 !== 'NULL') {
        if (arg2 !== 'NULL' && arg3 !== 'NULL') {
          memory.set(arg3, memory.get(arg1) * memory.get(arg2));
        } else {
          console.log('La multiplicación no es compatible con un valor inmediato/directo/constante.');
        }
      }
    } else if (opcode === 'DIV') {
      // Instrucción DIV: Dividir dos valores y almacenar el resultado entero
      if (arg1 !== 'NULL' && arg2 !== 'NULL') {
        if (memory.get(arg2) !== 0) {
          memory.set(arg2, Math.floor(memory.get(arg1) / memory.get(arg2)));
        } else {
          console.log('División entre cero.');
        }
      }
    } else if (opcode === 'INC') {
      // Instrucción INC: Incrementar el valor de un registro en 1
      if (arg1 !== 'NULL') {
        memory.set(arg1, memory.get(arg1) + 1);
      }
    } else if (opcode === 'DEC') {
      // Instrucción DEC: Decrementar el valor de un registro en 1
      if (arg1 !== 'NULL') {
memory.set(arg1, memory.get(arg1) - 1);
      }
    } else if (opcode === 'MOV') {
      // Instrucción MOV: Mover el valor de un registro a otro y eliminar el registro original
      if (arg1 !== 'NULL' && arg2 !== 'NULL') {
        memory.set(arg2, memory.get(arg1));
        memory.delete(arg1);
      }
    } else if (opcode === 'LDR') {
      // Instrucción LDR: Cargar el valor de una dirección de memoria en el registro acumulador
      if (arg1 !== 'NULL') {
        accumulator = memory.get(arg1);
      }
    } else if (opcode === 'STR') {
      // Instrucción STR: Guardar el valor del registro acumulador en una dirección de memoria
      if (arg1 !== 'NULL') {
        memory.set(arg1, accumulator);
      }
    } else if (opcode === 'BEQ') {
      // Instrucción BEQ: Realizar una comparación y saltar a una dirección de memoria si es igual a cero
      if (arg1 !== 'NULL') {
        if (arg2 !== 'NULL' && arg3 !== 'NULL') {
          if (accumulator - memory.get(arg2) === 0) {
            memory.set(arg3, memory.get(arg2));
          }
        } else if (arg2 !== 'NULL') {
          if (accumulator === 0) {
            memory.set(arg2, accumulator);
          }
        }
      }
    } else if (opcode === 'Y') {
      // Instrucción Y: Realizar una operación lógica AND
    } else if (opcode === 'O') {
      // Instrucción O: Realizar una operación lógica OR
    } else if (opcode === 'SHW') {
      // Instrucción SHW: Mostrar el valor de un registro o dirección de memoria
      if (arg1 !== 'NULL') {
        if (arg1 === 'ACC') {
          console.log('Valor en el registro acumulador:', accumulator);
        } else if (arg1 === 'ICR') {
          console.log('Valor en el registro ICR:', icr);
          SentResult(icr)
        } else if (arg1 === 'MAR') {
          console.log('Valor en el registro MAR:', mar);
          SentResult(mar)
        } else if (arg1 === 'MDR') {
          console.log('Valor en el registro MDR:', mdr);
          SentResult(mdr)
        } else if (arg1 === 'UC') {
          console.log('Valor en la Unidad de Control:', uc);
          SentResult(mar)
        } else {
          console.log('Valor en la dirección de memoria', arg1 + ':',memory.get(arg1));
          SentResult(memory.get(arg1))
        }
      }
    } else if (opcode === 'END') {
      // Instrucción END: Finalizar la ejecución del programa
      return;
    } else {
      console.log('Instrucción no reconocida.');
    }
  }
}

// Ejecutar las instrucciones
executeInstructions();

