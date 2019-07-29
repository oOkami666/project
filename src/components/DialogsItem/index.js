import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';

import './DialogsItem.scss';
import CheckIcon from '../CheckIcon';

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(
            created_at,
            'HH:mm');
    } else {
        return format(
            created_at,
            'DD.MM.YYYY');
    }
};

const GetAvatar = avatar => {
    if (avatar) {
        return (
        <img src={avatar} alt=''/>
        );
    } else {

    }
}

const DialogsItem = ({user, text, unreaded, isMe, created_at}) => (
    <div 
        className={classNames('dialog__item', {
        'dialog__item--online': user.isOnline
        })}
    >
        <div className='dialog__item-avatar'>
            {GetAvatar(user.avatar)}
        </div>
        <div className='dialog__item-info'>
            <div className='dialog__item-info-top'>
                <b>{user.fullname}</b>
                <span>
                {getMessageTime(created_at)}
                </span>
            </div>
            <div className='dialog__item-info-buttom'>
                <p>{text}</p>
                {isMe && <CheckIcon isMe={true} isReaded={user.isReaded} isTyping={false} />}
                {unreaded > 0 && (<div className='dialog__item-info-buttom-counter'>{unreaded > 9 ? '+9' : unreaded}</div>)}
            </div>
        </div>
    </div>
);

export default DialogsItem;