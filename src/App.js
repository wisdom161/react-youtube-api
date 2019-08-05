import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails } from './components'

import youtube from './api/youtube';

class App extends Component {
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyD3Zk3CtIMj4B5kkVdtBhDf4O9i_lFovjU'
      }
    });

    console.log(response);
  }
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/> 
            </Grid>
            <Grid item xs={8}>
              <VideoDetails />
            </Grid>
            <Grid item xs={4}>
              {/*video list*/}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}


export default App;