import React from 'react';
import PropTypes from 'prop-types';
import checkmarkSvg from 'assets/img/checkmark.svg';
import checkmark2Svg from 'assets/img/checkmark2.svg';

const CheckIcon = ({isMe, isTyping, isReaded}) => 
isMe && !isTyping ? (
    isReaded ? (
        <img src={checkmarkSvg} alt='checkmark icon'></img>
    ) : (<img src={checkmark2Svg} alt='checkmark2 icon'></img>
    )) : <img alt=''/>

CheckIcon.propTypes = {
    isMe: PropTypes.bool,
    isTyping: PropTypes.bool,
    isReaded: PropTypes.bool
};

export default CheckIcon;