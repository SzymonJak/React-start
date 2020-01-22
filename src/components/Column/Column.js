import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // }

    static propTypes = {
      title: PropTypes.string,
      name: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
    }

    // addCard(title) {
    //   this.setState(state => (
    //     {
    //       cards: [
    //         ...state.cards,
    //         {
    //           key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
    //           title,
    //         },
    //       ],
    //     }
    //   ));
    // }

    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>
      );
    }
}

export default Column;