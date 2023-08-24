import React from 'react';
import { cmsInstance } from '../utils/httpinstance';
import moment from 'moment';
import _ from 'lodash';

const Sitemap = props => {
    return <div />;
};

Sitemap.getInitialProps = async ctx => {
    const { res } = ctx;
    let projectsXML = '';
    let data;
    const siteroot = process.env.LOCAL_BASE ? _.trimEnd(process.env.LOCAL_BASE, '/') : '';

    await cmsInstance
        .get('/api/Sitemap')
        .then(response => {
            data = response.data;
        })
        .catch(() => {});

    if (data) {
        data.map(d => {
            const url = _.trimEnd(`${siteroot}${d.url.replace('/home/', '/')}`, '/');

            projectsXML += `
        <url>
          <loc>${url}</loc>
          <lastmod>${moment(d.updatedAt).format('YYYY-MM-DD')}</lastmod>
        </url>`;
            return '';
        });
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${siteroot}</loc>
        <priority>1.00</priority>
      </url>
      ${projectsXML}
    </urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(xml);
    res.end();
};

export default Sitemap;
