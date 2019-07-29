import React from 'react';
import orderBy from 'lodash.orderby';

import {DialogsItem} from '../';

import './Dialogs.scss';

const Dialogs = ({items, userId}) => (
    <div className='dialog'>
        {orderBy(items, ['created_at'], ['desc']).map(item => (
                <DialogsItem key={item._id} isMe={item.user._id === userId} {...item}/>
           ))}
    </div>
);

export default Dialogs;