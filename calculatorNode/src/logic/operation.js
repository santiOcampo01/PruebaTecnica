function operations(operation, params) {
  
  switch (operation) {

    case 'add':
      if (params.length < 2) throw new Error('sumar  requiere al menos dos numeros')
      return params.reduce((acc, curr) => acc + curr, 0)

    case 'subtract':
      if (params.length < 2) throw new Error('restar requiere al menos dos numeros')
      return params.slice(1).reduce((acc, curr) => acc - curr, params[0])

    case 'multiply':
      if (params.length < 2) throw new Error('multiplicar requiere al menos dos numeros')
      return params.reduce((acc, curr) => acc * curr, 1)

    case 'divide':
      if (params.length < 2) throw new Error('divide requiere al menos dos numeros')
      return params.slice(1).reduce((acc, curr) => {
        if (curr === 0) throw new Error('Division por cero')
        return acc / curr
      }, params[0])

    case 'sqrt':
      if (params.length !== 1) throw new Error('raiz requiere un solo numero')
      if (params[0] < 0) throw new Error('No se puede calcular la raiz cuadrada de un numero negativo')
      return Math.sqrt(params[0])

    case 'power':
      if (params.length !== 2) throw new Error('exponente requiere base y exponente')
      return Math.pow(params[0], params[1])
    
    default:
      throw new Error('operation no es valida')
  }
}
module.exports = operations
