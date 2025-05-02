
## Prueba tecnica - Calculadora Dinámica en Node.js

Este proyecto implementa una calculadora dinámica escrita en **Node.js** capaz de procesar operaciones matemáticas a través de una **API HTTP (POST)** o mediante la **línea de comandos (CLI)**.

---

##  Objetivo

Permitir el procesamiento de operaciones matemáticas (suma, resta, multiplicación, división, raíz cuadrada y exponente). descritas como objetos JSON llamados.  
Cada json tiene el siguiente formato:

```json
{
  "operation": "add",
  "params": [1, 2, 3]
}
```

Y devuelve el mismo json con un nuevo campo **'response'** que contiene el resultado de la operacion matematica:

```json
{
  "operation": "add",
  "params": [1, 2, 3],
  "response": 6
}
```


## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/santiOcampo01/PruebaTecnica.git
cd PruebaTecnica/calculatorNode
```

### 2. Instalar dependencias

```bash
npm install
```

---

##  Como usar

###  Usar como API HTTP 

para usarlo se puede usar una herramienta como Postman o `curl`.

#### 1. Iniciar el servidor
Iniciar el servidor Express:

```bash
node index.js
```

El servidor correra en `http://localhost:3000/`

####  Enviar un solo nodo

**POST** a la ruta `/` con:


```json
{
  "operation": "add",
  "params": [1, 2, 3]
}
```

#### Enviar múltiples nodos

```json
[
  { "operation": "add", "params": [1, 2] },
  { "operation": "multiply", "params": [4, 5] }
]
```

#### Respuesta esperada:

```json
[
  { "operation": "add", "params": [1, 2], "response": 3 },
  { "operation": "multiply", "params": [4, 5], "response": 20 }
]
```


---

### Extra tambien se hizo un script para usar la calculadora desde la consola para mayor facilidad y ver su funcionalidad.

Ejecutá este comando:

```bash
node cli.js
```

Luego ingresá la operación (`add`, `subtract`, `multiply`, `divide`, `sqrt`, `power`.) y los números separados por coma.  
Ejemplo:

```
Escribe una operación (add, subtract, etc.): multiply
Escribe los números separados por coma (ej: 3,4,5): 3,4,5
Resultado: 60
```

---

## Pruebas automatizadas

Los test se realizaron con **Jest** y cubren los siguientes casos:

- ✅ Operaciones válidas
- ❌ Casos con errores (ej: dividir por 0, operaciones inválidas, etc.)
- ✅ Procesamiento de múltiples nodos

### Ejecutar pruebas:

```bash
npm test
```




##  Validaciones implementadas

- `params` debe ser un array de números.
- `operation` debe ser una string válida.
- Se lanza error si:
  - Hay división por cero.
  - `sqrt` recibe más de un número o uno negativo.
  - `power` recibe menos de 2 parámetros.
  - Se recibe una operación inválida.
  - Se envían datos mal estructurados.



##  Autor

Desarrollado por **Santiago Mejía Ocampo**.

[LinkedIn](https://www.linkedin.com/in/santi-mejia-ocampo/)


## Tecnologías utilizadas
- Node.js
- Express
- Jest
