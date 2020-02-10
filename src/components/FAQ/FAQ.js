import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero
      titleText={FAQContent.title}
      image={FAQContent.image}
    />
    <p>{FAQContent.text}</p>
  </Container>
);

export default FAQ;