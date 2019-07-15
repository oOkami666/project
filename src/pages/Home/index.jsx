import React from 'react';
import { Message } from 'components';

import './Home.scss';

const Home = () => (
    <section className='home'>

        <Dialogs 
        items = {[
            {
                user: {
                    fullname: 'Финтифлюш',
                    avatar: null
                }
            },
            text: 'Ололошка...'
        ]}/>

        <Message 
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
        
    </section>
);
   
export default Home;