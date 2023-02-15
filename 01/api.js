const axios = require('axios');

const abstractAxios = axios.create({
    baseURL: `https://companyenrichment.abstractapi.com/v1/`
});

module.exports = abstractAxios;