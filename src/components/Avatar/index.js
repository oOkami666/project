import React from 'react';
import generateAvatar from 'utils/generateAvatar';

import './Avatar.scss';

const Avatar = ({user}) => {
    if (user.avatar) {
        return (
        <img 
        src={user.avatar} 
        alt={`Avatar ${user.fullname}`}/>
        );
    } else {
        return (
        <div 
            style={{
                background: `linear-gradient(135deg, ${generateAvatar(user.fullname)} 40%, #fff)`
            }}
            className='avatar avatar--symbol'
        >
            {user.fullname.charAt(0)}
        </div>
        );
    }
};

export default Avatar;