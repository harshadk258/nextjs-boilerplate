import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import Head from 'next/head';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import TagManager from 'react-gtm-module';
//* Redux Store
import { wrapper } from '../redux/store';
//* Style
import '../styles/global.scss';
import '../styles/fonts.scss';
import '../styles/icon.scss';
import '../styles/form.scss';

const MyApp = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);

    useEffect(() => {
        if (process.env.GTM_ID) {
            TagManager.initialize({ gtmId: process.env.GTM_ID });
        }
    }, []);

    return (
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={store.__persistor}> */}
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1' />
            </Head>
            <Component {...props.pageProps} />
            {/* </PersistGate> */}
        </Provider>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const { res } = ctx;
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    if (res) {
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    }

    return { pageProps };
};

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.object,
};

MyApp.defaultProps = {};

export default MyApp;
