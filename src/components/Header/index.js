import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import router from 'next/router';
// import { useRouter } from 'next/router';
// import { useWindowHeight } from '@react-hook/window-size/throttled';
import { useMediaQuery } from '@react-hook/media-query';

import style from './Header.module.scss';

const Header = props => {
    // const {
    //     logoImage,
    //     logoLink,
    //     navigation,
    //     secondNavigation,
    //     search,
    //     socialMedia,
    // } = props;

    const isDesktop = useMediaQuery('only screen and (min-width: 768px)');

    useEffect(() => {
        // if (isDesktop) {
        // }
    }, [isDesktop]);

    return (
        <header className={[style.el].join(' ')}>
            <div className={[style.container, 'container'].join(' ')} />
        </header>
    );
};

Header.propTypes = {
    logoImage: PropTypes.object,
    logoLink: PropTypes.string,
    navigation: PropTypes.array,
    secondNavigation: PropTypes.array,
    search: PropTypes.object,
    socialMedia: PropTypes.array,
    noSplash: PropTypes.bool,
};

Header.defaultProps = {};

export default Header;
