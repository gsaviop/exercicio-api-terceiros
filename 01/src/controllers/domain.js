const axios = require('axios');
const fs = require('fs');

async function retornarObjetoEmpresa(req, res) {
    const { dominioEmpresa } = req.query;
    const apiKey = `c920508dc8f24fdea93ad2cdff3aa58b`;
    
    const url = `https://companyenrichment.abstractapi.com/v1/?api_key=${apiKey}&domain=${dominioEmpresa}`

    try {
        const response = await axios.get(url);
        const empresa = response.data;
        console.log(empresa);

        if(empresa.name) {
            const empresas = JSON.parse(fs.readFileSync('empresas.json', 'utf-8'));
            
            empresas.push(empresa);

            fs.writeFileSync('empresas.json', JSON.stringify(empresas));
            
            return res.send(empresa);
        }
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erro ao consultar a API externa');
    }
}

module.exports = retornarObjetoEmpresa;