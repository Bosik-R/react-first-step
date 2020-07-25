import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {
  createAction_changeSearchString, 
  getCardsFromSearch,
} from '../../redux/searchStringRedux';

//const mapStateToProps = (state) =>({
//  cards: getCardsFromSearch(state),
//});
const mapStateToProps = (state) => ({
  cards: getCardsFromSearch(state),
});


const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);