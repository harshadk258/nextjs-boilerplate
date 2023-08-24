import React from 'react';
import PropTypes from 'prop-types';

import style from './HomePage.module.scss';

const HomePage = props => {
    // const { items } = props;

    return (
        <div className={style.el}>
            <div className={style.container}>
                <div className={style.wrapper}>Home Page</div>
            </div>
        </div>
    );
};

HomePage.propTypes = {
    type: PropTypes.string,
    items: PropTypes.array,
};

HomePage.defaultProps = {};

export default HomePage;
