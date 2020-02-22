import React, { useState, useEffect } from 'react';

import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Button,
         Dialog,
         DialogActions,
         DialogContent,
         DialogContentText,
         DialogTitle } from '@material-ui/core';

import { styles } from '../theme';

import { deletePost } from '../Api/Api';

interface IProps {
  type: string;
  title: string;
  content: any;
  id: string;
  callbackFunction?: any;
}

const DialogView: React.FC<IProps> = (props) => {

  const classes = styles();

  const { type,
          title,
          content,
          id } = props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    id && handleOpen();
  }, [id])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletePost = () => {
    deletePost(content.id).then(() => {
      handleClose();
      props.callbackFunction();
    });
  }

  const L = require('leaflet');

  const markerIcon = L.icon({
     iconUrl: require('../Assets/img/Marker.svg'),
     iconSize: [64,64],
     iconAnchor: [32, 64],
     popupAnchor: null,
     shadowUrl: null,
     shadowSize: null,
     shadowAnchor: null
  });

  const position: [number, number] = [content.lat, content.long];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      aria-labelledby="dialog-title"
    >
      <DialogTitle id="dialog-title">
        {type === 'image' && (
          'Image of '+title
        )}
        {type === 'map' && (
          'Location of '+title
        )}
        {type === 'delete' && (
          'Are you sure?'
        )}
      </DialogTitle>
      <DialogContent>
        {type === 'image' && (
          <img width="100%" src={content.image} alt={title} />
        )}
        {type === 'map' && (
          <Map
            className={classes.dialogMap}
            center={position}
            zoom={13}
            doubleClickZoom={false}
            closePopupOnClick={false}
            dragging={false}
            trackResize={false}
            touchZoom={false}
            scrollWheelZoom={false}
            zoomControl={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker icon={markerIcon} position={position}>

            </Marker>
          </Map>
        )}
        {type === 'delete' && (
          <DialogContentText>
            This action cannot be undone. Are you sure to delete {title}?
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        { type === 'delete' ? (
          <>
            <Button onClick={handleDeletePost} color="primary" autoFocus>
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No
            </Button>
          </>
        ) : (
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default DialogView;
