const router = {
    local: false,
    urls: { 
        online: 'https://site-backend-5dbf9.web.app',
        local: 'http://localhost:5000'
    },
}

const getRoot = (route) => {
    const root = router.local ? router.urls.local : router.urls.online;
    return `${root}${route}`;
};

exports.setLocal = (local) => { router.local = local; }
exports.router = getRoot;