import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideolSelect }) => {
  return(
    <Grid item xs={12}>
      <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} 
      onClick={()=> onVideolSelect(video)}>
        <img style={{ marginRight: '20px'}} 
        alt='thumbnail of video' 
        src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem;