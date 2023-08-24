import React from 'react';
import { cmsInstance } from '../utils/httpinstance';
import _ from 'lodash';

const Robots = props => {
    return <div />;
};

Robots.getInitialProps = async ctx => {
    const { res } = ctx;
    const siteroot = process.env.LOCAL_BASE ? _.trimEnd(process.env.LOCAL_BASE, '/') : '';

    let data;
    await cmsInstance
        .get('/api/robots')
        .then(response => {
            data = response.data;
        })
        .catch(() => {});

    if (data) {
        res.setHeader('Content-Type', 'text/plain');
        let robotsBody = '';
        robotsBody = data.CustomRobotsBody;
        const url = `${siteroot}/sitemap.xml`;
        robotsBody = `${robotsBody}\nSitemap: ${url}`;
        res.write(robotsBody);
        res.end();
    }
};

export default Robots;
