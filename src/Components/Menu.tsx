import React from 'react';

import { Divider,
         List,
         ListItem,
         ListItemIcon,
         ListItemText } from '@material-ui/core';
import { InfoOutlined as InfoIcon,
         MenuBook as PassportIcon,
         Map as MapIcon,
         TableChart as TableChartIcon,
         AddCircle as AddIcon,
         Edit as EditIcon,
         RemoveCircle as RemoveIcon,
         HelpOutlineOutlined as HelpIcon } from '@material-ui/icons';

import { NavLink } from "react-router-dom";

const MainMenu: React.FC = () => {
  return(
    <List>
      <ListItem button component={NavLink} to='/info' activeClassName="Mui-selected">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Info" />
      </ListItem>
    </List>
  )
};

const ViewMenu: React.FC = () => {
  return(
    <List>
      <ListItem button component={NavLink} to='/passport' activeClassName="Mui-selected">
        <ListItemIcon>
          <PassportIcon />
        </ListItemIcon>
        <ListItemText primary="Passport" />
      </ListItem>
      <ListItem button component={NavLink} to='/map' activeClassName="Mui-selected">
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Map" />
      </ListItem>
      <ListItem button component={NavLink} to='/table' activeClassName="Mui-selected">
        <ListItemIcon>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText primary="Table" />
      </ListItem>
    </List>
  )
};

const OperationMenu: React.FC = () => {
  return(
    <List>
      <ListItem button component={NavLink} to='/add-item' activeClassName="Mui-selected">
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Item" />
      </ListItem>
      <ListItem button component={NavLink} to='/edit-items' activeClassName="Mui-selected">
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit Items" />
      </ListItem>
      <ListItem button component={NavLink} to='/remove-items' activeClassName="Mui-selected">
        <ListItemIcon>
          <RemoveIcon />
        </ListItemIcon>
        <ListItemText primary="Remove Item" />
      </ListItem>
    </List>
  )
};

const SupportMenu: React.FC = () => {
  return(
    <List>
      <ListItem button component={NavLink} to='/help' activeClassName="Mui-selected">
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
    </List>
  )
};

const InfoMenu: React.FC = () => {
  return(
    <List>
      <ListItem button component={NavLink} to='/passport'>
        <ListItemIcon>
          <PassportIcon />
        </ListItemIcon>
        <ListItemText primary="See My Passport" />
      </ListItem>
      <ListItem button component={NavLink} to='/map'>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="See the World Map" />
      </ListItem>
      <ListItem button component={NavLink} to='/add-item'>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add A New Place" />
      </ListItem>
      <ListItem button component={NavLink} to='/edit-items'>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit Places" />
      </ListItem>
      <ListItem button component={NavLink} to='/help'>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
    </List>
  )
};

const Menu: React.FC = () => {

  return (
    <>
      <Divider />
      <MainMenu />
      <Divider />
      <ViewMenu />
      <Divider />
      <OperationMenu />
      <Divider />
      <SupportMenu />
      <Divider />
    </>
  )

}

export { Menu, InfoMenu }
