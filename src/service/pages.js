const axios = require('axios');

const routes = require("./backendRouter.js");
routes.setLocal(false);
const route = routes.router("/pages");

const getPages = async () => {
    return axios.get(route).then(res => res.data);
};

exports.getPages = getPages;