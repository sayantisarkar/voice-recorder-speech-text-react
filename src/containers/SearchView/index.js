import React, { Component } from 'react'
import withWidth            from '@material-ui/core/withWidth'
import SearchByAudioRecorder  from './components/SearchByAudioRecorder'
//import { styles }           from './styles.scss'

class SearchView extends Component {
  render() {
    return (
      //<div className={styles}>
        <div className="search-view-container">
          <SearchByAudioRecorder />
        </div>
      //</div>
    )
  }
}

export default withWidth()(SearchView)
