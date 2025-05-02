const processNode = require('../src/core/processNode.js')
const processMultipleNode = require('../src/core/processMultipleNodes.js')

describe('Operaciones Validas processNode', () => {
  test('add', () => {
    const result = processNode({ operation: 'add', params: [1, 2, 3] })
    expect(result.response).toBe(6)
  })

  test('subtract', () => {
    const result = processNode({ operation: 'subtract', params: [10, 3] })
    expect(result.response).toBe(7)
  })

  test('multiply', () => {
    const result = processNode({ operation: 'multiply', params: [4, 5] })
    expect(result.response).toBe(20)
  })

  test('divide', () => {
    const result = processNode({ operation: 'divide', params: [20, 4] })
    expect(result.response).toBe(5)
  })

  test('sqrt', () => {
    const result = processNode({ operation: 'sqrt', params: [16] })
    expect(result.response).toBe(4)
  })

  test('power', () => {
    const result = processNode({ operation: 'power', params: [2, 3] })
    expect(result.response).toBe(8)
  })

  test('sqrt con numero negativo', () => {
    expect(() => processNode({ operation: 'sqrt', params: [-9] })).toThrow('No se puede calcular la raiz cuadrada de un numero negativo')
  })

})

describe('Operaciones Invalidas', () => {
  test('Operacion invalida', () => {
    expect(() => processNode({ operation: 'unknown', params: [1, 2] })).toThrow('operation no es valida')
  })

  test('Parametros vacios', () => {
    expect(() => processNode({ operation: 'add', params: [] })).toThrow('params debe de ser un array de numeros')
  })

  test('Parametros no numericos', () => {
    expect(() => processNode({ operation: 'add', params: [1, 'a'] })).toThrow('params debe de ser un array de numeros')
  })

  test('Division por cero', () => {
    expect(() => processNode({ operation: 'divide', params: [10, 0] })).toThrow('Division por cero')
  })

  test('sqrt con mas de un numero', () => {
    expect(() => processNode({ operation: 'sqrt', params: [9, 16] })).toThrow('raiz requiere un solo numero')
  })

  test('power con un solo numero', () => {
    expect(() => processNode({ operation: 'power', params: [2] })).toThrow('exponente requiere base y exponente')
  })
})

describe('Operaciones Validas multiples nodos', () => {
  test('processMultipleNode con operaciones validas', () => {
    const nodes = [
      { operation: 'add', params: [1, 2] },
      { operation: 'subtract', params: [10, 3] },
    ]
    const result = processMultipleNode(nodes)
    expect(result).toEqual([
      { operation: 'add', params: [1, 2], response: 3 },
      { operation: 'subtract', params: [10, 3], response: 7 },
    ])
  })

  test('processMultipleNode con un nodo invalido', () => {
    const nodes = [
      { operation: 'add', params: [1, 2] },
      { operation: 'unknown', params: [10, 3] },
    ]
    expect(() => processMultipleNode(nodes)).toThrow('operation no es valida')
  })
  test('processMultipleNode con todas las operaciones', () => {
    const input = [
      { operation: 'add', params: [1, 2] },
      { operation: 'subtract', params: [10, 5] },
      { operation: 'multiply', params: [3, 3] },
      { operation: 'divide', params: [8, 2] },
      { operation: 'sqrt', params: [16] },
      { operation: 'power', params: [3, 2] },
    ]
    const result = processMultipleNode(input)

    expect(result).toEqual([
      { operation: 'add', params: [1, 2], response: 3 },
      { operation: 'subtract', params: [10, 5], response: 5 },
      { operation: 'multiply', params: [3, 3], response: 9 },
      { operation: 'divide', params: [8, 2], response: 4 },
      { operation: 'sqrt', params: [16], response: 4 },
      { operation: 'power', params: [3, 2], response: 9 },
    ])
  })
})
