import React from 'react';
import { Message } from 'components';

import './Home.scss';

const Home = () => (
    <section className='home'>
        <Message 
        avatar='https://static6.depositphotos.com/1167801/651/i/450/depositphotos_6517777-stock-photo-rainbow-of-colorful-boxes.jpg' 
        text='Я Глад-валакас!'
        date='Tue May 14 2019 09:19:12'
        />
    </section>
);
   
export default Home;