import getPages from './pages';
import getResumeURI from './resume_uri';

// Service encompassing all routes to the backend
class RouterService {

    constructor() {

    }

    // Method to get the site's pages
    pages() {
        return getPages();
    }

    // Method to get the URI of my resumes
    resumeURI() {
        return getResumeURI();
    }

}

// a new service is initialized file loads. default service.
export default RouterService;