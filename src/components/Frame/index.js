import React from 'react';
import classNames from 'classnames';

import './Frame.scss';

const Frame = ({children, className}) => (
    <div className={classNames('frame', className)}>
        {children}
    </div>
);

export default Frame;