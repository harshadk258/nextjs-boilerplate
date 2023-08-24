import React from 'react';
import PropTypes from 'prop-types';
// import { useMediaQuery } from '@react-hook/media-query';
// import { useDispatch } from 'react-redux';

import style from './Footer.module.scss';

const Footer = props => {
    // const { title, logoImage, logoLink, navigation, copyrightText } = props;

    // const isMobile = useMediaQuery('only screen and (max-width: 599px)');

    return <footer className={style.el} id='footer' />;
};

Footer.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.array,
    logoImage: PropTypes.object,
    logoLink: PropTypes.string,
    copyrightText: PropTypes.string,
};

Footer.defaultProps = {};

export default Footer;
