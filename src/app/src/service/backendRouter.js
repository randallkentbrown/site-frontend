const router = {
    local: false,
    urls: { 
        online: 'https://site-backend-5dbf9.web.app',
        local: 'http://localhost:5000'
    },
}

// Returns the full address of a route; i.e. given route appended to the designated router address
const routeFullAddress = (route) => {
    const root = router.local ? router.urls.local : router.urls.online;
    return `${root}${route}`;
};

// method to set the router 
const setLocal = (local) => { router.local = local; }

// Exports a function to set whether the 
exports.setLocal = setLocal;
exports.router = routeFullAddress;
