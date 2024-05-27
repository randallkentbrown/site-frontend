const axios = require('axios');

const routes = require("./backendRouter.js");
routes.setLocal(false);
const route = routes.router("/resume_uri");

const getResumeURI = async () => {
    return axios.get(route).then(res => res.data);
};

export default getResumeURI;