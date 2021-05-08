import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink';
import Container from '../Container/Container';

const Home = ({title, subtitle, lists}) => (
  <Container>
    <main className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      {lists.map(listData => (
        <ListLink key={listData.id} {...listData} />
      ))}
    </main>
  </Container>
);


Home.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
};

export default Home;