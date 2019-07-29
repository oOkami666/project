import React from 'react';
import { Message, Dialogs } from 'components';

import './Home.scss';

const Home = () => (
    <section className='home'>
        <Dialogs 
        userId = {1}
            items = {[
                {
                    _id: Math.random(),
                    text: 
                    'РНК состоит из длинной цепи, в которой каждое звено называется нуклеотидом.',
                    isReaded: true,
                    created_at: 'Tue May 31 2019 09:25:12',
                    user: {
                        isReaded: false,
                        _id: 1,
                        fullname: 'Финтифлюш',
                        avatar: null
                    }
                },
                {
                    _id: Math.random(),
                    text: 
                    'Что ты несешь!',
                    isReaded: true,
                    created_at: 'Tue May 31 2019 09:26:12',
                    user: {
                        _id: 0,
                        fullname: 'Сильвестр Сталлоне',
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Sylvester_Stallone.jpg?uselang=ru'
                    }
                }
            ]}
        />

        <Message 
        avatar='https://static6.depositphotos.com/1167801/651/i/450/depositphotos_6517777-stock-photo-rainbow-of-colorful-boxes.jpg' 
        date='Tue May 14 2019 09:19:12'
        //audio='https://notificationsounds.com/soundfiles/2bb232c0b13c774965ef8558f0fbd615/file-jingle-bells-sms.mp3'
        />

        {/*<Message 
        avatar='https://static6.depositphotos.com/1167801/651/i/450/depositphotos_6517777-stock-photo-rainbow-of-colorful-boxes.jpg' 
        text='Ля-Ля-Ля!'
        date='Tue May 14 2019 09:19:12'
        attachments = {[
            {
                filiname: 'image1.jpg',
                url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
            },
            {
                filiname: 'image2.jpg',
                url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
            },
            {
                filiname: 'image3.jpg',
                url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
            }
        ]}
        />

        <Message 
        avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcegVSvHtsuEwrT0KA1nmlp6y2k8verdzDjCT-JAjmtbiJ1zvog' 
        text='Три рубля!'
        date='Tue May 31 2019 09:25:12'
        isMe={true}
        isReaded={true}
        attachments = {[
            {
                filiname: 'image4.jpg',
                url: 'https://source.unsplash.com/100x100/?random=4&nature,water'
            }
        ]}
        />
        
        <Message 
        avatar='https://static6.depositphotos.com/1167801/651/i/450/depositphotos_6517777-stock-photo-rainbow-of-colorful-boxes.jpg' 
        date='Wed Jul 17 2019 13:38:13'     
        attachments = {[
            {
                filiname: 'image5.jpg',
                url: 'https://source.unsplash.com/100x100/?random=5'
            }
        ]}
        />

        <Message 
        avatar='https://static6.depositphotos.com/1167801/651/i/450/depositphotos_6517777-stock-photo-rainbow-of-colorful-boxes.jpg'      
        isMe={false}
        isTyping={true}
        />
    */}
    </section>
);
   
export default Home;