import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import TagManager from 'react-gtm-module';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => {
    const {
        header,
        footer,
        ga_id: gaId,
        // search,
    } = props;

    useEffect(() => {
        const tagManagerArgs = {
            gtmId: gaId,
        };
        TagManager.initialize(tagManagerArgs);
    });

    return (
        <>
            <Header {...header} />
            <main className='main-content' id='main-content'>
                {props.children}
            </main>
            <Footer {...footer} />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    header: PropTypes.object,
    footer: PropTypes.object,
    ga_id: PropTypes.string,
};

Layout.defaultProps = {};

export default Layout;
