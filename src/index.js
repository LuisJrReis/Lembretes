const express = require('express');
const app = express();
app.use(express.json());
const lembretes = {};
count = 0;

//#region *** Busca todos lembretes *** 
app.get('/lembretes', (req, res) => {
    res.send(lembretes);
});
//#endregion

//#region *** Cadastra e atualiza lembretes *** 
app.put('/lembretes', (req, res) => {
    count++;
    const { texto } = req.body;
    lembretes[count] = {count,texto};
    res.status(201).send(lembretes[count]);
});
//#endregion

//#region *** Coloca porta para rodar o servidor *** 
app.listen(4000, () => {
    console.log('Lembretes. Porta 4000')
})
//#endregion    