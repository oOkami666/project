import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from 'components';

import './Messages.scss';

const Messages = ({ blockRef, isLoading, items }) => {
    return (
        <div 
        ref={blockRef}
        className={classNames('messages', {'messages--loading': isLoading})}>
            {(isLoading
            ) ? (
                <Spin size='large' tip='Загрузка диалога...'></Spin>
            ) : (
                items
            ) ? (
                items.length === 0
            ) ? (
                <Empty description='Вы еще не начали диалог с данным пользователем' />
            ) : (
                items.map(item =><Message key={item._id} {...item} />)
            ) : (
                <Empty description='Выберите диалог...' />
            )}
        </div>
    );
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;