import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './status.scss';

const Status = ({online}) => (
    <span className={classNames('status', {'status--online': online})}>
        {online ? 'онлайн' : 'офлайн'}
    </span>
);

Status.propTypes = {
    online: PropTypes.bool
};

export default Status;