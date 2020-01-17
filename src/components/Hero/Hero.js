import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>Walk on Water</h2>
        <img className={styles.image} src={'https://images.pexels.com/photos/2170473/pexels-photo-2170473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} alt="rays in water"/>
    </header>
);

export default Hero;