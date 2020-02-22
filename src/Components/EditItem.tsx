import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

import { Grid,
         Typography,
         CircularProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import { getPost, updatePost } from '../Api/Api';

import ItemForm from './ItemForm';

const EditItem: React.FC = () => {

  const { id } = useParams();

  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [itemDetails, setItemDetails] = useState({
    title: '',
    content: '',
    image_url: '',
    lat: 0,
    long: 0
  });

  useEffect(() => {

    getPost(id).then(post=>{
      setItemDetails(post);
      setLoading(false);
    })

  }, [id]);

  const editPost = (post:object) => {
    updatePost(id, post).then((post)=>{
      if(post.title) {
        setUpdated(true);
        setItemDetails(post);
      }
    });
  }

  const {
    title,
    content,
    image_url,
    lat,
    long
  } = itemDetails;

  return (
    loading ? (
      <Grid container justify={'center'}>
        <CircularProgress />
      </Grid>
    ) : (
      title ? (
        <>
          <Typography variant="h2">Edit {title}</Typography>
          { updated && (
            <>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                {title} updated!
              </Alert>
              <br />
            </>
          )}
          <ItemForm title={title} content={content} image_url={image_url} lat={lat} long={long} submitCallback={editPost} />
        </>
      ) : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Item not found!
        </Alert>
      )
    )
  );
}

export default EditItem;
