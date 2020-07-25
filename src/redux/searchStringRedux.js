// selectors
export const getSearchString = (searchState) => searchState.searchString;

export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

export const getCardsFromSearch = ({cards, columns, searchString}) =>
  mapCards({cards, columns}).filter(card => new RegExp(searchString, 'i').test(card.title));

export const mapCards = ({cards, columns}) => {
  return cards.map(card => {
    const filteredColumns = columns.filter(column => column.id === card.columnId);
    return {
      ...card,
      listId: filteredColumns[0].listId,
    };
  });
};

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE});
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}
