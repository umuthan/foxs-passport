import React, { useEffect, useState } from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';

import ItemForm from './ItemForm';

import { createPost } from '../Api/Api';

const AddItem: React.FC = () => {

  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    long: 0
  })

  const addPost = (post:object) => {
    createPost(post).then((data)=>{
      if(data.title) {
        setAdded(true);
        setTitle(data.title);
      } else {
        setError(true);
      }
    });
  }

  const getPosition = (position:any) => {
    setCurrentLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude
    });
  }

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }

  }, [currentLocation.lat, currentLocation.long]);

  return (
    <>
      { added ? (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {title} added!
        </Alert>
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error while connecting to API.
        </Alert>
      ) : (
        (currentLocation.lat === 0 && currentLocation.long === 0) ? (
          <ItemForm submitCallback={addPost} />
        ) : (
          <>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              Your current location selected in the map.
            </Alert>
            <br />
            <ItemForm lat={currentLocation.lat} long={currentLocation.long} submitCallback={addPost} />
          </>
        )
      )}
    </>
  );
}

export default AddItem;
