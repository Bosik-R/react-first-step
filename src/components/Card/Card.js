import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = ({title}) => (
  <section className={styles.component}>
    <h3 className={styles.title}>{title}</h3>
  </section>
);

Card.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.node,
};

export default Card;