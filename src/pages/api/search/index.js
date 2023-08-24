import { cmsInstance } from '../../../utils/httpinstance';

export default (req, res) => {
    return new Promise(resolve => {
        const { method } = req;
        switch (method) {
            case 'GET':
                return getSearch(req, res);
            case 'POST':
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;
            default:
                res.setHeader('Allow', ['GET']);
                res.status(405).end(`Method ${method} Not Allowed`);
                resolve();
        }
    });
};

const getSearch = (req, res) => {
    return new Promise(resolve => {
        const { keywords, types, page } = req.query;
        cmsInstance
            .get(`/api/search?keywords=${keywords}&types=${types}&page=${page}`, {})
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response.data));
            })
            .catch(error => {
                res.status(403).end(`Error: ${error}`);
                resolve();
            });
    });
};
