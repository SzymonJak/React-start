import React from 'react';
import styles from './Search.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class SearchResult extends React.Component {

    static propTypes = {
      // title: PropTypes.string,
      // name: PropTypes.node,
      cards: PropTypes.array,
      // icon: PropTypes.node,
    }

    // static defaultProps = {
    //   icon: settings.defaultColumnIcon,
    // }

    render() {
      const {cards} = this.props;
      return (
        <section className={styles.component}>
          {/* <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3> */}
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      );
    }
}

export default SearchResult;