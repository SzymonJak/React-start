import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        picture: PropTypes.string,
        children: PropTypes.node,
    }

    static defaultProps = {
        children: <p>Tell me how??</p>
    }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} pictureLink={this.props.picture}/>
        <div className={styles.description}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleColumn={'I feel the ice cracking'} />
          <Column titleColumn={'It might have been a mistake'} />
          <Column titleColumn={'So I\'d better run away'} />
        </div>
      </section>
    )
  }
}

export default List;
