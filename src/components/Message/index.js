import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Time, CheckIcon} from '../';
import convertCurrentTime from 'utils/convertCurrentTime';

import waveSvg from 'assets/img/iconmonstr-sound-wave-1.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';

import './Message.scss';

const Message = ({ 
    avatar, 
    audio,
    user,  
    text, 
    date, 
    isMe, 
    isReaded, 
    attachments,
    isTyping 
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef(null);

    useEffect(() => {
        audioElem.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true);
            },
            false
        );
        audioElem.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false
        );
        audioElem.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false);
            },
            false
        );
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = audioElem.current && audioElem.current.duration || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        });
    }, []);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };


    return (
    <div className={classNames('message', {
        'message--isme': isMe,
        'message--typing': isTyping,
        'message--image': attachments && attachments.length === 1 && !text,
        'message--is-audio': audio
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
                <CheckIcon isMe={isMe} isTyping={isTyping} isReaded={isReaded} />
                {(audio || text || isTyping) && (<div className='message__bubble'>
                    {text && <p className='message__text'>{text}</p>}
                    {isTyping && (
                    <div className='message__typing'>
                        <span />
                        <span />
                        <span />
                    </div>
                    )}
                    {
                        audio && <div className='message__audio'>
                            <audio ref={audioElem} src={audio} preload='auto'></audio>
                            <div className='message__audio-progress' style={{width: progress + '%'}}>
                            </div>
                            <div className='message__audio-info'>
                                <div className='message__audio-btn'>
                                    <button onClick={togglePlay}>
                                        {
                                            isPlaying ? 
                                            (<img src={pauseSvg} alt='Pause svg' />) : 
                                            (<img src={playSvg} alt='Play svg' />)
                                        }
                                    </button>
                                </div>
                                <div className='message__audio-wave'>
                                    <img src={waveSvg} alt='Wave svg' />
                                </div>
                                <span className='message__audio-duration'>{convertCurrentTime(currentTime)}</span>
                            </div>
                        </div>
                    }
                </div>)}
           </div>
          
           {date && <span className='message__date'>
                <Time date={date}/>
            </span>}
        </div>
        
    </div>
)};

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
    isReaded: PropTypes.bool,
    audio: PropTypes.string
};

export default Message;