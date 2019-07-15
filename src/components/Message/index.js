import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import ruLocale from 'date-fns/locale/ru';
import checkmarkSvg from 'assets/img/checkmark.svg';
import checkmark2Svg from 'assets/img/checkmark2.svg';

import './Message.scss';

const Message = ({ 
    avatar, 
    user,  
    text, 
    date, 
    isMe, 
    isReaded, 
    attachments,
    isTyping 
}) => (
    <div className={classNames('message', {
        'message--isme': isMe,
        'message--typing': isTyping,
        'message--image': attachments && attachments.length === 1 && !text
        })}>
        <div className='message__avatar'>
            <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
        </div>
        <div className='message__content'>

                {attachments && (
                <div className='message__attachments'>
                    {attachments.map((item, index) => (
                    <div key={index} className='message__attachments-item'>
                        <img src={item.url} alt={item.filename} />
                    </div>
                    ))}
                </div>
                )}

        <div className='message__contentCheck'>
                { isMe && !isTyping ? (
                    isReaded ? (
                        <img src={checkmarkSvg} alt='checkmark icon'></img>
                    ) : (<img src={checkmark2Svg} alt='checkmark2 icon'></img>
                    )) : <img alt=''/>}
                {(text || isTyping) && (<div className='message__bubble'>
                    {text && <p className='message__text'>{text}</p>}
                    {isTyping && (
                    <div className='message__typing'>
                        <span />
                        <span />
                        <span />
                    </div>
                    )}
                </div>)}
           </div>
          
            <span className='message__date'>
            {date && distanceInWordsToNow(date, {addSuffix: true, locale: ruLocale})}
            </span>
        </div>
        
    </div>
);

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isMe: PropTypes.bool,
    isTyping: PropTypes.bool,
    isReaded: PropTypes.bool
};

export default Message;