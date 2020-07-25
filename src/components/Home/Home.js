import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink';

const Home = ({title, subtitle, lists}) => (
  <main className={styles.component}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.subtitle}>{subtitle}</h2>
    {lists.map(listData => (
      <ListLink key={listData.id} {...listData} />
    ))}
  </main>
);


Home.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
};

export default Home;