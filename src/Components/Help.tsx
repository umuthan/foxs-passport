import React, { useState } from 'react';
import { ExpansionPanel,
         ExpansionPanelSummary,
         ExpansionPanelDetails,
         Grid,
         Typography } from '@material-ui/core';

const Help: React.FC = () => {

  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid container justify={'center'} spacing={3}>
      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h5">Why do you do this application?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              This application is my test asset for wefox.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography variant="h5">What is little fox doing?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Little fox likes to travel around the world. You can help it by adding new places to its passport.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant="h5">How can i add a place?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Click Add an Item menu. Fill the fields. And click the submit button. Don't forget Title and Content is required.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography variant="h5">Can i edit an item?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Yes, you can. Just click Edit Items menu. Click the Edit Icon which one you want to edit. You can edit item's details in the edit page. Don't forget Title and Content is required.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
        <Grid container justify={'center'}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <img src={require('../Assets/img/FoxPaw.png')} width="100%" alt="Fox Paw" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Help;
