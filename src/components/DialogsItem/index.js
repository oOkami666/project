import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';

import {Avatar} from '../';
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

const DialogsItem = ({currentDialogId, _id, user, text, unreaded, isMe, created_at, onSelect}) => (
    <div 
        className={classNames('dialog-list__item', {
        'dialog-list__item--online': user.isOnline,
        'dialog-list__item--selected': currentDialogId === _id
        })}
        onClick={onSelect.bind(this, _id)}
    >
        <div className='dialog-list__item-avatar'>
            <Avatar user={user} />
        </div>
        <div className='dialog-list__item-info'>
            <div className='dialog-list__item-info-top'>
                <b>{user.fullname}</b>
                <span>
                {getMessageTime(created_at)}
                </span>
            </div>
            <div className='dialog-list__item-info-buttom'>
                <p>{text}</p>
                {isMe && <CheckIcon isMe={true} isReaded={user.isReaded} isTyping={false} />}
                {unreaded > 0 && (<div className='dialog-list__item-info-buttom-counter'>{unreaded > 9 ? '+9' : unreaded}</div>)}
            </div>
        </div>
    </div>
);

export default DialogsItem;