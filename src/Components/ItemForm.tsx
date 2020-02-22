import React, { useState, useEffect } from 'react';

import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { FormControl,
         InputLabel,
         TextField,
         FilledInput,
         FormHelperText,
         Button,
         Grid } from '@material-ui/core';

interface IProps {
  title?: string;
  content?: string;
  image_url?: string;
  lat?: number;
  long?: number;
  submitCallback?: any;
}

const ItemForm: React.FC<IProps> = (props) => {

  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const [post, setPost] = useState({
    title: props.title,
    content: props.content,
    image_url: props.image_url,
    lat: props.lat,
    long: props.long
  });

  const handleSubmit = (e: React.FormEvent) => {
    post.title || setTitleError(true);
    post.content || setContentError(true);

    (post.title && post.content) && props.submitCallback(post);

    e.preventDefault();
  }

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    post.title = e.target.value;
  }

  const contentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    post.content = e.target.value;
  }

  const imageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      title: post.title,
      content: post.content,
      image_url: e.target.value,
      lat: post.lat,
      long: post.long
    })
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

  const locationChange = (e: any) => {
    post.lat = e.target._latlng.lat;
    post.long = e.target._latlng.lng;
  }

  useEffect(() => {

    if(!post.lat && !post.long) {
      setPost({
        title: post.title,
        content: post.content,
        image_url: post.image_url,
        lat: 41.3948976,
        long: 2.0787279
      })
    }

  }, [post.lat, post.long, post.title, post.content, post.image_url]);

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl variant="filled" fullWidth={true} error={titleError} required={true}>
            <InputLabel htmlFor="component-filled">Title</InputLabel>
            <FilledInput id="component-filled" defaultValue={post.title} onChange={titleChange} />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="filled-textarea"
            label="Content"
            multiline
            variant="filled"
            defaultValue={post.content}
            onChange={contentChange}
            required={true}
            error={contentError}
            fullWidth={true}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <FormControl variant="filled" fullWidth={true}>
            <InputLabel htmlFor="component-filled">Image URL</InputLabel>
            <FilledInput id="component-filled" defaultValue={post.image_url} onChange={imageURLChange} />
            {post.image_url && (
              <img src={post.image_url} width="100%" alt="Preview" />
            )}
          </FormControl>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <InputLabel htmlFor="component-filled">Location</InputLabel>
          {(post.lat && post.long) && (
            <Map style={{width: '100%',height: '50vh'}} center={[post.lat, post.long]} zoom={13}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker icon={markerIcon} position={[post.lat, post.long]} draggable={true} onDragEnd={locationChange}>

              </Marker>
            </Map>
          )}
          <FormHelperText id="location-helper-text">You can drag Marker to select location.</FormHelperText>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify='flex-end'>
        <Grid item lg={2} xs={12}>
          <Button type="submit" fullWidth={true} variant="contained" size="large" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ItemForm;
