const readline = require('readline');
const processNode = require('./core/processNode.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe una operacion de la calculadora (add, subtract, multiply, divide, sqrt, power.): ', operation => {
  rl.question('Escribe los numeros separados por coma (ej: 1,2,3): ', input => {
    const params = input.split(',').map(Number)
    try {
      const result = processNode({ operation, params })
      console.log('Resultado:', result)
    } catch (error) {
      console.error('Error:', error.message)
    } finally {
      rl.close()
    }
  })
})
