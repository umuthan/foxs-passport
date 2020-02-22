import React, { useState } from 'react';

import { Drawer,
         Box,
         IconButton,
         Container,
         Grid,
         Paper,
         Typography } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

import clsx from 'clsx';
import {styles} from './theme';

import { BrowserRouter as Router,
         Switch,
         Route,
         Redirect } from "react-router-dom";

import Header from './Components/Header';
import { Menu } from './Components/Menu';
import Footer from './Components/Footer';

import Info from './Components/Info';
import Passport from './Components/Passport';
import DataTable from './Components/DataTable';
import MapView from './Components/MapView';
import AddItem from './Components/AddItem';
import EditItem from './Components/EditItem';
import Help from './Components/Help';
import NotFound from './Components/NotFound';

const App: React.FC = () => {

  const classes = styles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <div className={classes.root}>
     <Header open={open} handleDrawerOpenCallback={handleDrawerOpen} />
     <Drawer
       variant="permanent"
       classes={{
         paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
       }}
       open={open}
     >
       <div className={classes.toolbarIcon}>
         <IconButton onClick={handleDrawerClose}>
           <ChevronLeftIcon />
         </IconButton>
       </div>
       <Menu />
     </Drawer>
     <main className={classes.content}>
       <div className={classes.appBarSpacer} />
       <Container maxWidth="lg" className={classes.container}>
         <Grid container spacing={3}>
           <Grid item xs={12}>
             <Paper className={classes.paper}>
               <Switch>
                <Route path="/passport">
                  <Typography variant="h2">Passport</Typography>
                  <Passport />
                </Route>
                <Route path="/map">
                  <Typography variant="h2">Map</Typography>
                  <MapView />
                </Route>
                <Route path="/table">
                  <Typography variant="h2">Table View</Typography>
                  <DataTable remove={false} edit={false} />
                </Route>
                <Route path="/add-item">
                  <Typography variant="h2">Add an Item</Typography>
                  <AddItem />
                </Route>
                <Route path="/edit-items">
                  <Typography variant="h2">Edit Items</Typography>
                  <DataTable remove={false} edit={true} />
                </Route>
                <Route path="/remove-items">
                  <Typography variant="h2">Remove Items</Typography>
                  <DataTable remove={true} edit={false} />
                </Route>
                <Route path="/edit/:id">
                  <EditItem />
                </Route>
                <Route path="/help">
                  <Typography variant="h2">Help</Typography>
                  <Help />
                </Route>
                <Route path="/info">
                  <Typography variant="h2">Info</Typography>
                  <Info />
                </Route>
                <Route exact path="/" render={() => (<Redirect to="/info" />)} />
                <Route path="*">
                  <Typography variant="h2">404</Typography>
                  <NotFound />
                </Route>
               </Switch>
             </Paper>
           </Grid>
         </Grid>
         <Box pt={4}>
           <Footer />
         </Box>
       </Container>
     </main>
    </div>
    </Router>
  );
}

export default App;
