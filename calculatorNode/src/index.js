const express = require('express');
const app = express();
const processNode = require('./core/processNode.js');
const processMultipleNodes = require('./core/processMultipleNodes.js')

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.post('/', (req, res) => {
    try {
        const data = req.body;
console.log('Body recibido:', data)
        if(Array.isArray(data)) {
            const result = processMultipleNodes(data)
            console.log('Resultado:', result)
            return res.json(result)
        }

        if(typeof data === 'object' && data !== null) {
            const result = processNode(data);
            console.log('Resultado:', result)
            return res.json(result)
        }
        

        return res.status(400).json({error: 'Debe de ser un objeto o un array de objetos'})
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    })

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })