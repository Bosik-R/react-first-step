/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import ListLink from '../ListLink/ListLink';

class SearchResults extends React.Component {
	static propTypes = {
	  cards: PropTypes.array,
	  match: PropTypes.object, 
	  changeSearchString: PropTypes.func,
	}

	componentDidMount(){
	  const updatedSearchString = this.props.match.params.searchString;
	  this.props.changeSearchString(updatedSearchString);
	}

	componentDidUpdate(previousProps) {
	  if (previousProps.searchString != this.props.match.params.searchString) {
	    this.props.changeSearchString(this.props.match.params.searchString);
	  }
	}
	
	render() {
	  const {cards} = this.props;
		
	  return (
	    <Container>
	      <p>wynik szukania</p>
	    	<section className={styles.component}>
	        {cards.map(cardData => (
	          <ListLink key={cardData.id} title={cardData.title} id={cardData.listId} />
	        ))}
	    	</section>
	    </Container>
	  );
	}
}

export default SearchResults;
