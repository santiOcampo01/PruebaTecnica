const operations = require('../logic/operation.js')

function processNode(node) {
  const { operation, params } = node

  if (!Array.isArray(params) || params.length === 0 || !params.every(number => typeof number === 'number')) {
    throw new Error('params debe de ser un array de numeros')
  }

  if (!operation || typeof operation !== 'string') {
    throw new Error('operation debe de ser un string')
  }

  if(!['add', 'subtract', 'multiply', 'divide', 'sqrt', 'power'].includes(operation)) {
    throw new Error('operation no es valida')
  }

  let result = operations(operation, params)

  return { ...node, response: result }
}

module.exports = processNode
