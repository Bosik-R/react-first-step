import React from 'react';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator 
              text={settings.columnCreatorText} 
              action={addColumn}
            />
          </div>
        </section>
      </Container>
    );
  }
}

export default List;
