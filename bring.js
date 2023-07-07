const fs = require('fs');

function bringInstructions() {
  try {
    const contenido = fs.readFileSync('pruebas.txt', 'utf8');
    const arrayDatos = contenido.split('\n');
    const users = arrayDatos.filter(Boolean);

   

    return users;
  } catch (err) {
    console.error(err);
    return null;
  }
}


function SentResult(dato) {

  var result = dato.toString();
  fs.writeFile('resultado.txt', result, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Datos enviados correctamente al archivo.');
  });
}



module.exports = {
  bringInstructions,
  SentResult
};



