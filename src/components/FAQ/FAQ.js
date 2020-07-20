import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore'; 

const Faq = () => (
  <Container>
    <Hero titleText={faqContent.title} image={faqContent.image} />
    <p>{faqContent.description} </p>
  </Container>
);

export default Faq;