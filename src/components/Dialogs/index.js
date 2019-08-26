import React from 'react';
import orderBy from 'lodash.orderby';
import {Input, Empty} from 'antd';

import {DialogsItem} from '../';

import './Dialogs.scss';

const Dialogs = ({items, userId, onSearch, currentDialogId, inputValue, onSelectDialog}) => (
    
    <div className='dialog'>
        <div className='dialog-search'>
            <Input.Search
                placeholder="Поиск по диалогам"
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
            />
        </div>
        <div className='dialog-list'>
            {items.length ? orderBy(items, ['created_at'], ['desc']).map(item => (
                <DialogsItem 
                onSelect={onSelectDialog} 
                key={item._id} 
                isMe={item.user._id === userId}
                currentDialogId={currentDialogId}
                {...item}/>
            )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Диалог не найден'/>}     
        </div>
    </div>
);

export default Dialogs;