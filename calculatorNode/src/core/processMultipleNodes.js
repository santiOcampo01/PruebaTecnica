const processNode = require('./processNode.js');

function processMultipleNodes(nodes) {
  if (!Array.isArray(nodes)) {
    throw new Error('El argumento debe ser un array de objetos')
  }

  return nodes.map(node => processNode(node))
}

module.exports = processMultipleNodes