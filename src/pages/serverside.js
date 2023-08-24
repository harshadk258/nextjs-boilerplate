import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { wrapper } from '../redux/store';
import Layout from '../layout';
// import { render } from '../components/render';
import { getPage } from '../redux/page/page.action';
import { pageGetData } from '../redux/page/page.selector';
// import { getGlobal } from '../redux/global/global.action';
// import { globalGetData, globalInit } from '../redux/global/global.selector';
import HomePage from '../components/HomePage';
import Todo from '../components/Todo';

const IndexPage = props => {
    const { Global, Seo } = props;

    return (
        <Layout {...Global}>
            <NextSeo title={Seo.pageTitle} description={Seo.pageDescription} canonical={Seo.pageUrl} />
            <Head>
                <link rel='shortcut icon' href={Global.favicon?.url} />
                <meta name='title' content={Seo.pageTitle} />
                <meta name='keywords' content={Seo.pageKeywords} />
                <meta property='og:url' content={Seo.pageUrl} />
                <meta property='og:title' content={Seo.pageOgTitle} />
                <meta property='og:description' content={Seo.pageOgDescription} />
                <meta property='og:image' content={Seo.pageOgImage} />
            </Head>
            <h1>Server Side Page</h1>
            <HomePage />
            <Todo />
        </Layout>
    );
};

// IndexPage.getInitialProps = wrapper.getInitialPageProps(store => async ctx => {
//     const { query } = ctx;
//     const { lang, preview, pageId } = query;
//
//     const { dispatch, getState } = store;
//
//     await dispatch(getPage('home', lang, preview, pageId));
//     const PageData = pageGetData(getState());
//
//     console.log(PageData);
//     //
//     // // global header, footer
//     // const isGlobalInit = globalInit(getState());
//     //
//     // if (!isGlobalInit) {
//     //     await dispatch(getGlobal(lang));
//     // }
//     //
//     // const GlobalData = globalGetData(getState());
//     // const Global = GlobalData.data;
//
//     const Global = {
//         favicon: {
//             url: '/favico.ico',
//         },
//     };
//
//     // const Global = reformatGlobal(PageData.Global, Labels, lang);
//     const Seo = PageData.SEO;
//     // const Contents = PageData.contents;
//
//     return {
//         Global,
//         Seo,
//     };
// });

export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
    const { query } = ctx;
    const { lang, preview, pageId } = query;

    const { dispatch, getState } = store;

    await dispatch(getPage('home', lang, preview, pageId));
    const PageData = pageGetData(getState());

    console.log(getState());
    //
    // // global header, footer
    // const isGlobalInit = globalInit(getState());
    //
    // if (!isGlobalInit) {
    //     await dispatch(getGlobal(lang));
    // }
    //
    // const GlobalData = globalGetData(getState());
    // const Global = GlobalData.data;

    const Global = {
        favicon: {
            url: '/favico.ico',
        },
    };

    // const Global = reformatGlobal(PageData.Global, Labels, lang);
    const Seo = PageData.SEO;
    // const Contents = PageData.contents;

    return {
        props: {
            Global,
            Seo,
        },
    };
});

IndexPage.propTypes = {
    Global: PropTypes.object,
    Seo: PropTypes.object,
    Contents: PropTypes.array,
};

export default IndexPage;
