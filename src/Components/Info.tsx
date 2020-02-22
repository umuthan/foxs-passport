import React from 'react';
import { Grid,
         Typography } from '@material-ui/core';

import { InfoMenu } from './Menu';

const Info: React.FC = () => {

  return (
    <Grid container justify={'center'} alignItems={'center'}>
      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
        <Grid container justify={'center'}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={8}>
            <img src={require('../Assets/img/Fox.png')} width="100%" alt="Little Fox" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
        <Typography variant="h4" color="textSecondary">
          Hi!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          I am a little fox who like to visit new places around the world.
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Help me to fill my Passport with new places.
        </Typography>
        <InfoMenu />
      </Grid>
    </Grid>
  );
}

export default Info;
