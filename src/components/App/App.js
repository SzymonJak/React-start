import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/* <List {...listData} /> */}
      </main>
    );
  }
}

export default App;

// title={['Walk on Water', <sup key='1'>really!</sup>]}
