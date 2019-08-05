import React from 'react';

import VideoItem from './VideoItem';

import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideolSelect }) => {

  const listOfVideos = videos.map((video, id) => <VideoItem onVideolSelect={onVideolSelect} key={id} video={video}/>)

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  )
}

export default VideoList;