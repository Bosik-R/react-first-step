/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';

const Column = ({title, icon, cards, addCard}) => (
  <section className={styles.component}>
	  <h3 className={styles.title}>{title}
	    <span className={styles.icon}> 
	      <Icon name={icon} /> 
	    </span>
	  </h3>
	  <div>
	    {cards.map(cardData => (
	      <Card key={cardData.id} {...cardData} />
	    ))}
	  </div>
	  <div className={styles.creator}>
	    <Creator 
	      text={settings.cardCreatorText} 
	      action={addCard}
	    />
	  </div>
  </section>
);

Column.propTypes = {
  title: PropTypes.node,
  name: PropTypes.node,
  cards: PropTypes.array,
  icon: PropTypes.node,
  addCard: PropTypes.func,
};

Column.defaultProps = {
	 icon: settings.defaultColumnIcon,
};

export default Column;