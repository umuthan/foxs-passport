import React from 'react';
import { Grid,
         Typography } from '@material-ui/core';

const NotFound: React.FC = () => {

  return (
    <Grid container justify={'center'}>
      <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
        <Typography variant="h3" color="textSecondary" align="center">
          Shhhh...
        </Typography>
        <br />
        <img src={require('../Assets/img/Sleeping.png')} alt="Sleeping..." width="100%" />
        <br />
        <Typography variant="body1" align="center">
          Little fox is sleeping. Dreaming some places to go.
        </Typography>
        <br />
        <Typography variant="body2" align="center">
          Please, go some other pages quitely...
        </Typography>
      </Grid>
    </Grid>
  );
}

export default NotFound;
